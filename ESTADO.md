# ESTADO — AmorPropio & SOS
Última actualización: 2026-07-28 | Sesión actual: 1 (Constitución del Producto — completa, arrancando validación técnica)

⏸️ CHECKPOINT — Última acción completada: Constitución del Producto cerrada (nombre, promesa, MVP, regla "nunca", formato web) / Siguiente acción exacta: presentar Plan Maestro (B5) y esperar OK del usuario para arrancar Sesión 1 completa (avatar + monetización + arquitectura).

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

## Dirección de Arte (Sesión 2 — pendiente)
- FICHA-ARTE.md: NO existe aún
- ¿Hubo referencia visual del usuario?: NO — usuario pidió usar criterio propio ("atractivo, llamativo")
- Camino a seguir: REFERENCIA-INVESTIGACIÓN — derivar de líderes del nicho (I am, Rootd) + PASO 0 de 16-DIRECCION-DE-ARTE (tabla de líderes, fusión, NO clon del look oscuro+neón genérico)

## Avatar y venta (Sesión 1 — pendiente FICHA-AVATAR.md formal)
- FICHA-AVATAR.md: NO existe aún (crear con datos ya recolectados en el informe del usuario)
- Resumen: mujer 18-38 años, LATAM/España, autocrítica y baja autoestima + picos esporádicos de pánico · dolor #1: diálogo interno negativo diario · deseo #1: mensajes que reprogramen su mente + botón SOS de auxilio inmediato
- Landing: sigue la ESTRUCTURA CANÓNICA de 10 secciones del 19 — pendiente de construir (Sesión 3)

## Estrategia de monetización (Sesión 1 — pendiente de definir en detalle con 02C)
- Modelo preliminar: Freemium con suscripción — a confirmar Hard paywall vs Onboarding-first en Sesión 1 con la matriz A-F
- Pricing de referencia: $3.99 USD/mes o $24.99 USD/año (validado por el propio informe del usuario)
- Plan gratuito (preliminar): botón SOS + 3 afirmaciones/día · Plan premium: itinerarios ilimitados, diario, audios, ejercicios guiados

## Reglas "nunca" del producto (decidido — Sesión 1)
Nunca reemplaza ayuda profesional ni diagnostica · nunca comparte el diario privado de la usuaria · nunca presiona con culpa/miedo para retener o vender · nunca cobra nada oculto sin avisar antes.

## Secuencia maestra de construcción (NO saltar)
- Estado de la secuencia: aún no iniciada — Plan Maestro presentado, pendiente OK del usuario
- Ruta aprobada: `/` → `/onboarding` → `/paywall` → `/login` → `/app`

## Decisiones técnicas (NO re-discutir sin pedirlo el usuario)
- Framework: Next.js App Router (landing con SEO + páginas públicas + futuros API routes/webhooks de Hotmart) — decidido el 2026-07-28
- Stack: React + TypeScript + Tailwind v4 + shadcn/ui + Lucide + Supabase (auth/datos) + Vercel + Hotmart (venta) + Resend (emails)

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
