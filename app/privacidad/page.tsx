import { LegalPage } from "@/components/app/LegalPage";

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de Privacidad" updated="julio de 2026">
      <p>
        En AmorPropio &amp; SOS nos tomamos en serio tu privacidad, sobre
        todo porque parte de lo que compartes con nosotras es tu diario
        personal. Esta política explica qué datos guardamos, para qué los
        usamos y qué derechos tienes sobre ellos.
      </p>

      <h2>Qué datos recopilamos</h2>
      <ul>
        <li>Tu email, para crear tu cuenta y avisarte cambios importantes.</li>
        <li>
          Las entradas de tu diario y tus check-ins de ánimo, para
          mostrártelos a ti y a nadie más.
        </li>
        <li>Tu racha y tu progreso dentro de la app.</li>
        <li>
          Datos técnicos básicos (dispositivo, país aproximado) para que la
          app funcione bien y para medir qué partes usas más.
        </li>
      </ul>

      <h2>Qué NO hacemos con tus datos</h2>
      <ul>
        <li>No vendemos tu información a nadie.</li>
        <li>
          No compartimos el contenido de tu diario con terceros, ni lo
          usamos para entrenar modelos de IA.
        </li>
        <li>No mostramos tus datos a otras usuarias.</li>
      </ul>

      <h2>Dónde se guardan tus datos</h2>
      <p>
        Tus datos viven en Supabase, con reglas de acceso que hacen que solo
        tú (con tu sesión iniciada) puedas leer tu propia información.
        Ninguna otra persona usuaria puede acceder a tu diario ni a tu
        progreso.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes pedirnos en cualquier momento una copia de tus datos o que
        los eliminemos por completo, escribiendo a{" "}
        <a href="mailto:hola@amorpropiosos.app" className="underline">
          hola@amorpropiosos.app
        </a>
        . Respondemos en un plazo máximo de 10 días hábiles.
      </p>

      <h2>Pagos</h2>
      <p>
        El cobro de tu suscripción lo procesa Hotmart. Nosotras no vemos ni
        almacenamos los datos de tu tarjeta.
      </p>
    </LegalPage>
  );
}
