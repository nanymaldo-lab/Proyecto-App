import { LegalPage } from "@/components/app/LegalPage";

export default function TerminosPage() {
  return (
    <LegalPage title="Términos y Condiciones" updated="julio de 2026">
      <p>
        Al usar AmorPropio &amp; SOS aceptas estos términos. Los escribimos
        en lenguaje simple porque preferimos que los entiendas de verdad.
      </p>

      <h2>Qué es AmorPropio & SOS</h2>
      <p>
        Es una app de bienestar emocional: afirmaciones diarias
        personalizadas, ejercicios de amor propio, un diario privado y un
        botón de auxilio (SOS) con respiración guiada para momentos de
        ansiedad o pánico.
      </p>

      <h2>Lo que la app NO es</h2>
      <p>
        AmorPropio &amp; SOS no es un servicio médico, psicológico ni
        psiquiátrico, y no reemplaza el tratamiento de un profesional de la
        salud mental. Si estás pasando por una crisis grave o tienes
        pensamientos de hacerte daño, busca ayuda profesional o acude a una
        línea de emergencia de tu país de inmediato.
      </p>

      <h2>Tu cuenta</h2>
      <ul>
        <li>Debes tener al menos 18 años para crear una cuenta.</li>
        <li>Eres responsable de mantener tu acceso seguro.</li>
        <li>
          Puedes cerrar sesión cuando quieras desde tu perfil, o pedirnos que
          eliminemos tu cuenta por completo escribiéndonos a{" "}
          <a href="mailto:hola@amorpropiosos.com" className="underline">
            hola@amorpropiosos.com
          </a>
          .
        </li>
      </ul>

      <h2>Suscripción y pagos</h2>
      <p>
        La suscripción se cobra a través de Hotmart, mensual o anual según
        el plan que elijas. Puedes cancelarla cuando quieras (desde el enlace
        de gestión que Hotmart te manda al comprar, o escribiéndonos) y
        seguirás teniendo acceso hasta el final del período ya pagado. Ver
        nuestra{" "}
        <a href="/reembolso" className="underline">
          Política de Reembolsos
        </a>
        .
      </p>

      <h2>Uso aceptable</h2>
      <p>
        Tu diario es tuyo y privado. No está permitido usar la app para
        acosar, dañar o suplantar a otras personas, ni intentar acceder a
        cuentas o datos que no son tuyos.
      </p>

      <h2>Límite de responsabilidad</h2>
      <p>
        AmorPropio &amp; SOS ofrece contenido de bienestar general, no
        diagnósticos ni tratamiento individualizado. No nos hacemos
        responsables por decisiones tomadas exclusivamente en base al
        contenido de la app sin acompañamiento profesional cuando la
        situación lo requiere.
      </p>

      <h2>Cambios a estos términos</h2>
      <p>
        Si actualizamos estos términos de forma importante, te avisaremos
        por email antes de que entren en vigencia.
      </p>

      <h2>Contacto</h2>
      <p>
        Cualquier duda, escríbenos a{" "}
        <a href="mailto:hola@amorpropiosos.com" className="underline">
          hola@amorpropiosos.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
