const dolores = [
  {
    number: '01',
    title: 'La soledad del decisor',
    body: 'CEOs y Founders gestionando incertidumbre sin pares con los que pensar. El equipo espera respuestas; el directorio espera resultados.',
    accent: '#dd8448',
  },
  {
    number: '02',
    title: 'La brecha entre el necesitar-querer y el saber-poder',
    body: 'El negocio necesita más de lo que está preparado para hacer, y sabe más de lo que realmente puede ejecutar. La IA no cierra esa brecha: la amplifica.',
    accent: '#dd8448',
  },
  {
    number: '03',
    title: 'De la aspiración a los resultados',
    body: 'El obstáculo no es la falta de ideas. Es la capacidad de ejecutar con excelencia para construir un puente entre la aspiración y el resultado concreto, tangible, medible.',
    accent: '#dd8448',
  },
]

export default function Problem() {
  return (
    <section className="py-24 px-6 relative" aria-labelledby="problem-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot mask-radial opacity-50"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#dd8448] px-3 py-1.5 rounded-full border border-[rgba(221,132,72,0.25)] bg-[rgba(221,132,72,0.06)] mb-4">
            ¿Por qué existe este espacio?
          </span>
          <h2
            id="problem-heading"
            className="text-3xl md:text-5xl font-semibold text-[#f5f5f5] max-w-3xl mx-auto leading-[1.1] tracking-tight"
          >
            La soledad del que{' '}
            <span className="italic font-normal text-[#dd8448]">decide.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Tomar decisiones sobre tecnología, equipo y negocio —al mismo tiempo— con información incompleta y sin nadie con quien pensarlo en voz alta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dolores.map(({ number, title, body, accent }) => (
            <article
              key={number}
              className="group relative rounded-2xl p-7 border flex flex-col gap-5 card-lift overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.025)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Accent top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                }}
              />

              <div className="flex items-baseline justify-between">
                <span
                  className="text-5xl font-bold leading-none select-none"
                  style={{ color: 'rgba(221,132,72,0.15)' }}
                >
                  {number}
                </span>
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: accent }}
                >
                  Dolor
                </span>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#f5f5f5] mb-3 leading-snug">
                  {title}
                </h4>
                <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
