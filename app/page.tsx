import Link from "next/link";
import {
  Brain,
  MessageSquareOff,
  Siren,
  RotateCcw,
  Sparkles,
  LifeBuoy,
  Heart,
  ShieldCheck,
  BookHeart,
  Moon,
} from "lucide-react";
import { IconChip } from "@/components/app/IconChip";
import { Check } from "@/components/app/Check";
import { Reveal, RevealStagger, RevealItem } from "@/components/app/Reveal";
import { AccordionItem } from "@/components/app/Accordion";
import { AnimatedNumber } from "@/components/app/AnimatedNumber";
import { RachaDots } from "@/components/app/RachaDots";
import { CTALink } from "@/components/app/CTALink";

const CTA_LABEL = "Quiero mi ritual gratis";
const CTA_HREF = "/onboarding";

export default function Home() {
  return (
    <>
      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-40 border-b border-border-default/70 bg-surface-base/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-txt-inverse">
              <Heart className="h-4 w-4" fill="currentColor" strokeWidth={0} />
            </span>
            <span className="font-display text-lg font-semibold text-txt-primary">
              AmorPropio &amp; SOS
            </span>
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-txt-secondary hover:text-txt-primary"
          >
            Entrar
          </Link>
        </div>
      </header>

      <main className="flex-1 pb-24 md:pb-0">
        {/* ============ 1. HERO ============ */}
        <section className="mx-auto max-w-5xl px-4 pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-txt-secondary">
                Para mujeres que se exigen demasiado
              </p>
              <h1 className="text-balance font-display text-3xl font-semibold leading-tight text-txt-primary md:text-4xl">
                Tu ritual de amor propio en 2 minutos
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-txt-secondary md:text-lg">
                Un botón SOS te calma al instante si el pánico llega. Sin
                frases sueltas: un ritual diario hecho para ti.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTALink
                  href={CTA_HREF}
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-primary px-7 text-base font-semibold text-txt-inverse shadow-md transition hover:bg-brand-primary-hover active:scale-[0.98]"
                >
                  {CTA_LABEL}
                </CTALink>
              </div>
              <p className="mt-4 text-sm text-txt-tertiary">
                Sin tarjeta para tu primera afirmación · El botón SOS es
                gratis siempre
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-border-default bg-surface-primary p-5 shadow-lg">
                <span className="absolute right-4 top-4 rounded-full bg-surface-tertiary px-2 py-0.5 text-xs font-medium text-txt-secondary">
                  Vista previa
                </span>
                <p className="pr-24 text-xs font-semibold uppercase tracking-wide text-txt-secondary">
                  Tu afirmación de hoy
                </p>
                <p
                  aria-hidden
                  className="mt-2 font-display text-4xl leading-none text-brand-secondary"
                >
                  &ldquo;
                </p>
                <p className="-mt-3 font-display text-xl font-semibold leading-snug text-txt-primary">
                  No soy el desastre que mi cabeza dice que soy.
                </p>
                <div className="mt-5 flex items-center gap-2 rounded-xl bg-brand-primary px-4 py-3 text-sm font-semibold text-txt-inverse">
                  <LifeBuoy className="h-4 w-4 shrink-0" />
                  SOS · Estoy en crisis, ayúdame ahora
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ 2. PROBLEMA ============ */}
        <section className="border-t border-border-default/60 bg-surface-secondary/60 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-balance text-center font-display text-xl font-semibold text-txt-primary md:text-2xl">
                ¿Te suena alguna de estas?
              </h2>
            </Reveal>
            <RevealStagger className="mt-10 space-y-4">
              {[
                {
                  icon: Brain,
                  text: "¿Te descubres pensando “no soy suficiente” más seguido de lo que admites en voz alta?",
                },
                {
                  icon: MessageSquareOff,
                  text: "¿Todo lo que probaste para esto era solo frases sueltas que no cambiaban nada de verdad?",
                },
                {
                  icon: Siren,
                  text: "¿Te da miedo que te agarre una crisis de pánico y no saber qué hacer, estando sola?",
                },
                {
                  icon: RotateCcw,
                  text: "¿Empezaste apps de afirmaciones o meditación… y las dejaste antes de la semana 2?",
                },
              ].map((item, i) => (
                <RevealItem key={i}>
                  <div className="flex items-start gap-4 rounded-xl border border-border-default bg-surface-primary p-4 shadow-sm">
                    <IconChip icon={item.icon} />
                    <p className="pt-2 text-base leading-relaxed text-txt-primary">
                      {item.text}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* ============ 3. AGITACIÓN ============ */}
        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <div className="rounded-xl border border-border-default bg-surface-primary p-6 text-center shadow-sm md:p-8">
                <p aria-hidden className="-mb-3 font-display text-3xl leading-none text-brand-secondary">
                  &ldquo;
                </p>
                <h2 className="text-balance font-display text-xl font-semibold text-txt-primary md:text-2xl">
                  Nada de esto se arregla solo
                </h2>
                <p className="mt-5 text-base leading-relaxed text-txt-secondary md:text-lg">
                  Cada día que sigues sin un ritual real, ese diálogo negativo
                  se afianza un poco más — y la próxima crisis te va a
                  encontrar exactamente igual de desprevenida que la última.
                  En un año, ese patrón no se rompe solo: se vuelve más
                  difícil de cambiar.
                </p>
                <p className="mt-4 text-base leading-relaxed text-txt-secondary md:text-lg">
                  Las apps de afirmaciones que ya probaste fallan por lo
                  mismo: mandan una notificación y ya. Ninguna te da algo que
                  hacer cuando de verdad lo necesitas.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ 4. SOLUCIÓN ============ */}
        <section className="border-t border-border-default/60 bg-surface-secondary/60 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-center text-sm font-semibold uppercase tracking-wide text-txt-secondary">
                El mecanismo
              </p>
              <h2 className="mt-2 text-balance text-center font-display text-2xl font-semibold text-txt-primary md:text-3xl">
                No te falta fuerza de voluntad — te falta el Ritual de 2
                Minutos
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-txt-secondary">
                No es que no lo intentes. Es que nunca tuviste algo hecho
                para tu día real, solo frases sueltas. El Ritual de 2
                Minutos te acompaña todos los días — y en el momento exacto
                de una crisis, también.
              </p>
            </Reveal>

            <RevealStagger className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  n: "1",
                  icon: Heart,
                  title: "Nos contás cómo te sentís hoy",
                  text: "Un check-in de 10 segundos, nada de formularios largos.",
                },
                {
                  n: "2",
                  icon: Sparkles,
                  title: "Tu afirmación + ejercicio de 2 min",
                  text: "Pensada para tu día, con un ejercicio real de reencuadre.",
                },
                {
                  n: "3",
                  icon: LifeBuoy,
                  title: "Si hay pánico, un toque y listo",
                  text: "El mismo botón te lleva directo a tu respiración guiada.",
                },
              ].map((step) => (
                <RevealItem key={step.n}>
                  <div className="h-full rounded-xl border border-border-default bg-surface-primary p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <IconChip icon={step.icon} />
                      <span className="font-display text-2xl font-semibold text-brand-primary">
                        {step.n}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-txt-primary">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-txt-secondary">
                      {step.text}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* ============ 5. LA APP POR DENTRO ============ */}
        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-balance text-center font-display text-xl font-semibold text-txt-primary md:text-2xl">
                Así se siente por dentro
              </h2>
            </Reveal>
            <RevealStagger className="mt-10 grid gap-5 sm:grid-cols-3">
              <RevealItem>
                <div className="h-full rounded-xl border border-border-default bg-surface-primary p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-txt-secondary">
                    Tu Hoy
                  </p>
                  <p className="mt-2 font-display text-base font-semibold leading-snug text-txt-primary">
                    &ldquo;Hoy elijo hablarme con calma.&rdquo;
                  </p>
                  <p className="mt-4 text-xs font-medium text-txt-secondary">
                    3 días de racha esta semana
                  </p>
                  <div className="mt-1.5">
                    <RachaDots filled={3} total={7} />
                  </div>
                </div>
              </RevealItem>
              <RevealItem>
                <div className="flex h-full flex-col items-center justify-center rounded-xl border border-border-default bg-surface-primary p-5 text-center shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-txt-secondary">
                    Tu SOS
                  </p>
                  <div className="mt-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-primary">
                    <LifeBuoy className="h-6 w-6 text-brand-primary" />
                  </div>
                  <p className="mt-3 text-sm text-txt-secondary">
                    Respira conmigo. No eres tu peor momento.
                  </p>
                </div>
              </RevealItem>
              <RevealItem>
                <div className="h-full rounded-xl border border-border-default bg-surface-primary p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-txt-secondary">
                    Tu diario
                  </p>
                  <div
                    className="mt-2 rounded-md bg-surface-tertiary p-3"
                    style={{
                      backgroundImage:
                        "radial-gradient(color-mix(in oklab, var(--text-primary) 7%, transparent) 1px, transparent 1px)",
                      backgroundSize: "14px 14px",
                    }}
                  >
                    <p className="text-sm leading-relaxed text-txt-secondary">
                      &ldquo;Hoy me costó empezar el día, pero respiré antes
                      de reaccionar…&rdquo;
                    </p>
                  </div>
                  <span className="mt-3 inline-block -rotate-2 rounded-sm bg-brand-primary px-2 py-1 text-xs font-semibold text-txt-inverse">
                    + nueva entrada
                  </span>
                </div>
              </RevealItem>
            </RevealStagger>
            <p className="mt-6 text-center text-xs text-txt-tertiary">
              Así se ve tu ritual todos los días — capturas reales de la app
              muy pronto.
            </p>
            <div className="mt-8 flex justify-center">
              <CTALink
                href={CTA_HREF}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-primary px-7 text-base font-semibold text-txt-inverse shadow-md transition hover:bg-brand-primary-hover active:scale-[0.98]"
              >
                {CTA_LABEL}
              </CTALink>
            </div>

            <div
              className="mx-auto mt-14 max-w-lg rounded-xl border border-border-default bg-surface-tertiary p-5"
              style={{
                backgroundImage:
                  "radial-gradient(color-mix(in oklab, var(--text-primary) 6%, transparent) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-txt-tertiary">
                Por qué es distinto
              </p>
              <p className="mt-3 text-sm leading-relaxed text-txt-secondary">
                La queja más común sobre las apps de afirmaciones es siempre
                la misma: mandan una notificación y ya, sin nada real que
                hacer cuando de verdad te sientes mal. Por eso cada
                afirmación de AmorPropio &amp; SOS viene con un ejercicio
                real de 2 minutos, y un botón que hace algo cuando el pánico
                llega — no solo una frase en la pantalla.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 6. OFERTA ============ */}
        <section
          id="precios"
          className="border-t border-border-default/60 bg-surface-secondary/60 px-4 py-16 md:py-20"
        >
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-balance text-center font-display text-2xl font-semibold text-txt-primary md:text-3xl">
                Todo lo que incluye tu Ritual Premium
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-8 space-y-3 rounded-xl border border-border-default bg-surface-primary p-6 shadow-sm">
                {[
                  "Afirmaciones y ejercicios ilimitados por tema, todo el año",
                  "Diario privado ilimitado con seguimiento de tu progreso",
                  "Audios para dormir y calmarte antes de una crisis",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check />
                    <span className="text-sm text-txt-primary">{text}</span>
                  </div>
                ))}
                <p className="rounded-xl bg-brand-primary px-4 py-3 text-center text-sm font-medium text-txt-inverse">
                  El botón SOS es gratis siempre, tengas o no Premium — eso
                  nunca te lo vamos a cobrar.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { icon: ShieldCheck, text: "Precio siempre visible antes de pagar" },
                  { icon: Heart, text: "Cero cargos escondidos, nunca" },
                  { icon: LifeBuoy, text: "Cancelas cuando quieras, sin llamadas" },
                ].map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-xl border border-border-default bg-surface-primary px-3 py-2.5"
                  >
                    <t.icon className="h-4 w-4 shrink-0 text-brand-primary" />
                    <span className="flex-1 text-xs font-medium text-txt-secondary">
                      {t.text}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <RevealStagger className="mt-6 grid gap-4 sm:grid-cols-2">
              <RevealItem>
                <div className="relative h-full rounded-xl border-2 border-brand-primary bg-surface-primary p-6 shadow-md">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-txt-inverse">
                    Recomendado · 3 días gratis
                  </span>
                  <p className="mt-2 text-sm font-medium text-txt-secondary">
                    Plan anual
                  </p>
                  <p className="mt-1 font-display text-3xl font-semibold text-txt-primary">
                    <AnimatedNumber value={2.08} prefix="$" decimals={2} />
                    <span className="text-lg text-txt-tertiary">/mes</span>
                  </p>
                  <p className="mt-1 text-xs text-txt-tertiary">
                    Se cobra $24.99/año · 2 meses gratis vs. el mensual
                  </p>
                  <CTALink
                    href={`${CTA_HREF}?plan=annual`}
                    className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-lg bg-brand-primary text-base font-semibold text-txt-inverse transition hover:bg-brand-primary-hover active:scale-[0.98]"
                  >
                    {CTA_LABEL}
                  </CTALink>
                </div>
              </RevealItem>
              <RevealItem>
                <div className="h-full rounded-xl border border-border-default bg-surface-primary p-6">
                  <p className="text-sm font-medium text-txt-secondary">
                    Plan mensual
                  </p>
                  <p className="mt-1 font-display text-3xl font-semibold text-txt-primary">
                    <AnimatedNumber value={3.99} prefix="$" decimals={2} />
                    <span className="text-lg text-txt-tertiary">/mes</span>
                  </p>
                  <p className="mt-1 text-xs text-txt-tertiary">
                    3 días gratis, luego $3.99/mes
                  </p>
                  <CTALink
                    href={`${CTA_HREF}?plan=monthly`}
                    className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-lg border border-border-strong text-base font-semibold text-txt-primary transition hover:bg-surface-secondary active:scale-[0.98]"
                  >
                    {CTA_LABEL}
                  </CTALink>
                </div>
              </RevealItem>
            </RevealStagger>
          </div>
        </section>

        {/* ============ 7. GARANTÍA ============ */}
        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Reveal>
              <IconChip icon={ShieldCheck} />
              <p aria-hidden className="-mb-3 font-display text-3xl leading-none text-brand-secondary">
                &ldquo;
              </p>
              <h2 className="mt-4 text-balance font-display text-xl font-semibold text-txt-primary md:text-2xl">
                La Garantía de tu Primera Semana Distinta
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-txt-secondary">
                Si en tus primeros 7 días sientes que nada cambió en cómo te
                hablas a ti misma, escríbenos y te devolvemos todo. Un
                correo, sin preguntas, sin formularios. Es la garantía de 7
                días de Hotmart — la misma plataforma que procesa tu pago.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ 8. FAQ ============ */}
        <section className="border-t border-border-default/60 bg-surface-secondary/60 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <h2 className="text-balance text-center font-display text-xl font-semibold text-txt-primary md:text-2xl">
                Preguntas frecuentes
              </h2>
            </Reveal>
            <RevealStagger className="mt-8 space-y-3">
              {[
                {
                  q: "¿Necesito mucho tiempo para esto?",
                  a: "No. El ritual diario toma 2-3 minutos, y el SOS actúa en segundos cuando lo necesitas.",
                },
                {
                  q: "Ya probé apps de afirmaciones y las abandoné, ¿por qué esta sería distinta?",
                  a: "Las abandonaste porque solo mandaban frases sueltas. Esta te da un ejercicio real de 2 minutos con cada afirmación, y un botón para el momento en que de verdad lo necesitas.",
                },
                {
                  q: "¿Esto reemplaza terapia?",
                  a: "No. Es un acompañamiento diario de bienestar, no tratamiento clínico. Si vives una crisis de salud mental severa, contactar a un profesional o a una línea de emergencia sigue siendo lo primero.",
                },
                {
                  q: "¿Es cara? ¿Y si no la uso lo suficiente?",
                  a: "Cuesta menos que un café al mes. Tienes 3 días gratis para probarla, y la Garantía de tu Primera Semana Distinta si no sientes ningún cambio.",
                },
                {
                  q: "¿Me van a cobrar algo escondido?",
                  a: "No. El precio y lo que incluye están siempre visibles antes de pedirte la tarjeta. Cero cargos ocultos.",
                },
              ].map((item, i) => (
                <RevealItem key={i}>
                  <AccordionItem question={item.q} answer={item.a} />
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* ============ 9. CTA FINAL EMOCIONAL ============ */}
        <section className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-xl text-center">
            <Reveal>
              <BookHeart className="mx-auto h-8 w-8 text-brand-primary" />
              <h2 className="mt-4 text-balance font-display text-2xl font-semibold text-txt-primary md:text-3xl">
                Imagina abrir el día hablándote como mereces
              </h2>
              <p className="mt-4 text-base leading-relaxed text-txt-secondary">
                Sin ese peso del diálogo negativo, y con la tranquilidad de
                saber que si el pánico llega, no vas a estar perdida. Esa es
                la persona que se cuida y se habla bonito — y puede
                empezar hoy, en 2 minutos.
              </p>
              <CTALink
                href={CTA_HREF}
                className="mt-7 inline-flex h-12 items-center justify-center rounded-lg bg-brand-primary px-8 text-base font-semibold text-txt-inverse shadow-md transition hover:bg-brand-primary-hover active:scale-[0.98]"
              >
                {CTA_LABEL}
              </CTALink>
              <p className="mx-auto mt-8 max-w-md text-left text-xs leading-relaxed text-txt-tertiary">
                <strong className="text-txt-secondary">PD:</strong>{" "}
                AmorPropio &amp; SOS te da tu Ritual de 2 Minutos cada día —
                afirmación personalizada, ejercicio real y diario privado —
                más un botón SOS que siempre es gratis. Hoy entras con 3
                días de prueba, $2.08/mes en el plan anual, y la Garantía de
                tu Primera Semana Distinta.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ============ 10. FOOTER LEGAL ============ */}
      <footer className="border-t border-border-default/60 bg-surface-secondary/60 px-4 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-primary text-txt-inverse">
              <Heart className="h-3 w-3" fill="currentColor" strokeWidth={0} />
            </span>
            <span className="font-display text-sm font-semibold text-txt-primary">
              AmorPropio &amp; SOS
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-txt-secondary">
            <Link href="/privacidad" className="hover:text-txt-primary">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-txt-primary">
              Términos
            </Link>
            <Link href="/reembolso" className="hover:text-txt-primary">
              Reembolsos
            </Link>
            <Link href="/disclaimer" className="hover:text-txt-primary">
              Aviso importante
            </Link>
            <a href="mailto:hola@amorpropiosos.app" className="hover:text-txt-primary">
              hola@amorpropiosos.app
            </a>
          </nav>
          <p className="flex items-center gap-1.5 text-xs text-txt-tertiary">
            <Moon className="h-3.5 w-3.5" />
            AmorPropio &amp; SOS no reemplaza tratamiento psicológico o
            psiquiátrico profesional.
          </p>
          <p className="text-xs text-txt-tertiary">
            © {new Date().getFullYear()} AmorPropio &amp; SOS. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>

      {/* ============ CTA STICKY MOBILE ============ */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border-default bg-surface-primary/95 p-3 backdrop-blur md:hidden">
        <CTALink
          href={CTA_HREF}
          className="flex h-12 w-full items-center justify-center rounded-lg bg-brand-primary text-base font-semibold text-txt-inverse shadow-md active:scale-[0.98]"
        >
          {CTA_LABEL}
        </CTALink>
      </div>
    </>
  );
}
