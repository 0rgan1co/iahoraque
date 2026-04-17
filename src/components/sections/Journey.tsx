// TODO: reemplazar placeholders de fecha por las reales cuando se confirmen.
const encuentros = [
  {
    number: '01',
    title: 'Tu mapa de partida',
    date: 'Sesión 1',
    action: 'Mapear estado actual: negocio, equipo y uso de IA.',
    result: 'Diagnóstico propio + pregunta prioritaria que guía el ciclo.',
  },
  {
    number: '02',
    title: 'Tu apuesta del ciclo',
    date: 'Sesión 2',
    action: 'Elegir el movimiento clave: de X a Y, con métrica de éxito.',
    result: 'Una apuesta concreta y medible sobre la que se puede operar.',
  },
  {
    number: '03',
    title: 'Tu primer experimento con IA',
    date: 'Sesión 3',
    action: 'Diseñar y lanzar un experimento corto sobre la apuesta.',
    result: 'Experimento en marcha con datos llegando en días, no meses.',
  },
  {
    number: '04',
    title: 'Tu iteración con datos reales',
    date: 'Sesión 4',
    action: 'Traer resultados y aprendizajes a la mesa entre pares.',
    result: 'Experimento iterado: qué funciona, qué no, qué probar distinto.',
  },
  {
    number: '05',
    title: 'Tu plan de integración',
    date: 'Sesión 5',
    action: 'Diseñar cómo lo que funciona entra al día a día del negocio.',
    result: 'Plan concreto con responsables, plazos y recursos.',
  },
  {
    number: '06',
    title: 'Tu roadmap de 90 días',
    date: 'Sesión 6',
    action: 'Consolidar aprendizajes del ciclo y decidir qué sigue.',
    result: 'Roadmap personal para los próximos 90 días.',
  },
]

export default function Journey() {
  return (
    <section className="py-24 px-6 relative" aria-labelledby="journey-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-sm mask-radial opacity-60"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6] px-3 py-1.5 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] pulse-dot" />
            El recorrido
          </span>
          <h2
            id="journey-heading"
            className="text-3xl md:text-5xl font-semibold text-[#f5f5f5] leading-[1.1] tracking-tight"
          >
            Seis encuentros.{' '}
            <span className="text-gradient italic font-normal">Seis entregables.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Cada encuentro termina con algo concreto de valor. Entrás con una pregunta, salís con un entregable que hace avanzar tu negocio.
          </p>
        </div>

        {/* Desktop: tabla transpuesta — columnas = encuentros, filas = Acción / Resultado */}
        <div
          className="hidden lg:block rounded-2xl border overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            borderColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {/* Header de columnas */}
          <div className="grid grid-cols-[140px_repeat(6,minmax(0,1fr))] border-b border-[rgba(255,255,255,0.08)]">
            <div className="py-5 px-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.35)]">
              Encuentro
            </div>
            {encuentros.map(({ number, title, date }) => (
              <div
                key={number}
                className="py-5 px-4 border-l border-[rgba(255,255,255,0.06)] flex flex-col gap-1.5"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-bold text-[#3b82f6]">
                    {number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.35)]">
                    {date}
                  </span>
                </div>
                <span className="text-sm font-semibold text-[#f5f5f5] leading-tight">
                  {title}
                </span>
              </div>
            ))}
          </div>

          {/* Fila: Acción */}
          <div className="grid grid-cols-[140px_repeat(6,minmax(0,1fr))] border-b border-[rgba(255,255,255,0.06)]">
            <div className="py-6 px-5 flex items-start gap-2.5 bg-[rgba(255,255,255,0.015)]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.45)]">
                Acción
              </span>
            </div>
            {encuentros.map(({ number, action }) => (
              <div
                key={number}
                className="py-6 px-4 text-sm text-[rgba(255,255,255,0.65)] leading-relaxed border-l border-[rgba(255,255,255,0.06)]"
              >
                {action}
              </div>
            ))}
          </div>

          {/* Fila: Resultado */}
          <div className="grid grid-cols-[140px_repeat(6,minmax(0,1fr))]">
            <div className="py-6 px-5 flex items-start gap-2.5 bg-[rgba(59,130,246,0.04)]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3b82f6]">
                Te llevás
              </span>
            </div>
            {encuentros.map(({ number, result }) => (
              <div
                key={number}
                className="py-6 px-4 text-sm text-[#f5f5f5] leading-relaxed border-l border-[rgba(255,255,255,0.06)] bg-[rgba(59,130,246,0.03)]"
              >
                {result}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: cards apiladas por encuentro */}
        <div className="lg:hidden flex flex-col gap-3">
          {encuentros.map(({ number, title, date, action, result }) => (
            <div
              key={number}
              className="rounded-2xl p-5 border flex flex-col gap-4 card-lift"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-[#3b82f6] tracking-widest">
                    {number}
                  </span>
                  <h3 className="text-base font-semibold text-[#f5f5f5] leading-snug">
                    {title}
                  </h3>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.4)] flex-shrink-0 mt-1">
                  {date}
                </span>
              </div>

              <div className="flex flex-col gap-2.5 pt-3 border-t border-[rgba(255,255,255,0.06)]">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[rgba(255,255,255,0.4)] mb-1.5">
                    Acción
                  </p>
                  <p className="text-sm text-[rgba(255,255,255,0.65)] leading-relaxed">
                    {action}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#3b82f6] mb-1.5">
                    Te llevás
                  </p>
                  <p className="text-sm text-[#f5f5f5] leading-relaxed">
                    {result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
