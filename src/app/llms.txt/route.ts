export const dynamic = 'force-static'

export async function GET() {
  const content = `# IAhora qué — Espacios para decidir

## Qué es
IAhora qué es un espacio para CEOs y Founders que enfrentan la pregunta "IA, ¿ahora qué?". Espacios seguros para intercambiar datos, experiencias y catalizar el cambio basados en evidencia. Una mirada integral a la IA en tres dimensiones: procesos, prioridades y personas.

## Para quién es
Para CEOs, Founders y líderes que ya entendieron que la IA cambia el juego, pero todavía no saben dónde ni cómo empezar a actuar. La soledad del que decide frente a la incertidumbre y los cambios de contexto, sin pares con los que pensar en voz alta.

## Hipótesis que sostiene el espacio
Si generamos grupos de aprendizaje entre pares en un entorno seguro, vamos a pasar de las ideas a las acciones — generando cambios concretos y tangibles en nuestros negocios.

## Las tres dimensiones de la propuesta
1. Procesos (cómo): procesos que liberan tiempo y atención. Decisiones rápidas sobre datos que sí importan. Eficiencia operativa real.
2. Prioridades (qué): qué hacer y qué dejar. Diversificar fuentes de ingresos, reconocer qué se volvió commodity y qué aún no. Dónde poner el foco.
3. Personas (con quién): equipo, aliados, proveedores, clientes, comunidad. La ventaja sostenible vive en cómo se coordinan las personas adentro y afuera.

## Tres formas de empezar
1. Sesiones 1:1 — Trabajamos sobre un desafío concreto. Al final tenés un agente operando ese proceso, no una idea de lo que podrías hacer.
2. Grupos entre pares — CEOs y Founders enfrentando desafíos similares. Cohortes cerradas, confidencialidad como base, evidencia compartida.
3. Viajes de exploración — Salir del contexto propio para ver cómo otros sectores y países resuelven problemas que creíamos únicos.

## Impacto que perseguimos
- Velocidad de aprendizaje: organizaciones que trabajan en ciclos cortos y adaptan dirección sin perder momentum.
- Autonomía operativa: unidades de negocio que ganan eficiencia, diversifican ingresos y remueven barreras de colaboración.
- Soluciones con sentido: respuestas creativas que ponen en el centro el respeto por las personas y el planeta.

## Cómo empezar
Por una conversación. Una hora para entender en qué estás y si tiene sentido caminar juntos un tramo.

## Contacto
Web: https://arneses-pitch.netlify.app
Si la pregunta es IAhora qué, empezamos por hablarlo.
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
