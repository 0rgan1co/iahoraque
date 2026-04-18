const tresP = [
  {
    label: 'quién hace qué',
    title: 'Personas',
    body:
      'La IA desplaza tareas y nos ayuda a repensar los límites de los roles. Eso nos invita a conversar lo que se evitaba: qué decide cada uno, qué queda obsoleto, y libera espacio para poner foco en el trabajo que aporta mayor valor.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
        <path d="M15 20c0-2 2-3.5 4-3.5s4 1.5 4 3.5" />
      </svg>
    ),
  },
  {
    label: 'qué importa',
    title: 'Prioridades',
    body:
      'Cuando un agente puede hacer en minutos lo que tomaba horas, lo escaso cambia. Eso nos invita a mirar con honestidad qué es lo urgente, qué es lo importante, y dónde vale la pena poner nuestra energía.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l2.5 6.5L21 9.5l-5 4.5 1.5 7-5.5-3.5L6.5 21 8 14 3 9.5l6.5-1z" />
      </svg>
    ),
  },
  {
    label: 'cómo lo hacemos',
    title: 'Procesos',
    body:
      'Diseñar un agente nos ayuda a explicitar el proceso que nunca estuvo escrito. Esa conversación, que se postergaba hace años, ahora se vuelve posible — y fértil.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="4" rx="1" />
        <rect x="3" y="10" width="12" height="4" rx="1" />
        <rect x="3" y="16" width="18" height="4" rx="1" />
      </svg>
    ),
  },
]

export default function Principle() {
  return (
    <section className="py-24 px-6 relative" aria-labelledby="principle-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-sm mask-radial opacity-40"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6] px-3 py-1.5 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] mb-4">
            Principio de método
          </span>
          <h2
            id="principle-heading"
            className="text-3xl md:text-5xl font-semibold text-[#f5f5f5] leading-[1.1] tracking-tight"
          >
            La IA como catalizador de las{' '}
            <span className="italic font-normal text-gradient">3 P.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            La IA no es el cambio: es el catalizador. Nos invita —por fin— a mirar lo que veníamos postergando: cómo trabajamos, qué priorizamos y quién hace qué. Bien usada, evoluciona las 3 P al mismo tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tresP.map(({ label, title, body, icon }) => (
            <div
              key={label}
              className="group relative rounded-2xl p-7 border flex flex-col gap-5 card-lift overflow-hidden backdrop-blur-sm"
              style={{
                background:
                  'linear-gradient(145deg, rgba(59,130,246,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <div
                aria-hidden="true"
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{ background: 'rgba(59,130,246,0.25)' }}
              />

              <div className="relative flex items-center justify-between gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-[#3b82f6] group-hover:bg-[rgba(59,130,246,0.18)] transition-colors"
                  style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.15)',
                  }}
                >
                  {icon}
                </div>
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.22em] px-2.5 py-1 rounded-full"
                  style={{
                    color: '#3b82f6',
                    background: 'rgba(59, 130, 246, 0.08)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                  }}
                >
                  {label}
                </span>
              </div>
              <div className="relative">
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

        <p className="relative text-center mt-12 italic text-[rgba(255,255,255,0.55)] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          La IA no resuelve las 3 P. Las pone sobre la mesa y nos da herramientas para evolucionarlas juntos.
        </p>
      </div>
    </section>
  )
}
