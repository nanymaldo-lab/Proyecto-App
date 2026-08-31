import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

const FOCOS_VALIDOS = ["dialogo", "panico", "abandono", "otra"];

function diaDelAnio(date: Date) {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date.getTime() - start.getTime()) / 86400000);
}

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "no autorizado" }, { status: 401 });
  }

  const supabase = createAdminClient();
  const { data: recipients, error } = await supabase.rpc("get_daily_reminder_recipients");
  if (error) {
    console.error("recordatorio diario: error leyendo destinatarias", error);
    return NextResponse.json({ error: "error interno" }, { status: 500 });
  }

  const hoy = diaDelAnio(new Date());
  const cache = new Map<string, { texto: string; ejercicio: string } | null>();

  async function afirmacionPara(foco: string) {
    const focoValido = FOCOS_VALIDOS.includes(foco) ? foco : "otra";
    if (cache.has(focoValido)) return cache.get(focoValido) ?? null;
    let { data } = await supabase
      .from("afirmaciones_banco")
      .select("texto, ejercicio")
      .eq("foco", focoValido)
      .order("id");
    if (!data || data.length === 0) {
      ({ data } = await supabase
        .from("afirmaciones_banco")
        .select("texto, ejercicio")
        .eq("foco", "otra")
        .order("id"));
    }
    const elegida = data && data.length > 0 ? data[hoy % data.length] : null;
    cache.set(focoValido, elegida);
    return elegida;
  }

  let enviados = 0;
  let fallidos = 0;

  for (const r of recipients ?? []) {
    const afirmacion = await afirmacionPara(r.foco ?? "otra");
    if (!afirmacion) continue;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "AmorPropio & SOS <hola@amorpropiosos.com>",
        to: r.email,
        subject: "Tu afirmación de hoy 💛",
        html: `
          <h2>Tu Ritual de hoy</h2>
          <p style="font-size:18px;font-weight:600;">"${afirmacion.texto}"</p>
          <p>${afirmacion.ejercicio}</p>
          <p><a href="https://amorpropiosos.com/app">Abrir mi Ritual</a></p>
        `,
      }),
    });

    if (res.ok) enviados++;
    else fallidos++;
  }

  return NextResponse.json({ ok: true, enviados, fallidos });
}
