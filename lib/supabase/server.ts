import { createServerClient } from "@supabase/ssr";
import { cookies, headers } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();
  const host = (await headers()).get("host") ?? "";
  // Comparte la cookie entre amorpropiosos.com y www.amorpropiosos.com para
  // que el enlace mágico funcione sin importar por cuál de las dos entró la usuaria.
  const cookieOptions = host.endsWith("amorpropiosos.com")
    ? { domain: ".amorpropiosos.com" }
    : undefined;

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookieOptions,
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Se llama desde un Server Component sin permiso de escritura;
            // el middleware ya se encarga de refrescar la sesión.
          }
        },
      },
    }
  );
}
