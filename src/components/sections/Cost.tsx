const riesgos = [
  'Competidores que adoptan IA con criterio te sacan ventaja — no por ser mejores, por ser más rápidos para aprender.',
  'Perdés meses decidiendo en soledad lo que entre pares se resuelve en semanas.',
  'Los experimentos que no ponés en marcha hoy son la evidencia que no vas a tener el trimestre que viene.',
  'La brecha con quienes ya están haciendo deja de ser lineal. Se vuelve exponencial.',
]

export default function Cost() {
  return (
    <section className="py-24 px-6 relative" aria-labelledby="cost-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(221,132,72,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#dd8448] px-3 py-1.5 rounded-full border border-[rgba(221,132,72,0.25)] bg-[rgba(221,132,72,0.06)] mb-4">
            El costo de no resolver esto
          </span>
          <h2
            id="cost-heading"
            className="text-3xl md:text-5xl font-semibold text-[#f5f5f5] leading-[1.1] tracking-tight"
          >
            Cada mes sin decidir{' '}
            <span className="italic font-normal text-[#dd8448]">es una decisión.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            No actuar no es neutral. Mientras la pregunta queda abierta, el contexto sigue moviéndose — y la brecha se amplía.
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {riesgos.map((r, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-2xl p-5 border card-lift"
              style={{
                background: 'rgba(221,132,72,0.04)',
                borderColor: 'rgba(221,132,72,0.15)',
              }}
            >
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[#dd8448]"
                style={{
                  background: 'rgba(221,132,72,0.12)',
                  border: '1px solid rgba(221,132,72,0.25)',
                }}
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 9v4M12 17h.01" />
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
              </span>
              <p className="text-sm md:text-base text-[rgba(255,255,255,0.72)] leading-relaxed pt-1">
                {r}
              </p>
            </li>
          ))}
        </ul>

        <p className="text-center mt-10 italic text-[rgba(255,255,255,0.5)] text-sm md:text-base">
          Los equipos que ya están usando IA con criterio no van más rápido — van acelerando.
        </p>
      </div>
    </section>
  )
}
