import { LegalPage } from "@/components/app/LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage title="Aviso importante" updated="julio de 2026">
      <p>
        Antes de usar AmorPropio &amp; SOS, queremos que esto quede muy
        claro — es lo más importante que vas a leer de nosotras.
      </p>

      <h2>No somos un servicio médico</h2>
      <p>
        AmorPropio &amp; SOS es una app de bienestar emocional: afirmaciones,
        ejercicios de amor propio y una técnica de respiración guiada para
        momentos de ansiedad. No es terapia, no es un diagnóstico, y no
        reemplaza a un psicólogo, psiquiatra o cualquier profesional de la
        salud mental.
      </p>

      <h2>Si estás en una crisis grave</h2>
      <p>
        Si sientes que tu vida está en riesgo, si tienes pensamientos de
        hacerte daño, o si la crisis de pánico no cede, por favor contacta
        de inmediato a los servicios de emergencia de tu país o a una línea
        de atención en crisis. El botón SOS de esta app es un apoyo para
        calmarte en el momento, no un servicio de emergencia ni de
        atención profesional.
      </p>

      <h2>Sobre el contenido de la app</h2>
      <p>
        Las afirmaciones y ejercicios que recibes vienen de un banco de
        contenido curado por el equipo de AmorPropio &amp; SOS, no de un
        profesional tratando tu caso particular. Están pensados como
        acompañamiento general, no como consejo individualizado.
      </p>

      <h2>Tu diario es privado</h2>
      <p>
        Nadie del equipo lee tu diario salvo que tú nos lo compartas
        directamente para pedirnos ayuda con algo puntual.
      </p>
    </LegalPage>
  );
}
