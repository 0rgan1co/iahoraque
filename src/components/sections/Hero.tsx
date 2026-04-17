const indice = [
  {
    number: '01',
    title: 'El problema',
    subtitle: 'La soledad del que decide frente a la incertidumbre',
  },
  {
    number: '02',
    title: 'La propuesta',
    subtitle: 'Compartir para mejorar, en 3 dimensiones',
  },
  {
    number: '03',
    title: 'Cómo trabajamos',
    subtitle: 'Tres formas de empezar, una sola lógica',
  },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
      {/* Subtle radial glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mb-10 flex flex-col items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3b82f6]">
          IAhora qué
        </span>
        <span className="text-[11px] uppercase tracking-[0.25em] text-[rgba(255,255,255,0.4)]">
          Espacios para decidir
        </span>
      </div>

      <h1 className="relative z-10 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl mb-6 text-[#f5f5f5]">
        IAhora,{' '}
        <span className="text-[#3b82f6]">¿qué?</span>
      </h1>

      <p className="relative z-10 text-lg md:text-xl text-[rgba(255,255,255,0.65)] max-w-2xl mb-14 leading-relaxed">
        La pregunta que se hacen los CEOs y Founders cuando miran la IA y no saben por dónde empezar.{' '}
        <span className="text-[rgba(255,255,255,0.9)]">La respondemos juntos.</span>
      </p>

      {/* Índice de secciones */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full mb-12">
        {indice.map(({ number, title, subtitle }) => (
          <div
            key={number}
            className="rounded-2xl p-5 border text-left flex flex-col gap-2"
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderColor: 'rgba(255,255,255,0.07)',
            }}
          >
            <span className="text-xs font-semibold tracking-widest text-[#3b82f6]">
              {number}
            </span>
            <span className="text-sm font-semibold text-[#f5f5f5]">{title}</span>
            <span className="text-xs text-[rgba(255,255,255,0.5)] leading-relaxed">
              {subtitle}
            </span>
          </div>
        ))}
      </div>

      <a
        href="#contacto"
        className="relative z-10 inline-flex items-center gap-2.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-8 py-4 rounded-full text-base md:text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-[rgba(59,130,246,0.25)]"
      >
        Empezar por una conversación
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30" aria-hidden="true">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.5)]" />
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}
