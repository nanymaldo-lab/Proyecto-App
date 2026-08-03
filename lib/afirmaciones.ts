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
  { id: "d9", foco: "dialogo", texto: "No tengo que resolverlo todo hoy para ser suficiente.", ejercicio: "Escribe: 'a mi edad debería tener esto resuelto'. Ahora tacha 'debería' y sigue leyendo la frase." },
  { id: "d10", foco: "dialogo", texto: "Ser exigente conmigo no es lo mismo que ser justa conmigo.", ejercicio: "Nombra una regla que te impones y que no le pedirías a nadie más." },
  { id: "d11", foco: "dialogo", texto: "Puedo corregir un error sin castigarme por él.", ejercicio: "Piensa en algo que 'hiciste mal' hoy. Nombra qué vas a hacer distinto, sin insultarte primero." },
  { id: "d12", foco: "dialogo", texto: "Mi crítica interna exagera; yo decido si le creo.", ejercicio: "La próxima vez que te digas algo duro, pregúntate: ¿esto es un hecho o solo mi voz de siempre?" },
  { id: "d13", foco: "dialogo", texto: "Hoy elijo hablarme como alguien que quiere que yo crezca, no que me rinda.", ejercicio: "Cambia una frase de hoy de 'soy un desastre' a 'hoy tuve un día difícil'." },
  { id: "d14", foco: "dialogo", texto: "No necesito ser perfecta para merecer descanso.", ejercicio: "Date permiso de parar 5 minutos sin justificarlo con nada que 'lograste'." },

  // panico — miedo a crisis / ansiedad
  { id: "p1", foco: "panico", texto: "Mi cuerpo sabe calmarse, aunque ahora no lo sienta.", ejercicio: "Pon una mano en el pecho y otra en el abdomen. Respira 4 veces, sintiendo cómo se mueven." },
  { id: "p2", foco: "panico", texto: "Esta sensación es incómoda, pero no peligrosa.", ejercicio: "Nombra 5 cosas que puedes ver ahora mismo, en voz baja o mental." },
  { id: "p3", foco: "panico", texto: "No estoy sola: sé exactamente qué hacer cuando esto pase.", ejercicio: "Recuerda dónde está tu botón SOS en la app. Tócalo una vez ahora, solo para practicar." },
  { id: "p4", foco: "panico", texto: "Ya pasé por esto antes y logré calmarme.", ejercicio: "Escribe la última vez que una crisis pasó. ¿Cuánto duró en realidad?" },
  { id: "p5", foco: "panico", texto: "Puedo sentir miedo y seguir estando a salvo.", ejercicio: "Cuenta hacia atrás desde 20 de 3 en 3, despacio." },
  { id: "p6", foco: "panico", texto: "El pánico tiene un principio, un punto máximo y un final.", ejercicio: "Si sientes opresión en el pecho, estira los brazos hacia arriba y exhala largo 3 veces." },
  { id: "p7", foco: "panico", texto: "No tengo que controlar todo para estar bien.", ejercicio: "Suelta los hombros. Nota si los tenías apretados sin darte cuenta." },
  { id: "p8", foco: "panico", texto: "Puedo estar sola y aun así estar acompañada por lo que sé hacer.", ejercicio: "Escribe 3 palabras que te digas cuando el miedo empieza: te van a servir la próxima vez." },
  { id: "p9", foco: "panico", texto: "No estoy en peligro, mi cuerpo solo está en alerta.", ejercicio: "Moja tus manos con agua fría o sostenlas bajo la llave un momento. El frío ayuda a bajar la alerta." },
  { id: "p10", foco: "panico", texto: "Cada vez que atravieso esto, se vuelve un poco menos aterrador.", ejercicio: "Recuerda: la última vez pensaste que no ibas a poder, y pudiste. Anótalo." },
  { id: "p11", foco: "panico", texto: "Puedo pedir ayuda sin sentir que fallé.", ejercicio: "Si puedes, avísale a alguien de confianza: 'estoy teniendo un momento difícil'. No tienes que explicar más." },
  { id: "p12", foco: "panico", texto: "Mi respiración es algo que sí puedo controlar ahora mismo.", ejercicio: "Inhala contando 4, sostén 4, exhala contando 6. Repite 4 veces." },

  // abandono — ya probó apps, las abandonó
  { id: "a1", foco: "abandono", texto: "Hoy solo necesito 2 minutos, no una hora perfecta.", ejercicio: "Haz el Ritual de hoy sin pensar en si lo vas a mantener para siempre. Solo hoy." },
  { id: "a2", foco: "abandono", texto: "Empezar de nuevo no es fracasar, es seguir intentando.", ejercicio: "Si dejaste de venir unos días, no hay que 'recuperar' nada. Vuelve a hoy." },
  { id: "a3", foco: "abandono", texto: "No necesito una racha perfecta para que esto valga la pena.", ejercicio: "Marca el día de hoy como completo, sin mirar cuántos días fallaste antes." },
  { id: "a4", foco: "abandono", texto: "Esta vez no es solo una notificación, es algo que hago con mis manos.", ejercicio: "Escribe una palabra que describa cómo te sientes ahora mismo." },
  { id: "a5", foco: "abandono", texto: "Puedo construir este hábito a mi propio ritmo.", ejercicio: "Elige: ¿hoy quieres 2 minutos o solo 30 segundos? Ambos cuentan." },
  { id: "a6", foco: "abandono", texto: "No es que no pueda sostener esto, es que antes nada me daba herramientas de verdad.", ejercicio: "Compara: hoy hiciste algo con tus manos, no solo leíste una notificación. Anótalo." },
  { id: "a7", foco: "abandono", texto: "Volver después de una pausa también es parte del proceso.", ejercicio: "Si hoy es tu primer día en un tiempo, no te expliques por qué faltaste. Solo dale al Ritual." },
  { id: "a8", foco: "abandono", texto: "Sanar no tiene que costar como si fuera un lujo para poder sostenerlo.", ejercicio: "Recuerda que esto no depende de gastar más — depende de que aparezcas hoy, 2 minutos." },
  { id: "a9", foco: "abandono", texto: "Esta vez estoy construyendo algo mío, no siguiendo una lista ajena.", ejercicio: "Elige tú cómo quieres hacer el Ritual hoy: en silencio, en voz alta, o escribiéndolo." },

  // otra — motivo personalizado / genérico cálido
  { id: "o1", foco: "otra", texto: "Cada día que me elijo a mí misma cuenta, aunque sea pequeño.", ejercicio: "Anota una cosa que hiciste hoy solo porque te hacía bien a ti." },
  { id: "o2", foco: "otra", texto: "Merezco el mismo cuidado que le doy a quienes amo.", ejercicio: "Haz algo amable por ti en los próximos 10 minutos: agua, estirar, respirar." },
  { id: "o3", foco: "otra", texto: "Estoy construyendo una relación distinta conmigo misma.", ejercicio: "Nombra algo que hoy hiciste diferente a como lo hubieras hecho hace un año." },
  { id: "o4", foco: "otra", texto: "No tengo que tenerlo todo resuelto para merecer paz.", ejercicio: "Suelta por 2 minutos algo que estás tratando de resolver ahora mismo." },
  { id: "o5", foco: "otra", texto: "Lo que siento hoy es válido, aunque no tenga un nombre claro todavía.", ejercicio: "Escribe una palabra que resuma cómo te sientes ahora, sin juzgarla." },
  { id: "o6", foco: "otra", texto: "Cuidarme no es egoísmo, es lo que me permite cuidar lo demás.", ejercicio: "Nombra una responsabilidad que hoy puedes soltar 10 minutos, solo para respirar." },
  { id: "o7", foco: "otra", texto: "Puedo avanzar despacio y seguir avanzando.", ejercicio: "Elige un paso pequeño para hoy — no el paso perfecto, solo uno posible." },
  { id: "o8", foco: "otra", texto: "Merezco espacio para simplemente estar, sin producir nada.", ejercicio: "Quédate quieta 60 segundos sin hacer nada 'útil'. Solo respira." },
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
