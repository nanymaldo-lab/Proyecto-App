# FICHA DE DIRECCIÓN DE ARTE — AmorPropio & SOS

## Referencia del usuario (CONTRATO — ver 16, protocolo obligatorio)
- ¿Hay imagen(es) de referencia del usuario?: NO — usuario pidió usar criterio propio ("atractivo, llamativo")
- Extracción: N/A — no aplica sin referencia
- Prohibiciones anti-IA que la referencia LEVANTA: ninguna (no hubo referencia; capa anti-IA sigue vigente completa)

## Identidad derivada (FUSIÓN de líderes — 16 PASO 0.2bis — + banco del 54 para el dispositivo)
- TABLA DE LÍDERES:
  - Headspace → calidez ilustrada, tipografía redondeada, color pleno con coraje (no regado)
  - Flo → gradientes cálidos de 2 tonos en la card héroe, feminidad sin ser infantil
  - I am - Daily Affirmations → la frase ES el contenido; tipografía protagonista a tamaño titular
  - Calm / Rootd → considerados pero DESCARTADOS en la elección final (dirección "Refugio sereno" no elegida)
- Combinación tipográfica usada: Zilla Slab (display, slab serif editorial) + Plus Jakarta Sans (body, cálida legible) — confirmada contra líderes: SÍ (I am usa sans bold protagonista; Zilla Slab aporta el carácter "carta escrita" sin caer en Inter/Roboto)
- Arquetipo: Cuidador (protector, suave, cálido-confiable) · Mundo del sujeto (0.45): carta/diario a una misma → comilla editorial como firma; post-it/nota pegada al espejo → chip rotado -2°; abrazo/manta → radios generosos y paleta cálida; corazón que se calma → corazones como unidad de racha (no números fríos)
- Dirección del banco 54 usada para el DISPOSITIVO OWNABLE: ninguna dirección completa del banco calzaba (todas o muy frías/técnicas o muy oscuras para este mundo del sujeto) — dispositivo propio derivado del mundo del sujeto: comilla editorial grande + post-it rotado

## Personalidad compilada (11 — COMPILADOR DE PERSONALIDAD)
- 3 adjetivos de personalidad: Cálido (dominante), Sereno, Minimal
- Compilación: spring bounce 0.15 / stiffness ~240 · duración base 320ms · exclamaciones: máx 0/pantalla
  → celebración N1: check suave con el nombre de la usuaria · N2: banner cálido sin confetti · N3: luz suave alrededor del hito (nunca confetti) · radio tendencial: 18px · color emocional: acento terracota cálido + neutros con temperatura, cero confetti
  → arquetipo de voz: mentor sereno (con calidez, nunca frío ni clínico)

## Brand kit final (los valores que viven en globals.css/@theme)
- Fondo: #FBF3EC · Superficie: #FFFBF6 · Hundido (texturas/journal): #F3E4D6 · Texto 1º/2º: #2E2420 / #6B5D4F
- Acento: #A85434 terracota-coral (SOLO en: CTA primario, botón SOS, dato de racha) — corregido desde #D9704F el 2026-07-29 por falla de contraste AA (~3.13:1 con texto blanco en botones); el nuevo valor cumple ≥4.5:1 · 2ª nota: #B0473A ink-rojo (razón funcional: distinguir el detalle editorial/firma —comilla, tag de tema— del CTA de acción, sin salir de la familia cálida)
- Semánticos: éxito #7FA98A (salvia calmo) · error #C24C42 · aviso #D9A441
- Display: Zilla Slab (pesos 500/600/700) · Body: Plus Jakarta Sans (pesos 400/500/600/700) · Escala: display 26-32px / title 18-20px / body 15-16px / label 12-13px
- Radio: 18px tendencial (cards 18-20px, botones 14-16px, chips 8px) · Profundidad: sombras suaves 3 niveles (base/elevado con `0 2px 8px rgba(120,80,40,.06)`/hundido con textura de puntos sutil) · Espaciado base: escala 4·8·12·16·24·32·48·64
- Dispositivo ownable: comilla editorial grande como firma de la afirmación del día + chip "post-it" rotado -2° en el diario (receta propia, derivada del mundo del sujeto — ver arriba)
- Motion signature: ease-out 300ms cálido · stagger 60-80ms · firma: la card/frase del día entra con fade + translateY(10px); cada corazón de racha hace un pop de 150ms al completarse el día

## Trazabilidad y vetos
- Protocolo A/B/C: opción elegida = COMBINACIÓN de A ("Abrazo diario") + C ("Diario de mí") → "Opción D — Carta cálida", confirmada por el usuario el 2026-07-29 · descartadas: B "Refugio sereno" (oscuro, círculo de respiración protagonista — no se usó) · página comparativa: `direcciones-abc.html` (raíz del proyecto, NO se sube al repo — está en .gitignore) · screenshots verificados: comparativa A/B/C y A/B/C/D con fuentes cargadas correctamente clase por clase
- Paleta derivada de: fusión de líderes (16 PASO 0.2bis) — Headspace + Flo + I am — con acento perturbado hacia terracota (no el coral genérico de Flo, ni el naranja puro de Headspace)
- Registro anti-repetición: paleta terracota/coral cálida + par Zilla Slab/Plus Jakarta Sans quedan VETADOS para el próximo proyecto de este SO
- Modo (claro/oscuro) DERIVADO por: arquetipo Cuidador + mundo del sujeto (carta, abrazo, calidez) — claro cálido, NO asumido oscuro (diferenciador real: la mayoría de apps de bienestar/pánico van a oscuro por reflejo)

## Idioma UI: Español (LATAM, cálido, cercano — de tú) · Fecha de cierre de la ficha: 2026-07-29 · Aprobada por el usuario: SÍ
