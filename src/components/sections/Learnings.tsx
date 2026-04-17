export default function Learnings() {
  return (
    <section className="py-24 px-6" aria-labelledby="hipotesis-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3b82f6] mb-3">
            H1 · Nuestra apuesta
          </p>
          <h2
            id="hipotesis-heading"
            className="text-3xl md:text-4xl font-semibold text-[#f5f5f5] leading-snug"
          >
            La hipótesis que estamos{' '}
            <span className="text-[#3b82f6]">testeando.</span>
          </h2>
        </div>

        <figure
          className="relative rounded-3xl p-10 md:p-14 border overflow-hidden"
          style={{
            background:
              'linear-gradient(140deg, rgba(59,130,246,0.08) 0%, rgba(255,255,255,0.02) 100%)',
            borderColor: 'rgba(59, 130, 246, 0.2)',
          }}
        >
          {/* Quote mark decorativo */}
          <span
            aria-hidden="true"
            className="absolute top-6 left-8 text-7xl md:text-8xl font-bold leading-none text-[rgba(59,130,246,0.18)] select-none"
          >
            “
          </span>

          <blockquote className="relative pt-10 md:pt-6">
            <p className="text-xl md:text-3xl text-[#f5f5f5] leading-snug font-medium tracking-tight">
              Si generamos{' '}
              <span className="text-[#3b82f6]">grupos de aprendizaje entre pares</span>{' '}
              en un entorno seguro, vamos a pasar de las{' '}
              <span className="italic text-[rgba(255,255,255,0.7)]">ideas</span>{' '}
              a las{' '}
              <span className="text-[#3b82f6]">acciones</span>{' '}
              — generando cambios concretos y tangibles en nuestros negocios.
            </p>
          </blockquote>

          <figcaption className="relative mt-10 pt-6 border-t border-[rgba(255,255,255,0.08)] flex items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6]">
              H1
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.4)]">
              Testeable · En curso
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
