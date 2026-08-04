import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

const ESTADOS_ACTIVOS = new Set(["PURCHASE_APPROVED", "PURCHASE_COMPLETE"]);
const ESTADOS_CANCELADOS = new Set([
  "PURCHASE_CANCELED",
  "PURCHASE_REFUNDED",
  "PURCHASE_CHARGEBACK",
  "SUBSCRIPTION_CANCELLATION",
  "PURCHASE_EXPIRED",
]);

function detectarPlan(data: Record<string, unknown>): "anual" | "mensual" {
  const raw = JSON.stringify(data).toLowerCase();
  if (raw.includes("anual") || raw.includes("annual") || raw.includes("yearly")) {
    return "anual";
  }
  return "mensual";
}

export async function POST(request: Request) {
  const body = await request.json();

  const hottokRecibido: string | undefined =
    body?.hottok ?? request.headers.get("x-hotmart-hottok") ?? undefined;

  if (!hottokRecibido || hottokRecibido !== process.env.HOTMART_HOTTOK) {
    return NextResponse.json({ error: "hottok inválido" }, { status: 401 });
  }

  const event: string | undefined = body?.event;
  const data = body?.data ?? {};
  const email: string | undefined = data?.buyer?.email;
  const transactionId: string | undefined = data?.purchase?.transaction;

  if (!event || !email) {
    return NextResponse.json({ error: "payload incompleto" }, { status: 400 });
  }

  let status: "active" | "canceled" | null = null;
  if (ESTADOS_ACTIVOS.has(event)) status = "active";
  else if (ESTADOS_CANCELADOS.has(event)) status = "canceled";

  if (!status) {
    // Evento que no cambia el acceso (ej. boleto impreso, esperando pago) — se ignora sin error.
    return NextResponse.json({ ok: true, ignored: event });
  }

  const supabase = createAdminClient();
  const { data: found, error } = await supabase.rpc("upsert_suscripcion_by_email", {
    p_email: email,
    p_plan: detectarPlan(data),
    p_status: status,
    p_hotmart_transaction_id: transactionId ?? null,
    p_trial_ends_at: null,
  });

  if (error) {
    console.error("hotmart webhook rpc error", error);
    return NextResponse.json({ error: "error interno" }, { status: 500 });
  }

  if (!found) {
    // La compra llegó pero esa persona todavía no se registró en la app
    // con ese correo — no es un error del webhook, es normal si paga
    // antes de crear su cuenta. No hay nada más que hacer acá todavía.
    return NextResponse.json({ ok: true, pendingRegistration: true });
  }

  return NextResponse.json({ ok: true });
}
