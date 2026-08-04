import "server-only";
import { createClient } from "@supabase/supabase-js";

/** Cliente con la service_role key: ignora RLS. SOLO se usa en rutas de
 *  servidor (webhooks), nunca en código que corre en el navegador —
 *  el import "server-only" de arriba rompe el build si alguien lo
 *  importa por error desde un componente cliente. */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
