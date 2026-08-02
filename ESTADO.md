# ESTADO — AmorPropio & SOS
Última actualización: 2026-07-29 | Sesión actual: 4 (Onboarding, paywall y login — arrancando)

⏸️ CHECKPOINT — Última acción completada: Sesión 3 (landing) cerrada tras 15 rondas de revisor-visual + auditoría de escaneabilidad mobile (30/40 usabilidad, 15/20 craft, 19/20 copy — no llegó al gate de 36/40 pero sin bugs reales pendientes; se detuvo la iteración por oscilación del revisor automático). Usuario confirmó avanzar a Sesión 4. / Siguiente acción exacta: leer 02B-ONBOARDING-Y-PAYWALL.md + 50-DISENO-ONBOARDING-PAYWALL.md antes de diseñar la primera pantalla del onboarding.

## Qué es esta app (3 líneas máximo)
App web de bienestar emocional para mujeres hispanohablantes: botón SOS de auxilio inmediato en crisis de pánico + hábito diario de afirmaciones y ejercicios de amor propio ("el Ritual de 2 Minutos"). Modelo Onboarding+Paywall con trial de 3 días, venta por Hotmart.

## Promesa central
"AmorPropio & SOS ayuda a mujeres hispanohablantes a calmar una crisis de pánico en segundos y construir su amor propio día a día, con un botón de auxilio inmediato y afirmaciones + ejercicios que sí se sienten personales — sin las frases vacías ni el precio en dólares de las apps de afuera."

## Reporte de validación (Sesión 1)
- Veredicto: Excelente oportunidad (85/100, informe de mercado del usuario)
- Apps de referencia: I am - Daily Affirmations (~$400K USD/mes), Rootd (botón de pánico + CBT, ~$1M+ acumulado)
- Brecha LATAM confirmada: sin competidor fuerte que combine SOS + amor propio diario en español
- Precio de referencia del mercado: $3.99-14.99 USD/mes → app se posiciona en $3.99/mes o $24.99/año

## Formato del producto
- **App WEB** (no nativa de tiendas). "Widgets nativos" → ícono en pantalla de inicio (PWA/atajo) + notificaciones push web; cobro por Hotmart (no Apple/Google).

## Dirección de Arte (Sesión 2 — NO cambiar sin justificación)
- FICHA-ARTE.md: existe y aprobada — 2026-07-29
- Resumen: fondo #FBF3EC · acento #A85434 (corregido desde #D9704F el 2026-07-29 por falla de contraste AA — ver FICHA-ARTE.md) · 2ª nota #B0473A · Display "Zilla Slab" · Body "Plus Jakarta Sans" · radio 18px (chips 8px/radius-sm, botones 16px/radius-lg, cards 18px/radius-xl)
- Personalidad: Cálido (dominante) · Sereno · Minimal — voz: mentor sereno con calidez
- Dirección: "Carta cálida" — combinación de Opción A (Headspace+Flo) + Opción C (I am + editorial)
- Dispositivo ownable: comilla editorial grande (SOLO donde acompaña una frase citada real — hero, mini-card del diario) + chip "post-it" rotado -2°
- REGISTRO ANTI-REPETICIÓN: paleta terracota/coral + par Zilla Slab/Plus Jakarta Sans VETADOS para el próximo proyecto del SO

## Avatar y venta (Sesión 1 — NO cambiar sin validar)
- FICHA-AVATAR.md: existe y APROBADA por el usuario — 2026-07-29 (corrección aplicada: rango de edad ampliado a 18-60, antes 18-38)
- Resumen: "Vale", 18-60 años, LATAM/España, diálogo interno "no soy suficiente" + miedo a crisis de pánico en soledad · dolor #1: "no soy suficiente" · deseo #1: "que algo me hable a mí, no frases genéricas" · consciencia nivel 3 · sofisticación etapa 3

## Estrategia de monetización (Sesión 1 — NO cambiar sin validar)
- Modelo: **Modelo 2 — Onboarding + Paywall de prueba**, variante preview anónimo (sin cuenta) → paywall → login/auth al convertir — NO registro gratis previo
- Excepción ética: el **botón SOS queda SIEMPRE accesible sin pago**
- Trial: 3 días gratis del plan Premium, luego $3.99 USD/mes o $24.99 USD/año (~$2.08/mes)
- Plan Premium incluye: afirmaciones/itinerarios ilimitados por tema, diario privado, audios para dormir, ejercicios guiados de reencuadre

## Reglas "nunca" del producto
Nunca reemplaza ayuda profesional ni diagnostica · nunca comparte el diario privado de la usuaria · nunca presiona con culpa/miedo para retener o vender · nunca cobra nada oculto sin avisar antes.

## Secuencia maestra de construcción (NO saltar)
- Ruta aprobada: `/` → `/onboarding` → `/paywall` → `/login` → `/app`
- **Landing: CONSTRUIDA y CERRADA** (10 secciones canónicas). Mecanismo bautizado: "el Ritual de 2 Minutos". CTA lleva a `/onboarding?plan=annual|monthly`. Páginas legales del footer creadas con contenido real (privacidad, términos, reembolso, disclaimer) — revisar detalle fiscal LATAM antes de vender de verdad.
- Carrusel de la landing (sección "así se siente por dentro"): mini-demos honestos con contenido real, NO screenshots reales todavía — reemplazar cuando la app interna exista (Sesión 5)
- `/onboarding` y `/login`: placeholders honestos (no 404) — se construyen AHORA en Sesión 4
- Onboarding: EN PROGRESO
- Paywall: pendiente (Sesión 4)
- Login/Auth: pendiente (Sesión 4)
- App interna: pendiente (Sesión 5)
- Servicios externos (Supabase/Hotmart/Vercel reales): pendiente (Sesión 6) — usuario preguntó por ver la landing "en vivo"; se le ofreció guiarlo a crear cuenta Vercel gratis, quedó pendiente de retomar

## Decisiones técnicas (NO re-discutir sin pedirlo el usuario)
- Framework: Next.js App Router — ya scaffoldeado en la raíz del repo, compila limpio (tsc + build verificados repetidas veces)
- Stack instalado: React 19, Next 16, Tailwind v4, lucide-react, motion — Supabase/shadcn AÚN NO instalados (shadcn init falló por política de red del entorno; se construyó todo a mano con Tailwind, funciona bien)
- Auth: Supabase Auth con magic link (passwordless) + Google OAuth opcional — se implementa en Sesión 4/6
- Tipo de app (04): tracking/hábitos/bienestar → vista "Hoy" + histórico/racha + ≥2 logros + celebración en hitos reales
- App interna (borrador): Hoy (afirmación + SOS) · Diario · Progreso/racha · Perfil
- Contenido de afirmaciones: banco curado (~200-500 piezas) con selección algorítmica — NO LLM en tiempo real
- Modelo de datos (borrador): profiles, entradas_diario (RLS user_id), afirmaciones_banco, user_progress (racha, RLS), suscripciones (estado Hotmart)
- Componentes reutilizables ya creados en `components/app/`: Reveal/RevealStagger/RevealItem (motion scroll-reveal), IconChip, Check, Accordion, MotionProvider (reducedMotion), AnimatedNumber, RachaDots, CTALink (con timeout+reintento), LegalPage

## Sesiones completadas ✅
- Sesión 1 — Constitución del producto, avatar, monetización, arquitectura — aprobado 2026-07-29
- Sesión 2 — Identidad visual (FICHA-ARTE.md) — aprobada 2026-07-29
- Sesión 3 — Landing (10 secciones canónicas + auditoría de escaneabilidad) — cerrada 2026-07-29

## Sesión en progreso 🔧
- Sesión 4 — Onboarding, paywall y login: arrancando

## Próximas sesiones 📋
- Sesión 4: onboarding, paywall, login
- Sesión 5: app interna
- Sesión 6: integraciones reales (Supabase, Hotmart, Vercel, dominio) y seguridad
- Sesión 7: testing, pulido, rigor de entrega
- Sesión 8: adquisición, lanzamiento, backoffice

## Pendientes del usuario (acciones que el usuario debe hacer)
- [ ] Crear cuenta gratis en Vercel si quiere ver la landing "en vivo" antes de Sesión 6 (guía paso a paso ofrecida, sin retomar aún)
- [ ] El resto (Supabase, Hotmart, dominio, Resend) se pide cuando lleguemos a Sesión 6

## Notas para la próxima sesión
- El revisor-visual automático puede oscilar/contradecirse en rondas muy largas de la misma pantalla (visto en Sesión 3) — si eso pasa de nuevo, cortar la iteración con criterio propio en vez de seguir indefinidamente.
- El usuario corrige activamente la ficha de avatar (ya corrigió el rango de edad una vez) — seguir preguntando si algo no cuadra en vez de asumir.
