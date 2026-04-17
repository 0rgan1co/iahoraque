export default function OrganizationSD() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IAhora qué",
    "url": "https://0rgan1co.github.io/iahoraque",
    "description": "IAhora qué es un espacio para que CEOs y Founders pasen de las ideas a las acciones con IA. Grupos de aprendizaje entre pares, sesiones 1:1 y viajes de exploración.",
    "knowsAbout": [
      "Inteligencia Artificial",
      "Adopción de IA en empresas",
      "Aprendizaje entre pares",
      "Transformación organizacional",
      "Toma de decisiones con IA"
    ],
    "serviceArea": {
      "@type": "GeoShape",
      "name": "Latinoamérica"
    }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
