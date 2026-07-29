# ESTADO — AmorPropio & SOS
Última actualización: 2026-07-28 | Sesión actual: 1 (Constitución del Producto — completa, arrancando validación técnica)

⏸️ CHECKPOINT — Última acción completada: Sesión 3 (landing) construida con las 10 secciones canónicas, tsc/build limpios, screenshot 375px tomado, subagente revisor-visual lanzado / Siguiente acción exacta: leer veredicto del revisor-visual, corregir lo que pida el gate (≥36/40 usabilidad, ≥16/20 craft, ≥16/20 copy), y recién entonces reportar la landing como lista al usuario.

## Qué es esta app (3 líneas máximo)
App web de bienestar emocional para mujeres hispanohablantes: botón SOS de auxilio inmediato en crisis de pánico + hábito diario de afirmaciones y ejercicios de amor propio. Modelo freemium por suscripción (Hotmart), pendiente de refinar en Sesión 1.

## Promesa central
"AmorPropio & SOS ayuda a mujeres hispanohablantes a calmar una crisis de pánico en segundos y construir su amor propio día a día, con un botón de auxilio inmediato y afirmaciones + ejercicios que sí se sienten personales — sin las frases vacías ni el precio en dólares de las apps de afuera."

## Reporte de validación (Sesión 1)
- Veredicto: Excelente oportunidad (85/100 en el informe del usuario, con datos de mercado ya investigados por él)
- Apps de referencia: I am - Daily Affirmations (~$400K USD/mes), Rootd (botón de pánico + CBT, ~$1M+ acumulado)
- Lo que los usuarios odian de la competencia (nuestra oportunidad): solo texto estático sin herramientas reales · sin español nativo · muy caras en USD · apps de pánico que no sirven fuera de la crisis
- Brecha LATAM confirmada: sí — sin competidor fuerte que combine SOS + amor propio diario en español
- Precio de referencia del mercado: $3.99-14.99 USD/mes (competencia) → app se posiciona en $3.99/mes o $24.99/año

## Formato del producto (decisión — Sesión 1)
- **App WEB** (no nativa de tiendas) — decidido con el usuario el 2026-07-28.
- Adaptaciones por ser web: "widgets nativos" → ícono en pantalla de inicio (PWA/atajo) + notificaciones push web; cobro por Hotmart (no Apple/Google, evita comisión de 15-30%).

## Dirección de Arte (Sesión 2 — NO cambiar sin justificación)
- FICHA-ARTE.md: existe y aprobada por el usuario — 2026-07-29
- ¿Hubo referencia visual del usuario?: NO — usuario pidió usar criterio propio ("atractivo, llamativo")
- Resumen: fondo #FBF3EC · acento #D9704F (2ª nota #B0473A) · Display "Zilla Slab" · Body "Plus Jakarta Sans" · radio 18px
- Personalidad: Cálido (dominante) · Sereno · Minimal — voz: mentor sereno con calidez
- Dirección: "Carta cálida" — combinación del usuario de Opción A (Abrazo diario: Headspace+Flo) + Opción C (Diario de mí: I am + editorial); Opción B (Refugio sereno: Calm+Rootd) descartada
- REGISTRO ANTI-REPETICIÓN (29/54): paleta terracota/coral cálida + par Zilla Slab/Plus Jakarta Sans VETADOS para el próximo proyecto del SO. No se usó dirección exacta del banco 54 (dispositivo propio derivado del mundo del sujeto)

## Avatar y venta (Sesión 1 — NO cambiar sin validar)
- FICHA-AVATAR.md: existe, creada 2026-07-28 con base en el informe de mercado del usuario (hace de Fuente 2) — pendiente de aprobación explícita del usuario
- Resumen: "Vale", 18-38 años, LATAM/España, diálogo interno "no soy suficiente" + miedo a crisis de pánico en soledad · dolor #1: "no soy suficiente" · deseo #1: "que algo me hable a mí, no frases genéricas" · consciencia nivel 3 · sofisticación etapa 3
- Landing: sigue la ESTRUCTURA CANÓNICA de 10 secciones del 19 — pendiente de construir (Sesión 3)

## Estrategia de monetización (Sesión 1 — NO cambiar sin validar)
- Modelo: **Modelo 2 — Onboarding + Paywall de prueba** (decidido con la matriz A-F de 02C-PRICING: nicho Bienestar → "primera sesión corta, tono suave/emocional, paywall tras mini-experiencia, trial + anual, rutina diaria")
- Variante: preview anónimo (sin cuenta) → paywall → login/auth al convertir — NO registro gratis previo (evita el bug de cuentas duplicadas de Hotmart)
- Justificación: apps de bienestar convierten hasta +234% con onboarding antes del paywall vs paywall sin onboarding (dato 02C); además calza con que el "aha" (primera afirmación personalizada) se vive gratis y sin fricción antes de pedir pago
- Excepción ética (decisión de producto, alineada a la regla "nunca"): el **botón SOS de auxilio en crisis queda SIEMPRE accesible sin pago** — un botón de auxilio en pánico no se paywallea. No compite con la retención de pago porque el driver de suscripción es el hábito diario (afirmaciones + diario + itinerarios), no el SOS.
- Trial: 3 días gratis del plan Premium tras el onboarding, luego $3.99 USD/mes o $24.99 USD/año (~$2.08/mes) — precios validados por el informe de mercado del usuario
- Plan Premium incluye: afirmaciones/itinerarios ilimitados por tema, diario privado, audios para dormir, ejercicios guiados de reencuadre

## Reglas "nunca" del producto (decidido — Sesión 1)
Nunca reemplaza ayuda profesional ni diagnostica · nunca comparte el diario privado de la usuaria · nunca presiona con culpa/miedo para retener o vender · nunca cobra nada oculto sin avisar antes.

## Secuencia maestra de construcción (NO saltar)
- Estado de la secuencia: Landing en construcción (Sesión 3) — resto pendiente
- Ruta aprobada: `/` → `/onboarding` → `/paywall` → `/login` → `/app`
- Landing: CONSTRUIDA (10 secciones canónicas de 19-PAGINA-DE-VENTAS.md), pendiente veredicto del revisor-visual antes de declararla verificada. Mecanismo bautizado: "el Ritual de 2 Minutos". CTA lleva a `/onboarding` (Modelo 2, preview anónimo — sin registro previo).
- `/onboarding` y `/login`: placeholders honestos (no 404) — se construyen de verdad en Sesión 4.
- Carrusel de la sección 5 (la app por dentro): PLACEHOLDERS rotulados (app aún no existe) — pendiente reemplazar por capturas reales cuando la app interna esté construida (Sesión 5).
- Páginas legales del footer: privacidad, términos, reembolso, disclaimer — CREADAS con contenido real (no relleno), basadas en 47-LEGAL-FISCAL-Y-PRIVACIDAD.md. Revisar con más detalle antes de vender de verdad (fiscal LATAM específico por país).
- Onboarding: pendiente (diseñado/construido/verificado)
- Paywall: pendiente
- Login/Auth: pendiente
- App interna: pendiente
- Servicios externos: pendiente

## Decisiones técnicas (NO re-discutir sin pedirlo el usuario)
- Framework: Next.js App Router (landing con SEO + páginas públicas + futuros API routes/webhooks de Hotmart) — decidido el 2026-07-28
- Stack: React + TypeScript + Tailwind v4 + shadcn/ui + Lucide + Supabase (auth/datos) + Vercel + Hotmart (venta) + Resend (emails)
- Auth: Supabase Auth con magic link (passwordless) como método principal + Google OAuth opcional — jerarquía de 26, apropiado por ser datos sensibles (diario personal) sin fricción de password
- Tipo de app (arquitectura, 04): tracking/hábitos/bienestar → requiere vista "Hoy" (acción inmediata) + vista de histórico/racha + ≥2 tipos de logro + celebración en hitos reales
- App interna (borrador de secciones, 3-5 máx): Hoy (afirmación + SOS) · Diario · Progreso/racha · Perfil
- Contenido de afirmaciones/ejercicios: MVP usa un BANCO CURADO de contenido (~200-500 piezas) escrito por tema/estado de ánimo con selección algorítmica personalizada — NO generación por LLM en tiempo real (más barato, sin costo de IA por uso, sin riesgo de que "invente" algo inapropiado en un tema sensible). V2 podría sumar personalización con IA real sobre este banco.
- Modelo de datos (borrador, se detalla en Sesión 6 con 25): profiles, entradas_diario (privadas, RLS por user_id), afirmaciones_banco (contenido, no sensible), user_progress (racha, RLS por user_id), suscripciones (estado Hotmart)

## Sesiones completadas ✅
(ninguna aún — Constitución del Producto completa dentro de la conversación inicial)

## Sesión en progreso 🔧
- Sesión 1 — Validación (ya aportada por el usuario), falta: FICHA-AVATAR.md formal, monetización en detalle (02C), arquitectura/modelo de datos (04/25), auth (26)

## Próximas sesiones 📋
- Sesión 1: cerrar avatar, monetización y arquitectura técnica
- Sesión 2: identidad visual (FICHA-ARTE.md, 3 opciones A/B/C)
- Sesión 3: página de ventas
- Sesión 4: onboarding, paywall, login
- Sesión 5: app interna
- Sesión 6: integraciones reales y seguridad
- Sesión 7: testing, pulido, rigor de entrega
- Sesión 8: adquisición, lanzamiento, backoffice

## Pendientes del usuario (acciones que el usuario debe hacer)
- [ ] Ninguna todavía — se avisará cuando lleguemos a cuentas de Hotmart/Supabase/Vercel/dominio

## Notas para la próxima sesión
- El usuario ya trajo un informe de validación muy completo (mercado, competencia, keywords, avatar, riesgos) — usar ese contenido como base directa de FICHA-AVATAR.md, no volver a investigar desde cero.
- Usuario no dio referencia visual: usar criterio propio derivando de líderes del nicho (I am, Rootd), evitando el look genérico oscuro+neón.
