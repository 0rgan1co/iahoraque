const indice = [
  {
    number: '01',
    title: 'El problema',
    subtitle: 'La soledad del que decide frente a la incertidumbre y los cambios de contexto',
  },
  {
    number: '02',
    title: 'La propuesta',
    subtitle: 'Compartir para mejorar, en 3 dimensiones: adentro, el qué y afuera',
  },
  {
    number: '03',
    title: 'Cómo trabajamos',
    subtitle: 'Tres formas de empezar, una sola lógica. Contextos seguros para aprender haciendo con otras personas.',
  },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-radial opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 50% 100%, rgba(59,130,246,0.06) 0%, transparent 60%)',
        }}
      />

      <span className="relative z-10 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3b82f6] mb-8 px-4 py-2 rounded-full border border-[rgba(59,130,246,0.25)] bg-[rgba(59,130,246,0.05)] backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] pulse-dot" />
        Un espacio para quienes deciden
      </span>

      <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.03em] leading-[0.98] max-w-5xl mb-6 text-[#f5f5f5]">
        <span className="text-[#3b82f6] font-bold not-italic">IA</span>
        <span>hora,</span>{' '}
        <span className="text-gradient italic font-normal">¿qué?</span>
      </h1>

      <p className="relative z-10 text-lg md:text-xl text-[rgba(255,255,255,0.65)] max-w-2xl mb-4 leading-relaxed">
        La pregunta que se hacen los CEOs y Founders cuando miran la IA y no saben por dónde empezar.
      </p>
      <p className="relative z-10 text-base md:text-lg text-[rgba(255,255,255,0.85)] max-w-2xl mb-14 leading-relaxed">
        La respondemos juntos — con datos, pares y evidencia.
      </p>

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

      <div className="relative z-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
        <a
          href="#actividades-heading"
          className="inline-flex items-center gap-2.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-8 py-4 rounded-full text-base md:text-lg transition-all duration-200 hover:scale-105 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] group"
        >
          Ver cómo trabajamos
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
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
        <a
          href="#problem-heading"
          className="inline-flex items-center gap-2 text-[rgba(255,255,255,0.75)] hover:text-[#f5f5f5] font-medium px-6 py-4 rounded-full text-base transition-colors border border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.22)] backdrop-blur-sm"
        >
          Por qué existe este espacio
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40" aria-hidden="true">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[rgba(59,130,246,0.6)]" />
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}
