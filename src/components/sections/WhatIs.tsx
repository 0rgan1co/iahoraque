const dimensiones = [
  {
    label: 'cómo',
    title: 'Procesos',
    body:
      'Procesos que liberan tiempo y atención. Menos fricción entre intención y ejecución. Decisiones rápidas sobre datos que sí importan — y eficiencia operativa real.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    label: 'qué',
    title: 'Prioridades',
    body:
      'Qué hacer y qué dejar. Diversificar fuentes de ingresos, reconocer qué se volvió commodity y qué aún no. Decidir dónde poner el foco cuando todo grita por atención.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </svg>
    ),
  },
  {
    label: 'con quién',
    title: 'Personas',
    body:
      'Equipo, aliados, proveedores, clientes, comunidad. La ventaja sostenible ya no vive dentro de una empresa — vive en cómo se coordinan las personas adentro y afuera.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3" />
      </svg>
    ),
  },
]

export default function WhatIs() {
  return (
    <section className="py-24 px-6 relative" aria-labelledby="propuesta-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-sm mask-radial opacity-40"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6] px-3 py-1.5 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] mb-4">
            Nuestra propuesta
          </span>
          <h2
            id="propuesta-heading"
            className="text-3xl md:text-5xl font-semibold text-[#f5f5f5] leading-[1.1] tracking-tight"
          >
            Compartir para{' '}
            <span className="italic font-normal text-gradient">mejorar.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Espacios seguros para intercambiar datos, experiencias y catalizar el cambio basados en evidencia. Una mirada integral que conecta tres dimensiones que suelen pensarse por separado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dimensiones.map(({ label, title, body, icon }) => (
            <div
              key={label}
              className="group relative rounded-2xl p-7 border flex flex-col gap-5 card-lift overflow-hidden backdrop-blur-sm"
              style={{
                background:
                  'linear-gradient(145deg, rgba(59,130,246,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Glow top */}
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
      </div>
    </section>
  )
}
