const faqs = [
  {
    question: "¿Qué es IAhora qué?",
    answer: "IAhora qué es un espacio para CEOs y Founders que enfrentan la pregunta 'IA, ¿ahora qué?'. Espacios seguros para intercambiar datos, experiencias y catalizar el cambio basados en evidencia. Tres formas de empezar: sesiones 1:1, grupos entre pares y viajes de exploración."
  },
  {
    question: "¿Para quién es?",
    answer: "Para CEOs, Founders y líderes que ya entendieron que la IA cambia el juego, pero todavía no saben dónde ni cómo empezar a actuar. Si te sientes solo frente a la decisión, o si el equipo y el directorio esperan respuestas que nadie todavía tiene, este es el espacio."
  },
  {
    question: "¿Cuál es la hipótesis que están testeando?",
    answer: "Si generamos grupos de aprendizaje entre pares en un entorno seguro, vamos a pasar de las ideas a las acciones — generando cambios concretos y tangibles en nuestros negocios. Es la hipótesis que sostiene todo el espacio."
  },
  {
    question: "¿Cómo trabajan? ¿Qué actividades hay?",
    answer: "Tres formas, una sola lógica: ciclos cortos, evidencia sobre la mesa y la compañía adecuada. Sesiones 1:1 sobre un desafío concreto que termina con un agente operando ese proceso. Grupos entre pares en cohortes cerradas con confidencialidad como base. Viajes de exploración para ver cómo otros sectores y países resuelven problemas similares."
  },
  {
    question: "¿En qué dimensiones miran la IA?",
    answer: "En tres: eficiencia operativa (adentro: procesos que liberan tiempo), modelo de negocio (el qué: diversificar fuentes de ingresos cuando la tecnología vuelve commodity lo que era único) y colaboración en ecosistema (afuera: relaciones con proveedores, aliados y comunidad). Es una mirada integral que conecta lo que suele pensarse por separado."
  },
  {
    question: "¿Cómo empiezo?",
    answer: "Por una conversación de una hora. Para entender en qué estás y si tiene sentido caminar juntos un tramo. Sin compromiso de largo plazo: si la pregunta es IAhora qué, empezamos por hablarlo."
  }
]

export default function FaqSD() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export { faqs }
