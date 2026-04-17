const impactos = [
  {
    number: '01',
    title: 'Velocidad de aprendizaje',
    body:
      'Organizaciones que trabajan en ciclos cortos, aprenden en iteraciones y adaptan dirección sin perder momentum.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Autonomía operativa',
    body:
      'Unidades de negocio que ganan eficiencia, diversifican ingresos y remueven las barreras que frenaban la colaboración.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Soluciones con sentido',
    body:
      'Respuestas creativas que ponen en el centro el respeto por las personas y el planeta — no como marketing, como método.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21s-7-5.5-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 11-7 11" />
      </svg>
    ),
  },
]

export default function Metrics() {
  return (
    <section className="py-24 px-6 relative" aria-labelledby="impacto-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6] px-3 py-1.5 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] mb-4">
            El impacto que nos mueve
          </span>
          <h2
            id="impacto-heading"
            className="text-3xl md:text-5xl font-semibold text-[#f5f5f5] leading-[1.1] tracking-tight"
          >
            El cambio que{' '}
            <span className="italic font-normal text-gradient">perseguimos.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            No trabajamos por métricas de vanidad. Organizaciones más rápidas, más autónomas y más conectadas hacen mejores decisiones — para sí mismas, para su gente y para el resto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {impactos.map(({ number, title, body, icon }) => (
            <div
              key={number}
              className="group relative rounded-2xl p-7 border flex flex-col gap-5 card-lift overflow-hidden backdrop-blur-sm"
              style={{
                background:
                  'linear-gradient(160deg, rgba(59,130,246,0.06) 0%, rgba(255,255,255,0.015) 100%)',
                borderColor: 'rgba(59, 130, 246, 0.15)',
              }}
            >
              {/* Top accent line */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)',
                }}
              />

              <div className="flex items-center justify-between gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-[#3b82f6]"
                  style={{
                    background: 'rgba(59,130,246,0.12)',
                    border: '1px solid rgba(59,130,246,0.25)',
                  }}
                >
                  {icon}
                </div>
                <span className="text-4xl font-bold text-[rgba(59,130,246,0.4)] tracking-tight select-none group-hover:text-[rgba(59,130,246,0.7)] transition-colors">
                  {number}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#f5f5f5] mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
