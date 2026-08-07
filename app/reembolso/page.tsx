import { LegalPage } from "@/components/app/LegalPage";

export default function ReembolsoPage() {
  return (
    <LegalPage title="Política de Reembolsos" updated="julio de 2026">
      <p>
        Queremos que pruebes AmorPropio &amp; SOS sin riesgo. Así funciona
        nuestra garantía.
      </p>

      <h2>La Garantía de tu Primera Semana Distinta</h2>
      <p>
        Si dentro de los primeros 7 días desde tu compra sientes que la app
        no te está ayudando en nada, escríbenos a{" "}
        <a href="mailto:hola@amorpropiosos.com" className="underline">
          hola@amorpropiosos.com
        </a>{" "}
        y te devolvemos el 100% de tu pago. Sin preguntas, sin formularios
        largos: solo cuéntanos que quieres el reembolso.
      </p>

      <h2>Cómo se procesa</h2>
      <p>
        Todos los pagos de AmorPropio &amp; SOS se procesan a través de
        Hotmart, que gestiona el reembolso directamente a tu método de pago
        original. El tiempo en que el dinero aparece de vuelta depende de tu
        banco o tarjeta, normalmente entre 5 y 10 días hábiles.
      </p>

      <h2>Después de los 7 días</h2>
      <p>
        Pasado ese período puedes cancelar tu suscripción cuando quieras
        desde tu perfil, y seguirás teniendo acceso hasta el final del ciclo
        ya pagado — pero no aplica un reembolso del período en curso.
      </p>

      <h2>Cómo cancelar</h2>
      <p>
        Tu pago lo procesa Hotmart, así que la cancelación se hace ahí: en el
        correo de confirmación de tu compra vas a encontrar un enlace para
        gestionar o cancelar tu suscripción directamente. Si no lo encuentras
        o prefieres que lo hagamos por ti, escríbenos a{" "}
        <a href="mailto:hola@amorpropiosos.com" className="underline">
          hola@amorpropiosos.com
        </a>{" "}
        y la cancelamos nosotras.
      </p>
    </LegalPage>
  );
}
