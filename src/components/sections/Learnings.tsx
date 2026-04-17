export default function Learnings() {
  return (
    <section className="py-24 px-6 relative" aria-labelledby="hipotesis-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6] px-3 py-1.5 rounded-full border border-[rgba(59,130,246,0.25)] bg-[rgba(59,130,246,0.06)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] pulse-dot" />
            H1 · Nuestra apuesta
          </span>
          <h2
            id="hipotesis-heading"
            className="text-3xl md:text-5xl font-semibold text-[#f5f5f5] leading-[1.1] tracking-tight"
          >
            La hipótesis que estamos{' '}
            <span className="italic font-normal text-gradient">testeando.</span>
          </h2>
        </div>

        <figure
          className="relative glow-border rounded-3xl p-10 md:p-16 border overflow-hidden backdrop-blur-sm"
          style={{
            background:
              'linear-gradient(140deg, rgba(59,130,246,0.08) 0%, rgba(255,255,255,0.02) 100%)',
            borderColor: 'rgba(59, 130, 246, 0.22)',
          }}
        >
          {/* Dot pattern interior */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-dot opacity-40"
          />

          {/* Quote mark decorativo */}
          <span
            aria-hidden="true"
            className="absolute top-4 left-8 text-[9rem] leading-none font-serif text-[rgba(59,130,246,0.22)] select-none"
          >
            &ldquo;
          </span>

          <blockquote className="relative pt-14 md:pt-10">
            <p className="text-xl md:text-3xl lg:text-4xl text-[#f5f5f5] leading-[1.25] font-medium tracking-[-0.01em]">
              Si generamos{' '}
              <span className="text-[#3b82f6] font-semibold">grupos de aprendizaje entre pares</span>{' '}
              en un entorno seguro, vamos a pasar de las{' '}
              <span className="italic text-[rgba(255,255,255,0.7)]">ideas</span>{' '}
              a las{' '}
              <span className="text-[#3b82f6] font-semibold">acciones</span>{' '}
              — generando cambios concretos y tangibles en nuestros negocios.
            </p>
          </blockquote>

          <figcaption className="relative mt-12 pt-6 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(59,130,246,0.15)] border border-[rgba(59,130,246,0.3)] text-[10px] font-bold text-[#3b82f6]">
                H1
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[rgba(255,255,255,0.5)]">
                Testeable · En curso
              </span>
            </div>
            <div className="hidden sm:block h-px flex-1 max-w-[120px] shimmer rounded-full" />
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
