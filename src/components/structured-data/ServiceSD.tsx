export default function ServiceSD() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IAhora qué — Espacios para decidir",
    "provider": {
      "@type": "Organization",
      "name": "IAhora qué"
    },
    "serviceType": "Espacios de aprendizaje y decisión sobre IA para CEOs y Founders",
    "description": "Espacios seguros para intercambiar datos, experiencias y catalizar el cambio basados en evidencia. Tres formas de empezar: sesiones 1:1, grupos entre pares y viajes de exploración.",
    "areaServed": "Latinoamérica",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tres formas de empezar",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sesiones 1:1",
            "description": "Trabajamos sobre un desafío concreto de tu negocio. Al final tienes un agente operando ese proceso — no una idea de lo que podrías hacer."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Grupos entre pares",
            "description": "CEOs y Founders enfrentando desafíos similares con IA. Cohortes cerradas, confidencialidad como base, evidencia compartida."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Viajes de exploración",
            "description": "Salir del contexto propio para ver cómo otros — en otros sectores y países — resuelven problemas que creíamos únicos."
          }
        }
      ]
    }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
