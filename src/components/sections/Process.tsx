const actividades = [
  {
    number: '1',
    title: 'Sesiones 1:1',
    subtitle: 'Decisión enfocada',
    description:
      'Trabajamos sobre un desafío concreto de tu negocio. Al final tenés un agente operando ese proceso — no una idea de lo que podrías hacer.',
    tags: ['Individual', 'Ciclo corto', 'Un proceso a la vez'],
  },
  {
    number: '2',
    title: 'Grupos entre pares',
    subtitle: 'Aprendizaje en entorno seguro',
    description:
      'CEOs y Founders enfrentando desafíos similares con IA. Lo que en una sala cerrada tarda meses, entre pares acontece en semanas. Confidencialidad como base.',
    tags: ['Grupal', 'Cohortes cerradas', 'Evidencia compartida'],
  },
  {
    number: '3',
    title: 'Viajes de exploración',
    subtitle: 'Ampliar perspectivas',
    description:
      'Salir del contexto propio para ver cómo otros — en otros sectores, otros países — resuelven problemas que creíamos únicos.',
    tags: ['Inmersivo', 'Campo + conversación', 'Perspectiva ampliada'],
  },
]

export default function Process() {
  return (
    <section className="py-24 px-6" aria-labelledby="actividades-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[rgba(255,255,255,0.4)] mb-3">
            Cómo trabajamos
          </p>
          <h2
            id="actividades-heading"
            className="text-3xl md:text-4xl font-semibold text-[#f5f5f5] leading-snug"
          >
            Tres formas de empezar.{' '}
            <span className="text-[#3b82f6]">Una sola lógica.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base leading-relaxed">
            Todos los formatos comparten un principio: ciclos cortos, evidencia sobre la mesa, y la compañía adecuada para la decisión que toca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          <div
            className="hidden md:block absolute top-10 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-px z-0"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(90deg, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.15) 50%, rgba(59,130,246,0.3) 100%)',
            }}
          />

          {actividades.map(({ number, title, subtitle, description, tags }) => (
            <div
              key={number}
              className="relative z-10 rounded-2xl p-7 border flex flex-col gap-5"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: 'rgba(59, 130, 246, 0.12)',
                    color: '#3b82f6',
                    border: '1px solid rgba(59, 130, 246, 0.25)',
                  }}
                >
                  {number}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[rgba(255,255,255,0.4)]">
                  {subtitle}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#f5f5f5] mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full"
                    style={{
                      color: 'rgba(255,255,255,0.55)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#2563eb] font-semibold text-sm transition-colors"
          >
            Empezamos por una conversación
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
