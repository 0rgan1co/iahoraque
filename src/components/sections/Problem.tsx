const dolores = [
  {
    number: '01',
    title: 'La soledad del decisor',
    body: 'Incertidumbre sin pares con los que pensar. El equipo espera respuestas; el directorio espera resultados.',
  },
  {
    number: '02',
    title: 'La brecha entre saber y adoptar',
    body: 'La IA avanza más rápido que la capacidad de las organizaciones para incorporarla con criterio. El gap no es técnico: es de decisión.',
  },
  {
    number: '03',
    title: 'De la aspiración a la acción',
    body: 'El obstáculo no es la falta de ideas. Es el puente entre la idea y el resultado concreto, tangible, medible.',
  },
]

export default function Problem() {
  return (
    <section className="py-24 px-6" aria-labelledby="problem-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[rgba(255,255,255,0.4)] mb-3">
            ¿Por qué existe este espacio?
          </p>
          <h2
            id="problem-heading"
            className="text-3xl md:text-4xl font-semibold text-[#f5f5f5] max-w-2xl mx-auto leading-snug"
          >
            La soledad del que{' '}
            <span className="text-[#dd8448]">decide.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base leading-relaxed">
            Tomar decisiones sobre tecnología, equipo y negocio —al mismo tiempo— con información incompleta y sin nadie con quien pensarlo en voz alta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dolores.map(({ number, title, body }) => (
            <article
              key={number}
              className="rounded-2xl p-7 border flex flex-col gap-5 transition-colors duration-200 hover:border-[rgba(221,132,72,0.25)] group"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <span className="text-3xl font-bold text-[rgba(221,132,72,0.5)] select-none">
                {number}
              </span>
              <div>
                <h3 className="text-base font-semibold text-[#f5f5f5] mb-3 leading-snug">
                  {title}
                </h3>
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
