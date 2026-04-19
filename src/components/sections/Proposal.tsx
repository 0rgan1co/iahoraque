import Quote from '@/components/Quote'

const tresP = [
  {
    label: 'quién hace qué',
    title: 'Personas',
    body:
      'La IA desplaza tareas y nos invita a repensar los límites de los roles. Qué decide cada uno, qué queda obsoleto, qué libera espacio para el trabajo que sí aporta valor.',
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
      'Cuando un agente hace en minutos lo que tomaba horas, lo escaso cambia. Mirás con honestidad qué es urgente, qué es importante y dónde vale la pena poner energía.',
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
      'Diseñar un agente obliga a explicitar el proceso que nunca estuvo escrito. Esa conversación postergada durante años se vuelve posible — y fértil — hoy.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="4" rx="1" />
        <rect x="3" y="10" width="12" height="4" rx="1" />
        <rect x="3" y="16" width="18" height="4" rx="1" />
      </svg>
    ),
  },
]

export default function Proposal() {
  return (
    <section className="py-28 px-6 relative" aria-labelledby="propuesta-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-sm mask-radial opacity-40"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Epígrafe Meadows */}
        <div className="max-w-3xl mx-auto mb-14">
          <Quote
            variant="blue"
            text="Estos son lugares dentro de un sistema complejo donde un pequeño cambio en una cosa puede producir grandes cambios en todo."
            cite="Donella Meadows"
            source="Leverage Points (1999)"
          />
        </div>

        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6] px-3 py-1.5 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] pulse-dot" />
            La propuesta
          </span>
          <h2
            id="propuesta-heading"
            className="text-3xl md:text-5xl font-semibold text-[#f5f5f5] leading-[1.1] tracking-tight"
          >
            Compartir para{' '}
            <span className="italic font-normal text-gradient">mejorar.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.75)] mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
            La IA no es el cambio. Es el catalizador de las 3 P.
          </p>
          <p className="text-[rgba(255,255,255,0.55)] mt-3 max-w-2xl mx-auto text-base leading-relaxed">
            Bien usada, te invita —por fin— a mirar lo que venías postergando: cómo trabajas, qué priorizas y quién hace qué. Y evoluciona las tres al mismo tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
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

        {/* Hipótesis H1 como cierre destacado */}
        <figure
          className="relative glow-border rounded-3xl p-10 md:p-14 border overflow-hidden backdrop-blur-sm max-w-4xl mx-auto"
          style={{
            background:
              'linear-gradient(140deg, rgba(59,130,246,0.08) 0%, rgba(255,255,255,0.02) 100%)',
            borderColor: 'rgba(59, 130, 246, 0.22)',
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-dot opacity-40"
          />

          <span
            aria-hidden="true"
            className="absolute top-4 left-8 text-[7rem] leading-none font-serif text-[rgba(59,130,246,0.22)] select-none"
          >
            &ldquo;
          </span>

          <div className="relative pt-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6] mb-4">
              H1 · La hipótesis que estamos testeando
            </p>
            <blockquote>
              <p className="text-lg md:text-2xl lg:text-3xl text-[#f5f5f5] leading-[1.3] font-medium tracking-[-0.01em]">
                Si generamos{' '}
                <span className="text-[#3b82f6] font-semibold">grupos de aprendizaje entre pares</span>{' '}
                en un entorno seguro, vamos a pasar de las{' '}
                <span className="italic text-[rgba(255,255,255,0.7)]">ideas</span>{' '}
                a las{' '}
                <span className="text-[#3b82f6] font-semibold">acciones</span>{' '}
                — generando cambios concretos y tangibles en nuestros negocios.
              </p>
            </blockquote>

            <figcaption className="mt-8 pt-5 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(59,130,246,0.15)] border border-[rgba(59,130,246,0.3)] text-[10px] font-bold text-[#3b82f6]">
                  H1
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[rgba(255,255,255,0.5)]">
                  Nuestra apuesta · Testeable · En curso
                </span>
              </div>
              <div className="hidden sm:block h-px flex-1 max-w-[120px] shimmer rounded-full" />
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  )
}
