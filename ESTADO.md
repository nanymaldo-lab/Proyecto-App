# ESTADO — AmorPropio & SOS
Última actualización: 2026-08-04 | Sesión actual: 6 (Servicios reales — Supabase+Resend conectados, en progreso)

⏸️ CHECKPOINT — SESIÓN 6 EN PROGRESO. Login real y base de datos YA FUNCIONAN de punta a punta (verificado por la usuaria: registro con correo real, enlace mágico, entra a /app, sesión persiste).

⚠️ URL CORRECTA DEL PREVIEW (ojo, hubo un typo repetido muchas veces en la sesión anterior — "c39oce" con letra O era INCORRECTO):
`https://proyecto-app-git-claude-startup-prompt-project-c390ce-nannnette.vercel.app` (c390ce, con el NÚMERO cero). Verificar siempre este valor contra la API de Vercel antes de repetirlo, no de memoria.

SUPABASE: proyecto `amor propo sos` creado, conectado vía `NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY` en Vercel (Production+Preview). Esquema completo corrido a mano en el SQL Editor (`supabase/schema.sql` + `supabase/seed-afirmaciones.sql` en el repo, son la fuente de verdad — no hay CLI/migraciones formales todavía): profiles, entradas_diario, afirmaciones_banco (43 filas cargadas), user_progress, suscripciones — todas con RLS por `(select auth.uid())` + trigger `handle_new_user` que crea las filas iniciales al registrarse. Código: `lib/supabase/{client,server}.ts`, `proxy.ts` (protege `/app`, reemplaza `middleware.ts` — Next 16 renombró la convención), `app/auth/callback/route.ts`, `lib/supabase-data.ts` (reemplazó y se borraron `lib/app-state.ts` + `lib/afirmaciones.ts`). Las 4 pantallas de `/app` y el login ya leen/escriben datos reales. Racha con lógica de fecha correcta (no solo "+1 siempre"). Google OAuth QUEDÓ PENDIENTE (se sacó el botón del login en vez de dejarlo decorativo — necesita proyecto aparte en Google Cloud).

RESEND: conectado como SMTP personalizado de Supabase Auth (Project Settings → Authentication → Emails → SMTP Settings) para saltar el límite de correos gratis de Supabase (~pocos/hora, lo topamos en pruebas). Sender temporal `onboarding@resend.dev` (sin dominio propio verificado todavía — pendiente para cuando se conecte el dominio real en esta misma Sesión 6).

VERCEL (de la sesión anterior, sigue vigente): cuenta creada, GitHub App instalada (acceso solo a `nanymaldo-lab/Proyecto-App`), Deployment Protection ("Vercel Authentication") DESACTIVADA a nivel proyecto (estaba bloqueando el acceso público con un 404 engañoso — diagnosticar esto primero si el link vuelve a dar 404). Production (`main`) sigue vacío/404 A PROPÓSITO — mergear a main sigue pendiente de conversar.

Logo (SVG reconstruido a mano, ver FICHA-ARTE.md) y video del usuario (landing, sección 9) del checkpoint anterior siguen vigentes sin cambios.

/ Siguiente acción exacta: falta Hotmart (cobros + webhook que activa/desactiva suscripciones) y dominio propio (que también resolvería el sender de Resend) para cerrar la Sesión 6 — preguntar al usuario cómo seguir.
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
- Sesión 6, servicios reales — Supabase (login+datos reales) y Resend (correos) YA VERIFICADOS de punta a punta en producción. Hotmart: producto creado, 2 planes ($3.99/mes y $24.99/año), foto de producto puesta, webhook v2.0.0 registrado — **YA FUNCIONA end-to-end**: pruebas de Hotmart (Compra aprobada, Compra reembolsada, Chargeback) devuelven "200 - Procesado". Código de debug temporal ya retirado de `app/api/webhooks/hotmart/route.ts` (tsc+build verificados limpios).
- Causas reales encontradas y corregidas en el camino (dejar como referencia si se repite algo parecido): (1) las variables `HOTMART_HOTTOK` y `SUPABASE_SERVICE_ROLE_KEY` nunca se habían guardado de verdad en Vercel; (2) el botón "Redeploy" del toast de Vercel reconstruyó la rama `main` (vacía, sin Next.js) en vez de la rama de trabajo — hay que forzar el redeploy con un commit a la rama correcta; (3) la `SUPABASE_SERVICE_ROLE_KEY` se había copiado mal (arrastró un carácter de flecha "→" de la interfaz) causando `TypeError: Cannot convert argument to a ByteString` — se corrigió recopiando con el botón de copiar (ícono, no selección manual).
- El evento "Cancelación de Suscripción" da 400 en las pruebas de Hotmart porque ese payload de prueba no trae el correo del comprador — es esperado, no es un bug (una cancelación real si trae el correo funcionará).
- CTA del paywall YA conectado a Hotmart: `/login?plan=monthly|annual` guarda el plan elegido y, tras crear la cuenta (magic link), `app/auth/callback` redirige a `/pagar?plan=...` (`app/pagar/route.ts`), que manda a la URL real de pago de Hotmart (`lib/hotmart.ts` — `pay.hotmart.com/O107025990B?off=...`, una por plan). Hotmart ya configurado para devolver a la usuaria a `/app` tras una compra aprobada ("Opciones de Páginas de Agradecimiento" → "Página externa" → URL para Compras Aprobadas). El acceso a `/app` no depende del pago: la prueba de 3 días la otorga el trigger de Supabase al crear la cuenta (`proxy.ts` solo exige sesión iniciada); Hotmart cobra automáticamente al día 3 porque el plan tiene el trial nativo configurado (3 días de prueba) y ya captura la tarjeta en el checkout.
- Próximo paso pendiente: probar una compra real (o de prueba) de punta a punta con una cuenta nueva para confirmar que el regreso a `/app` funciona y que el webhook actualiza `suscripciones` con esa compra real (no solo con los envíos de prueba de Hotmart).
- **Dominio propio conectado**: `amorpropiosos.com` comprado en Namecheap, apuntado a Vercel (A record `216.198.79.1` + CNAME `www`), verificado y sirviendo la landing real. Se cambió la "Production Branch" del proyecto en Vercel de `main` (vacía/rota) a `claude/startup-prompt-projects-ctatsf` para que el dominio sirva la app de verdad — pendiente decidir en algún momento si se hace un merge formal a `main`. Resend también verificado con el dominio propio (DKIM/SPF/DMARC/MX en Namecheap, MX tuvo que configurarse en la sección "Mail Settings → Custom MX" de Namecheap, no en Host Records). **Sesión 6 prácticamente cerrada**: Site URL/Redirect URLs de Supabase ya apuntan a `amorpropiosos.com`, remitente de Resend ya es `hola@amorpropiosos.com` (dominio verificado), Hotmart ya redirige a `https://amorpropiosos.com/app` tras compra aprobada. Pendiente: decidir en algún momento si se hace merge formal de esta rama a `main` (por ahora `main` sigue vacía/rota y Production Branch del proyecto en Vercel se cambió a esta rama de trabajo como solución).

**Bugs reales encontrados y corregidos probando el flujo real de punta a punta** (usuaria hizo la prueba ella misma, no fue solo revisión de código):
1. El login con enlace mágico fallaba (`otp_expired`) cuando se abría el enlace en un navegador/dispositivo distinto al que pidió el acceso, o cuando el sitio se visitaba a veces por `amorpropiosos.com` y a veces por `www.amorpropiosos.com` (cookies de sesión no compartidas entre ambos). Corregido: `lib/supabase/client.ts`, `lib/supabase/server.ts` y `proxy.ts` ahora comparten la cookie con `cookieOptions: { domain: ".amorpropiosos.com" }` cuando el host es de ese dominio. Copy del login corregido (ya no dice "ábrelo desde tu celular", que era engañoso).
2. El checkout de Hotmart daba "Product unavailable" (error 005) porque el producto seguía en estado "Borrador" — Hotmart exige al menos 1 módulo de contenido publicado en su "Área de Miembros" antes de aprobar el producto para venta, aunque el contenido real viva fuera de Hotmart (nuestra app). Se creó un módulo "Bienvenida" con el link a `/app` y se envió el producto a aprobación (Hotmart tarda hasta 15 min en aprobar). **Pendiente confirmar que el checkout ya funciona una vez que Hotmart apruebe el producto.**

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
