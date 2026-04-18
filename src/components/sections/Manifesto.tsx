import Quote from '@/components/Quote'

const TIDYCAL_URL = 'https://tidycal.com/roldanjorgex'

const creencias = [
  {
    number: '01',
    claim: 'Creemos que el mayor problema del decisor no es técnico: es la soledad.',
    body:
      'La brecha no es entre lo que la IA puede hacer y lo que tu empresa sabe. Es entre el peso de la decisión y los pares con los que poder pensarla. Esa soledad no la resuelve un asesor. La resuelven otros decisores.',
  },
  {
    number: '02',
    claim: 'Creemos que la aspiración sin capacidad de ejecutar con excelencia es humo.',
    body:
      'El obstáculo no es la falta de ideas, es la capacidad de convertirlas en resultados concretos, tangibles, medibles. Por eso cada conversación con nosotros termina en algo que opera — no en una idea de lo que podrías hacer. Porque la estrategia es un commodity; la ejecución es el arte.',
  },
  {
    number: '03',
    claim: 'Creemos en ciclos cortos, no en proyectos largos.',
    body:
      'Los planes de transformación de 18 meses mueren en el tercer mes. Preferimos decidir un proceso, probarlo, aprender, y seguir. Aprender haciendo es más rápido que planificar hasta la certeza — que nunca llega.',
  },
  {
    number: '04',
    claim:
      'Creemos que autonomía y foco habilitan responsabilidad. Y la responsabilidad es la que nos hace eficientes y efectivos.',
    body:
      'Equipos eficientes pero dependientes terminan siendo cuellos de botella. Unidades autónomas —con foco claro, con contexto, con herramientas para decidir— son las que sostienen el crecimiento y responden por sus resultados cuando el fundador ya no puede estar en cada decisión.',
  },
]

export default function Manifesto() {
  return (
    <section
      id="manifiesto"
      className="relative py-28 px-6 overflow-hidden"
      aria-labelledby="manifesto-heading"
      style={{
        background:
          'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6] px-3 py-1.5 rounded-full border border-[rgba(59,130,246,0.25)] bg-[rgba(59,130,246,0.06)] mb-5">
            Anexo
          </span>
          <h2
            id="manifesto-heading"
            className="text-4xl md:text-6xl font-semibold text-[#f5f5f5] leading-[1.05] tracking-[-0.02em]"
          >
            Manifiesto{' '}
            <span className="italic font-normal text-gradient">IAhora qué</span>
          </h2>
        </div>

        <div className="mb-14">
          <Quote
            variant="blue"
            text="La ejecución es el eslabón perdido entre las aspiraciones y los resultados."
            cite="Larry Bossidy & Ram Charan"
            source="Execution (2002)"
          />
        </div>

        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-semibold text-[#f5f5f5] leading-snug mb-4">
            Cuatro creencias que están detrás de este espacio.
          </h3>
          <p className="italic text-[rgba(255,255,255,0.5)] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Este manifiesto existe para filtrar con honestidad. Si compartís estas cuatro creencias, probablemente tengamos una conversación interesante por delante.
          </p>
        </div>

        <div className="flex flex-col gap-5 mb-16">
          {creencias.map(({ number, claim, body }) => (
            <article
              key={number}
              className="relative rounded-2xl p-7 md:p-9 border flex gap-6 md:gap-8 card-lift overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.02)',
                borderColor: 'rgba(255,255,255,0.08)',
              }}
            >
              <span
                aria-hidden="true"
                className="text-5xl md:text-6xl font-bold leading-none text-[#3b82f6] select-none flex-shrink-0"
                style={{ fontFamily: "'DM Sans', serif" }}
              >
                {number}
              </span>
              <div className="flex flex-col gap-3 flex-1">
                <p className="text-lg md:text-xl font-semibold text-[#f5f5f5] leading-snug tracking-[-0.01em]">
                  {claim}
                </p>
                <p className="text-sm md:text-base text-[rgba(255,255,255,0.62)] leading-relaxed">
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <p className="text-base md:text-lg text-[rgba(255,255,255,0.75)] leading-relaxed max-w-xl mx-auto mb-8">
            Si estas creencias resuenan, tenemos una conversación pendiente.
          </p>
          <a
            href={TIDYCAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 shadow-[0_0_60px_-15px_rgba(59,130,246,0.8)] group"
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
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
