const actividades = [
  {
    number: '1',
    title: 'Sesiones 1:1',
    subtitle: 'Decisión enfocada',
    description:
      'Trabajamos sobre un desafío concreto de tu negocio. Al final tenés un agente operando ese proceso — no una idea de lo que podrías hacer.',
    tags: ['Individual', 'Ciclo corto', 'Un proceso a la vez'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Grupos entre pares',
    subtitle: 'Aprendizaje en entorno seguro',
    description:
      'CEOs y Founders enfrentando desafíos similares con IA. Lo que en una sala cerrada tarda meses, entre pares acontece en semanas. Confidencialidad como base.',
    tags: ['Grupal', 'Cohortes cerradas', 'Evidencia compartida'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
        <path d="M15 20c0-2 2-3.5 4-3.5s4 1.5 4 3.5" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Viajes de exploración',
    subtitle: 'Ampliar perspectivas',
    description:
      'Salir del contexto propio para ver cómo otros — en otros sectores, otros países — resuelven problemas que creíamos únicos.',
    tags: ['Inmersivo', 'Campo + conversación', 'Perspectiva ampliada'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section className="py-24 px-6 relative" aria-labelledby="actividades-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot mask-radial opacity-40"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6] px-3 py-1.5 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] mb-4">
            Cómo trabajamos
          </span>
          <h2
            id="actividades-heading"
            className="text-3xl md:text-5xl font-semibold text-[#f5f5f5] leading-[1.1] tracking-tight"
          >
            Tres formas de empezar.{' '}
            <span className="italic font-normal text-gradient">Una sola lógica.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Todos los formatos comparten un principio: ciclos cortos, evidencia sobre la mesa, y la compañía adecuada para la decisión que toca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-px z-0"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(90deg, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.1) 50%, rgba(59,130,246,0.3) 100%)',
            }}
          />

          {actividades.map(({ number, title, subtitle, description, tags, icon }) => (
            <div
              key={number}
              className="relative z-10 rounded-2xl p-7 border flex flex-col gap-5 card-lift backdrop-blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 text-[#3b82f6]"
                  style={{
                    background: 'rgba(59, 130, 246, 0.12)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                  }}
                >
                  {icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#3b82f6]">
                    0{number}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[rgba(255,255,255,0.4)]">
                    {subtitle}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#f5f5f5] mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 mt-auto border-t border-[rgba(255,255,255,0.05)]">
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
            className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#60a5fa] font-semibold text-sm transition-colors group"
          >
            Empezamos por una conversación
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
