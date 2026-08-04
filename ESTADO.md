# ESTADO — AmorPropio & SOS
Última actualización: 2026-08-03 | Sesión actual: ninguna en curso (Sesión 5 cerrada + logo instalado)

⏸️ CHECKPOINT — SESIÓN 5 CERRADA (app interna completa + Vercel conectado, ver detalle completo en "Sesiones completadas"). Después de cerrarla, el usuario compartió el logo real de la app (corazón de línea continua con colitas onduladas) — se reconstruyó como SVG matemático (el archivo original solo se vio en el chat, nunca quedó accesible en disco de este entorno) y se instaló en TODA la app reemplazando el placeholder de ícono Lucide: `public/brand/logo-mark.svg` + variantes (transparente/inversa/maskable) + favicon + iconos PWA 192/512/apple-touch + `manifest.json` completo (instalable en pantalla de inicio). Documentado en FICHA-ARTE.md con instrucciones para reemplazar por el archivo original si el usuario lo consigue más adelante. Después el usuario también compartió un video corto (mujer sonriendo al abrir el celular, con el logo animándose) — se integró en la landing, sección 9 "CTA final emocional" (`app/page.tsx`), reemplazando el ícono BookHeart que estaba ahí: el contenido del video coincide casi literal con el copy ya existente ("Imagina abrir el día hablándote como mereces"). Comprimido a `public/videos/hero-abrir-app.{mp4,webm}` + poster, autoplay/muted/loop, verificado que reproduce sin errores. VERCEL: cuenta creada, GitHub App instalada (acceso solo a `nanymaldo-lab/Proyecto-App`), proyecto importado y funcionando tras 2 fixes: (1) Production Branch de Vercel es `main` y esa rama está vacía (solo "Initial commit", todo el código real vive en `claude/startup-prompt-projects-ctatsf`) — se empujó un commit vacío para forzar un Preview deployment de esa rama; (2) el "Framework Preset" del proyecto estaba en "Other" en vez de "Next.js" — usuario lo corrigió en Settings y hubo que hacer Redeploy. Preview quedó "Ready", usuaria confirmó haber visto la app real en su celular vía QR. URLs de preview activas (cambian en cada nuevo deploy de esta rama): `proyecto-app-git-claude-startup-prompt-project-c39oce-nannnette.vercel.app` y `proyecto-fvx9jac6h-nannnette.vercel.app`. Production (`main`) sigue vacío/404 A PROPÓSITO — mergear a main es una decisión pendiente de conversar antes de Sesión 6. / Siguiente acción exacta: preguntar al usuario cómo seguir — Sesión 6 (Supabase, Hotmart, dominio, Resend) es el paso que sigue en la Secuencia Maestra.
APP INTERNA: las 4 pantallas (Hoy/Diario/Progreso/Perfil) pasaron por revisor-visual y se corrigieron todos los defectos reales encontrados (2 rondas: construcción inicial + ronda de profundización pedida por el usuario). Detalle completo en "Sesiones completadas" abajo. Ningún gate numérico (36/40+16/20) se cruzó formalmente — el propio revisor-visual recomendó, en la última ronda, dejar de iterar por bugs (ya no quedan reales) y tratar la brecha restante como pulido fino de craft, no como defectos bloqueantes; se siguió esa recomendación y se cerró la sesión. / Siguiente acción exacta: preguntar al usuario cómo seguir — Sesión 6 (Supabase real, Hotmart, dominio, Resend, y ahí sí decidir cuándo mergear a main) es el paso que sigue en la Secuencia Maestra.

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
- Onboarding: CONSTRUIDO y CERRADO (4 pasos + loading personalizado)
- Paywall: CONSTRUIDO y CERRADO tras 4 rondas de revisor-visual (ver checkpoint arriba)
- Login/Auth: CONSTRUIDO (magic link + Google OAuth, ambos simulados con localStorage — auth real es Sesión 6), sin ronda de revisor-visual propia
- App interna: CONSTRUIDA (Sesión 5) — Hoy/Diario/Progreso/Perfil, sobre localStorage. Falta: 2da ronda opcional de revisor-visual y revisión de Diario/Progreso/Perfil (solo "Hoy" pasó por revisor-visual esta sesión)
- Servicios externos (Supabase/Hotmart/Vercel reales): pendiente (Sesión 6) — Vercel se empezó a conectar en Sesión 5 y quedó a medias (ver checkpoint), retomar antes o al inicio de Sesión 6

## Decisiones técnicas (NO re-discutir sin pedirlo el usuario)
- Framework: Next.js App Router — ya scaffoldeado en la raíz del repo, compila limpio (tsc + build verificados repetidas veces)
- Stack instalado: React 19, Next 16, Tailwind v4, lucide-react, motion — Supabase/shadcn AÚN NO instalados (shadcn init falló por política de red del entorno; se construyó todo a mano con Tailwind, funciona bien)
- Auth: Supabase Auth con magic link (passwordless) + Google OAuth opcional — se implementa en Sesión 6
- Tipo de app (04): tracking/hábitos/bienestar → vista "Hoy" + histórico/racha + ≥2 logros + celebración en hitos reales
- App interna: Hoy (afirmación del día por foco + ejercicio + racha + SOS/diario) · Diario (entradas con mood tag) · Progreso (racha, semana, logros) · Perfil (trial, ajustes, soporte, legal) — todas con `components/app/BottomNav.tsx`, layout compartido en `app/app/layout.tsx`
- Estado de la app: `lib/app-state.ts` (localStorage, `loadAppStateWithStatus` expone si hubo que recuperar datos corruptos) — cuando Supabase exista en Sesión 6, esta capa se reemplaza por tablas reales (no antes)
- `/sos` reusado como destino real del botón SOS en "Hoy" (no se duplicó la pantalla)
- Contenido de afirmaciones: banco curado en `lib/afirmaciones.ts` (~25 piezas por ahora, categorizadas por foco del onboarding) con selección algorítmica por día — NO LLM en tiempo real. Ampliar a 200-500 piezas es tarea de pulido, no bloqueante
- Modelo de datos (borrador): profiles, entradas_diario (RLS user_id), afirmaciones_banco, user_progress (racha, RLS), suscripciones (estado Hotmart)
- Componentes reutilizables ya creados en `components/app/`: Reveal/RevealStagger/RevealItem (motion scroll-reveal), IconChip, Check, Accordion, MotionProvider (reducedMotion), AnimatedNumber, RachaDots, CTALink (con timeout+reintento), LegalPage

## Sesiones completadas ✅
- Sesión 1 — Constitución del producto, avatar, monetización, arquitectura — aprobado 2026-07-29
- Sesión 2 — Identidad visual (FICHA-ARTE.md) — aprobada 2026-07-29
- Sesión 3 — Landing (10 secciones canónicas + auditoría de escaneabilidad) — cerrada 2026-07-29
- Sesión 4 — Onboarding + paywall + login (4 rondas de revisor-visual sobre el paywall, ver checkpoint) — cerrada 2026-08-02
- Sesión 5 — App interna (Hoy/Diario/Progreso/Perfil) + Vercel conectado — cerrada 2026-08-03. "Hoy": 1 ronda (27/40·12/20 → 5 defectos corregidos, incluye bug propio de `AnimatedNumber` con `useInView`). Diario/Progreso/Perfil: 1 ronda (27/40·12/20 · 30/40·15/20 · 27/40·12/20) con 10 defectos reales corregidos (borrado de entradas, estado vacío, cerrar sesión real, feedback de tap, dispositivo ownable del diario, nivel hundido, texto de progreso en logros) + 1 ronda de verificación que confirmó los 10 resueltos y encontró 1 nuevo (botón eliminar por debajo del mínimo táctil de 44px) ya corregido. El revisor-visual recomendó explícitamente parar de iterar por bugs (ya no quedaban reales) — se siguió esa recomendación. Banco de afirmaciones ampliado de ~25 a 39 piezas.

## Sesión en progreso 🔧
- Ninguna — a la espera de que el usuario confirme avanzar a Sesión 6 (Supabase, Hotmart, dominio, Resend)

## Próximas sesiones 📋
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
