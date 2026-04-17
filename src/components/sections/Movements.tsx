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
      width="36"
      height="14"
      viewBox="0 0 36 14"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient id="arrow-gradient" x1="0" y1="0" x2="36" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#dd8448" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M1 7h32M27 1l6 6-6 6"
        stroke="url(#arrow-gradient)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Movements() {
  return (
    <section className="py-24 px-6 relative" aria-labelledby="movements-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-sm mask-radial opacity-35"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6] px-3 py-1.5 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] mb-4">
            Movimientos clave
          </span>
          <h2
            id="movements-heading"
            className="text-3xl md:text-5xl font-semibold text-[#f5f5f5] leading-[1.1] tracking-tight"
          >
            Los cambios{' '}
            <span className="italic font-normal text-gradient">concretos y tangibles.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            No hablamos de transformaciones abstractas. Estos son los movimientos que queremos ver en los primeros ciclos — visibles, medibles, sostenibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {movimientos.map(({ from, to, body }, i) => (
            <article
              key={from}
              className="group relative rounded-2xl p-7 border flex flex-col gap-5 card-lift overflow-hidden"
              style={{
                background:
                  'linear-gradient(145deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.015) 100%)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Glow corner */}
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{ background: 'rgba(59,130,246,0.2)' }}
              />

              <div className="relative flex items-center justify-between gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[rgba(255,255,255,0.35)]">
                  0{i + 1} · Movimiento
                </span>
                <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-transparent" />
              </div>

              <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[rgba(221,132,72,0.85)] mb-1.5">
                    De
                  </span>
                  <span className="text-xl font-semibold text-[rgba(255,255,255,0.42)] line-through decoration-[rgba(221,132,72,0.55)] decoration-[1.5px] underline-offset-[6px]">
                    {from}
                  </span>
                </div>

                <div className="hidden sm:flex items-center pt-4">
                  <Arrow />
                </div>

                <div className="flex flex-col flex-1">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#3b82f6] mb-1.5">
                    A
                  </span>
                  <span className="text-xl font-semibold text-[#f5f5f5] leading-snug tracking-[-0.01em]">
                    {to}
                  </span>
                </div>
              </div>

              <p className="relative text-sm text-[rgba(255,255,255,0.6)] leading-relaxed pt-2 border-t border-[rgba(255,255,255,0.06)]">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
