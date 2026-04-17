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
      {/* Grid pattern background con mask radial */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-radial opacity-70"
      />

      {/* Radial glow multicapa — referencia 21st.dev spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 50% 100%, rgba(59,130,246,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Badge con pulse dot */}
      <span className="relative z-10 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3b82f6] mb-8 px-4 py-2 rounded-full border border-[rgba(59,130,246,0.25)] bg-[rgba(59,130,246,0.05)] backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] pulse-dot" />
        IAhora qué · Espacios para decidir
      </span>

      <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.03em] leading-[0.98] max-w-5xl mb-6 text-[#f5f5f5]">
        IAhora,{' '}
        <span className="text-gradient italic font-normal">¿qué?</span>
      </h1>

      <p className="relative z-10 text-lg md:text-xl text-[rgba(255,255,255,0.65)] max-w-2xl mb-14 leading-relaxed">
        La pregunta que se hacen los CEOs y Founders cuando miran la IA y no saben por dónde empezar.{' '}
        <span className="text-[rgba(255,255,255,0.92)]">La respondemos juntos.</span>
      </p>

      {/* Índice de secciones con hover glow */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl w-full mb-14">
        {indice.map(({ number, title, subtitle }) => (
          <div
            key={number}
            className="rounded-2xl p-5 border text-left flex flex-col gap-2 card-lift backdrop-blur-sm"
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderColor: 'rgba(255,255,255,0.07)',
            }}
          >
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#3b82f6]">
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
        className="relative z-10 inline-flex items-center gap-2.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-8 py-4 rounded-full text-base md:text-lg transition-all duration-200 hover:scale-105 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)]"
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40" aria-hidden="true">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[rgba(59,130,246,0.6)]" />
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}
