const dimensiones = [
  {
    label: 'adentro',
    title: 'Eficiencia operativa',
    body:
      'Procesos que liberan tiempo y atención. Menos fricción entre intención y ejecución. Decisiones rápidas sobre datos que sí importan.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    label: 'el qué',
    title: 'Modelo de negocio',
    body:
      'Diversificar fuentes de ingresos. Recuperar valor cuando la tecnología desplaza lo que antes era único. Ver qué se volvió commodity y qué aún no.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </svg>
    ),
  },
  {
    label: 'afuera',
    title: 'Colaboración en ecosistema',
    body:
      'Relaciones con proveedores, aliados, competidores y comunidad. La ventaja sostenible ya no vive dentro de una empresa — vive en su red.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    <section className="py-24 px-6" aria-labelledby="propuesta-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[rgba(255,255,255,0.4)] mb-3">
            Nuestra propuesta
          </p>
          <h2
            id="propuesta-heading"
            className="text-3xl md:text-4xl font-semibold text-[#f5f5f5] leading-snug"
          >
            Compartir para{' '}
            <span className="text-[#3b82f6]">mejorar.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base leading-relaxed">
            Espacios seguros para intercambiar datos, experiencias y catalizar el cambio basados en evidencia. Una mirada integral que conecta tres dimensiones que suelen pensarse por separado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dimensiones.map(({ label, title, body, icon }) => (
            <div
              key={label}
              className="rounded-2xl p-7 border flex flex-col gap-5 transition-colors duration-200 hover:border-[rgba(59,130,246,0.25)]"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                >
                  {icon}
                </div>
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full"
                  style={{
                    color: '#3b82f6',
                    background: 'rgba(59, 130, 246, 0.08)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                  }}
                >
                  {label}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#f5f5f5] mb-3 leading-snug">
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
