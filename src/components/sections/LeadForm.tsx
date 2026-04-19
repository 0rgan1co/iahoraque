const TIDYCAL_URL = 'https://tidycal.com/roldanjorgex'

export default function LeadForm() {
  return (
    <section
      id="contacto"
      className="py-32 px-6 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
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
          El siguiente paso es{' '}
          <span className="italic font-normal text-gradient">simple.</span>
        </h2>

        <p className="text-base md:text-xl text-[rgba(255,255,255,0.75)] max-w-2xl mx-auto leading-relaxed mb-10">
          30 minutos para entender tu pregunta abierta, nombrar el cuello de botella y recomendarte el camino — trabajemos juntos o no.
        </p>

        <p className="text-sm md:text-base text-[rgba(255,255,255,0.55)] max-w-xl mx-auto leading-relaxed mb-12 italic">
          Sin pitch. Sin propuesta cerrada. Solo claridad.
        </p>

        {/* CTA único, primario */}
        <a
          href={TIDYCAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-10 py-4 rounded-full text-base md:text-lg transition-all duration-200 hover:scale-105 shadow-[0_0_80px_-15px_rgba(59,130,246,0.9)] group"
        >
          Agendar una conversación
          <svg
            width="20"
            height="20"
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

        {/* Link secundario — relegado abajo del botón */}
        <p className="mt-6">
          <a
            href="#manifiesto"
            className="inline-flex items-center gap-1.5 text-xs text-[rgba(255,255,255,0.45)] hover:text-[rgba(255,255,255,0.75)] transition-colors"
          >
            o leer primero el manifiesto
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </p>

        <div className="mt-16 h-px w-full max-w-md mx-auto shimmer rounded-full opacity-60" aria-hidden="true" />

        <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-[rgba(255,255,255,0.3)]">
          IAhora qué · Espacios para decidir con criterio
        </p>
      </div>
    </section>
  )
}
