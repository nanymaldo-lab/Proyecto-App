export type Foco = "dialogo" | "panico" | "abandono" | "otra";

export type Afirmacion = {
  id: string;
  foco: Foco;
  texto: string;
  ejercicio: string;
};

export const BANCO_AFIRMACIONES: Afirmacion[] = [
  // dialogo — voz interna dura
  { id: "d1", foco: "dialogo", texto: "Hoy me hablo como le hablaría a alguien que amo.", ejercicio: "Escribe una frase que te dijiste hoy con dureza. Reescríbela como se la dirías a tu mejor amiga." },
  { id: "d2", foco: "dialogo", texto: "No soy mis peores pensamientos sobre mí misma.", ejercicio: "Nombra 1 cosa que hiciste bien hoy, por pequeña que sea." },
  { id: "d3", foco: "dialogo", texto: "Puedo equivocarme y seguir mereciendo respeto propio.", ejercicio: "Recuerda un error reciente. Di en voz alta: 'me equivoqué, no soy un error'." },
  { id: "d4", foco: "dialogo", texto: "Mi valor no depende de ser perfecta hoy.", ejercicio: "Haz una lista de 3 cosas que te gustan de ti que no tienen que ver con logros." },
  { id: "d5", foco: "dialogo", texto: "Puedo notar la voz crítica sin obedecerla.", ejercicio: "Cuando aparezca la voz dura, ponle un nombre. Dile: 'te escucho, pero hoy no decides tú'." },
  { id: "d6", foco: "dialogo", texto: "Merezco la misma paciencia que le doy a los demás.", ejercicio: "Piensa en alguien a quien tratas con paciencia. Trátate así 10 minutos hoy." },
  { id: "d7", foco: "dialogo", texto: "Ser dura conmigo no me hizo más fuerte, solo más cansada.", ejercicio: "Anota una exigencia que te pones y pregúntate: ¿se la pediría a alguien que quiero?" },
  { id: "d8", foco: "dialogo", texto: "Puedo estar orgullosa de intentarlo, no solo de lograrlo.", ejercicio: "Nombra algo que intentaste esta semana, sin importar el resultado." },

  // panico — miedo a crisis / ansiedad
  { id: "p1", foco: "panico", texto: "Mi cuerpo sabe calmarse, aunque ahora no lo sienta.", ejercicio: "Pon una mano en el pecho y otra en el abdomen. Respira 4 veces, sintiendo cómo se mueven." },
  { id: "p2", foco: "panico", texto: "Esta sensación es incómoda, pero no peligrosa.", ejercicio: "Nombra 5 cosas que puedes ver ahora mismo, en voz baja o mental." },
  { id: "p3", foco: "panico", texto: "No estoy sola: sé exactamente qué hacer cuando esto pase.", ejercicio: "Recuerda dónde está tu botón SOS en la app. Tócalo una vez ahora, solo para practicar." },
  { id: "p4", foco: "panico", texto: "Ya pasé por esto antes y logré calmarme.", ejercicio: "Escribe la última vez que una crisis pasó. ¿Cuánto duró en realidad?" },
  { id: "p5", foco: "panico", texto: "Puedo sentir miedo y seguir estando a salvo.", ejercicio: "Cuenta hacia atrás desde 20 de 3 en 3, despacio." },
  { id: "p6", foco: "panico", texto: "El pánico tiene un principio, un punto máximo y un final.", ejercicio: "Si sientes opresión en el pecho, estira los brazos hacia arriba y exhala largo 3 veces." },
  { id: "p7", foco: "panico", texto: "No tengo que controlar todo para estar bien.", ejercicio: "Suelta los hombros. Nota si los tenías apretados sin darte cuenta." },

  // abandono — ya probó apps, las abandonó
  { id: "a1", foco: "abandono", texto: "Hoy solo necesito 2 minutos, no una hora perfecta.", ejercicio: "Haz el Ritual de hoy sin pensar en si lo vas a mantener para siempre. Solo hoy." },
  { id: "a2", foco: "abandono", texto: "Empezar de nuevo no es fracasar, es seguir intentando.", ejercicio: "Si dejaste de venir unos días, no hay que 'recuperar' nada. Vuelve a hoy." },
  { id: "a3", foco: "abandono", texto: "No necesito una racha perfecta para que esto valga la pena.", ejercicio: "Marca el día de hoy como completo, sin mirar cuántos días fallaste antes." },
  { id: "a4", foco: "abandono", texto: "Esta vez no es solo una notificación, es algo que hago con mis manos.", ejercicio: "Escribe una palabra que describa cómo te sientes ahora mismo." },
  { id: "a5", foco: "abandono", texto: "Puedo construir este hábito a mi propio ritmo.", ejercicio: "Elige: ¿hoy quieres 2 minutos o solo 30 segundos? Ambos cuentan." },

  // otra — motivo personalizado / genérico cálido
  { id: "o1", foco: "otra", texto: "Cada día que me elijo a mí misma cuenta, aunque sea pequeño.", ejercicio: "Anota una cosa que hiciste hoy solo porque te hacía bien a ti." },
  { id: "o2", foco: "otra", texto: "Merezco el mismo cuidado que le doy a quienes amo.", ejercicio: "Haz algo amable por ti en los próximos 10 minutos: agua, estirar, respirar." },
  { id: "o3", foco: "otra", texto: "Estoy construyendo una relación distinta conmigo misma.", ejercicio: "Nombra algo que hoy hiciste diferente a como lo hubieras hecho hace un año." },
  { id: "o4", foco: "otra", texto: "No tengo que tenerlo todo resuelto para merecer paz.", ejercicio: "Suelta por 2 minutos algo que estás tratando de resolver ahora mismo." },
];

function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / 86400000);
}

export function getAfirmacionDelDia(foco: string, date: Date = new Date()): Afirmacion {
  const focoValido: Foco = ["dialogo", "panico", "abandono", "otra"].includes(foco)
    ? (foco as Foco)
    : "otra";
  const delFoco = BANCO_AFIRMACIONES.filter((a) => a.foco === focoValido);
  const pool = delFoco.length > 0 ? delFoco : BANCO_AFIRMACIONES.filter((a) => a.foco === "otra");
  const index = dayOfYear(date) % pool.length;
  return pool[index];
}
