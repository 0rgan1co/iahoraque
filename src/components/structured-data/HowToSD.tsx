export default function HowToSD() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo empezar a decidir mejor sobre IA con IAhora qué",
    "description": "Tres formas de empezar, una sola lógica: ciclos cortos, evidencia sobre la mesa y la compañía adecuada para la decisión que toca.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Sesiones 1:1",
        "text": "Trabajamos sobre un desafío concreto de tu negocio. Al final tenés un agente operando ese proceso — no una idea de lo que podrías hacer."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Grupos entre pares",
        "text": "CEOs y Founders enfrentando desafíos similares con IA. Lo que en una sala cerrada tarda meses, entre pares acontece en semanas. Confidencialidad como base."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Viajes de exploración",
        "text": "Salir del contexto propio para ver cómo otros — en otros sectores, otros países — resuelven problemas que creíamos únicos."
      }
    ]
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
