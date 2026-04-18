const TIDYCAL_URL = 'https://tidycal.com/roldanjorgex'

export default function LeadForm() {
  return (
    <section
      id="contacto"
      className="py-32 px-6 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.15) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid mask-radial opacity-30"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6] px-3 py-1.5 rounded-full border border-[rgba(59,130,246,0.25)] bg-[rgba(59,130,246,0.06)] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] pulse-dot" />
          Punto de entrada
        </span>
        <h2
          id="cta-heading"
          className="text-4xl md:text-6xl font-semibold text-[#f5f5f5] leading-[1.05] tracking-[-0.02em] mb-6"
        >
          Si la pregunta es{' '}
          <span className="italic font-normal text-gradient">IAhora qué,</span>
          <br className="hidden md:block" />
          {' '}empezamos por una conversación.
        </h2>

        <p className="text-base md:text-xl text-[rgba(255,255,255,0.65)] max-w-2xl mx-auto leading-relaxed mb-14">
          Sin pitch, sin propuesta cerrada. Una hora para entender en qué estás y si tiene sentido caminar juntos un tramo.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <a
            href={TIDYCAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-9 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 shadow-[0_0_60px_-15px_rgba(59,130,246,0.8)] group"
          >
            <span className="relative z-10 flex items-center gap-2.5">
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
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>

          <a
            href="#manifiesto"
            className="inline-flex items-center gap-2 text-[rgba(255,255,255,0.6)] hover:text-[#f5f5f5] font-medium px-6 py-4 rounded-full text-base transition-colors"
          >
            Leer el manifiesto
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>

        <p className="text-xs text-[rgba(255,255,255,0.35)] mt-12 leading-relaxed">
          Sin compromiso. Sin pitch. Una conversación honesta para ver si hay match.
        </p>

        {/* Divider con shimmer */}
        <div className="mt-16 h-px w-full max-w-md mx-auto shimmer rounded-full opacity-60" aria-hidden="true" />

        <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-[rgba(255,255,255,0.3)]">
          IAhora qué · Espacios para decidir con criterio
        </p>
      </div>
    </section>
  )
}
