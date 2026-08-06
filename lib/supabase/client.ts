import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const isAmorPropioDomain =
    typeof window !== "undefined" && window.location.hostname.endsWith("amorpropiosos.com");

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    // Comparte la cookie entre amorpropiosos.com y www.amorpropiosos.com para
    // que el enlace mágico funcione sin importar por cuál de las dos entró la usuaria.
    isAmorPropioDomain
      ? { cookieOptions: { domain: ".amorpropiosos.com" } }
      : undefined
  );
}
