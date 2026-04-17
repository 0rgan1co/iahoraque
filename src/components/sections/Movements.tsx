const movimientos = [
  {
    from: 'Aspiraciones',
    to: 'Resultados en ciclos cortos',
    body: 'Menos planes teóricos de 12 meses. Más evidencia al final de cada semana. La estrategia se prueba operando, no presentándola.',
  },
  {
    from: 'Multitasking',
    to: 'Foco',
    body: 'Dejar de querer empujar todo al mismo tiempo. Elegir una cosa, terminarla bien, y recién después abrir la siguiente.',
  },
  {
    from: 'Dependencia',
    to: 'Delegación progresiva',
    body: 'Tareas que hoy solo vos podés hacer, mañana las hace un agente, un sistema o tu equipo con criterio. Vos te liberás para lo que solo vos podés hacer.',
  },
  {
    from: 'Fragilidad',
    to: 'Diversificar fuentes de ingresos',
    body: 'Reducir la exposición a un solo cliente, producto o canal. Construir un modelo que aguanta turbulencia — y que aprovecha las que vienen.',
  },
]

function Arrow() {
  return (
    <svg
      width="28"
      height="14"
      viewBox="0 0 28 14"
      fill="none"
      stroke="#3b82f6"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path d="M1 7h24M19 1l6 6-6 6" />
    </svg>
  )
}

export default function Movements() {
  return (
    <section className="py-24 px-6" aria-labelledby="movements-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[rgba(255,255,255,0.4)] mb-3">
            Movimientos clave
          </p>
          <h2
            id="movements-heading"
            className="text-3xl md:text-4xl font-semibold text-[#f5f5f5] leading-snug"
          >
            Los cambios{' '}
            <span className="text-[#3b82f6]">concretos y tangibles.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base leading-relaxed">
            No hablamos de transformaciones abstractas. Estos son los movimientos que queremos ver en los primeros ciclos — visibles, medibles, sostenibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {movimientos.map(({ from, to, body }, i) => (
            <article
              key={from}
              className="rounded-2xl p-7 border flex flex-col gap-5 transition-colors duration-200 hover:border-[rgba(59,130,246,0.25)]"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[rgba(255,255,255,0.35)]">
                  0{i + 1}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3b82f6] px-2.5 py-1 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)]">
                  Movimiento
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.35)] mb-1">
                    De
                  </span>
                  <span className="text-lg font-semibold text-[rgba(255,255,255,0.4)] line-through decoration-[rgba(221,132,72,0.5)] decoration-1 underline-offset-4">
                    {from}
                  </span>
                </div>

                <div className="hidden sm:block">
                  <Arrow />
                </div>

                <div className="flex flex-col flex-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#3b82f6] mb-1">
                    A
                  </span>
                  <span className="text-lg font-semibold text-[#f5f5f5] leading-snug">
                    {to}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed pt-2 border-t border-[rgba(255,255,255,0.06)]">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
