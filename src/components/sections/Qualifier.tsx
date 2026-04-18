const esParaVos = [
  'Sos CEO, Founder o líder con responsabilidad real sobre el negocio.',
  'Sentís la soledad del que decide y valorás pensar entre pares.',
  'Querés pasar de las ideas a las acciones en ciclos cortos.',
  'Estás dispuesto a poner evidencia —tuya y del grupo— sobre la mesa.',
  'Preferís traer preguntas abiertas antes que certezas ensayadas.',
]

const noEsParaVos = [
  'Buscás una consultoría tradicional con un plan de 12 meses.',
  'Necesitás un único proveedor que te haga el trabajo puerta a puerta.',
  'Esperás resultados en dos semanas sin involucrarte.',
  'No estás dispuesto a compartir contexto real entre pares.',
  'Todavía no tenés decisión final sobre lo que se prueba y se escala.',
]

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3b82f6"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flex-shrink-0 mt-0.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dd8448"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flex-shrink-0 mt-0.5"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

export default function Qualifier() {
  return (
    <section className="py-24 px-6 relative" aria-labelledby="qualifier-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot mask-radial opacity-40"
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6] px-3 py-1.5 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] mb-4">
            Para quién es
          </span>
          <h2
            id="qualifier-heading"
            className="text-3xl md:text-5xl font-semibold text-[#f5f5f5] leading-[1.1] tracking-tight"
          >
            Filtremos juntos,{' '}
            <span className="italic font-normal text-gradient">sin vueltas.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Este espacio no es para todos. Mejor decirlo ahora: si te encontrás en la columna de la izquierda, tenemos mucho de qué hablar. Si en la derecha, te ahorramos una hora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Es para vos */}
          <div
            className="rounded-2xl p-7 md:p-8 border flex flex-col gap-5"
            style={{
              background: 'rgba(59,130,246,0.04)',
              borderColor: 'rgba(59,130,246,0.18)',
            }}
          >
            <div className="flex items-center gap-3 pb-4 border-b border-[rgba(59,130,246,0.15)]">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(59,130,246,0.12)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#f5f5f5]">
                Es para vos si…
              </h3>
            </div>
            <ul className="flex flex-col gap-3.5">
              {esParaVos.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm md:text-base text-[rgba(255,255,255,0.75)] leading-relaxed"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* No es para vos */}
          <div
            className="rounded-2xl p-7 md:p-8 border flex flex-col gap-5"
            style={{
              background: 'rgba(221,132,72,0.04)',
              borderColor: 'rgba(221,132,72,0.18)',
            }}
          >
            <div className="flex items-center gap-3 pb-4 border-b border-[rgba(221,132,72,0.15)]">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(221,132,72,0.12)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dd8448" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#f5f5f5]">
                No es para vos si…
              </h3>
            </div>
            <ul className="flex flex-col gap-3.5">
              {noEsParaVos.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm md:text-base text-[rgba(255,255,255,0.6)] leading-relaxed"
                >
                  <XIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
