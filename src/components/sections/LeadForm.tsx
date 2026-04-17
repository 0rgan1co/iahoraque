const TIDYCAL_URL = 'https://tidycal.com/roldanjorgex'

export default function LeadForm() {
  return (
    <section
      id="contacto"
      className="py-28 px-6 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[rgba(255,255,255,0.4)] mb-4">
          Empezar
        </p>
        <h2
          id="cta-heading"
          className="text-4xl md:text-5xl font-semibold text-[#f5f5f5] leading-tight tracking-tight mb-6"
        >
          Si la pregunta es{' '}
          <span className="text-[#3b82f6]">IAhora qué,</span>
          <br className="hidden md:block" />
          {' '}empezamos por una conversación.
        </h2>

        <p className="text-base md:text-lg text-[rgba(255,255,255,0.65)] max-w-2xl mx-auto leading-relaxed mb-12">
          Una hora para entender en qué estás y si tiene sentido caminar juntos un tramo.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <a
            href={TIDYCAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 shadow-lg shadow-[rgba(59,130,246,0.25)]"
          >
            Agendar una conversación
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

          <a
            href="#propuesta-heading"
            className="inline-flex items-center gap-2 text-[rgba(255,255,255,0.6)] hover:text-[#f5f5f5] font-medium px-6 py-4 rounded-full text-base transition-colors"
          >
            Volver a la propuesta
          </a>
        </div>

        <p className="text-xs text-[rgba(255,255,255,0.35)] mt-10 leading-relaxed">
          Sin compromiso. Sin pitch. Una conversación honesta para ver si hay match.
        </p>
      </div>
    </section>
  )
}
