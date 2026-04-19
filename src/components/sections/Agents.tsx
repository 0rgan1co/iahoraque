const agentes = [
  {
    number: '01',
    challenge: 'Falta de visibilidad en tiempo real sobre el negocio',
    hmw: '¿Cómo decidir sobre datos vivos?',
    activity: 'Sesión 1:1',
    agent: 'Agente Obeya Room',
    takeaway:
      'Tu sala de control digital con indicadores, alertas y contexto operando en tiempo real.',
  },
  {
    number: '02',
    challenge: 'Poco retorno sobre el tiempo invertido en reuniones',
    hmw: '¿Cómo convertir reuniones en decisiones?',
    activity: 'Sesión 1:1',
    agent: 'Agente reuBan',
    takeaway:
      'Te acompaña antes (agenda y contexto), durante (captura decisiones) y después (cierra bucles y sigue hasta el resultado).',
  },
  {
    number: '03',
    challenge: 'Falta de método para convertir ideas en experimentos',
    hmw: '¿Cómo pasar de intuición a hipótesis?',
    activity: 'Grupo entre pares',
    agent: 'Agente de Oportunidades',
    takeaway:
      'Detecta señales en tu contexto y diseña experimentos basados en hipótesis, listos para correr.',
  },
  {
    number: '04',
    challenge: 'Falta de tiempo protegido para pensar y decidir',
    hmw: '¿Cómo recuperar foco profundo?',
    activity: 'Sesión 1:1',
    agent: 'Agente de Foco',
    takeaway:
      'Protege tu tiempo, filtra lo que no requiere tu cabeza y te devuelve horas para decidir lo que sí.',
  },
  {
    number: '05',
    challenge: 'Falta de seguimiento consistente en el ciclo comercial',
    hmw: '¿Cómo atender con criterio y velocidad?',
    activity: 'Sesión 1:1',
    agent: 'Agente Comercial',
    takeaway:
      'Califica leads, personaliza respuestas y acompaña la conversión hasta el cierre.',
  },
  {
    number: '06',
    challenge: 'Falta de criterio para evolucionar el portfolio de iniciativas',
    hmw: '¿Cómo decidir qué sostener, soltar y sembrar?',
    activity: 'Grupo entre pares',
    agent: 'Agente EcoCycle',
    takeaway:
      'Mapea tus iniciativas en las 4 fases del ciclo (nacimiento, madurez, destrucción creativa, renovación) y te devuelve una lectura clara del portfolio.',
  },
]

export default function Agents() {
  return (
    <section className="py-24 px-6 relative" aria-labelledby="agents-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-sm mask-radial opacity-50"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6] px-3 py-1.5 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] mb-4">
            De los desafíos a los agentes
          </span>
          <h2
            id="agents-heading"
            className="text-3xl md:text-5xl font-semibold text-[#f5f5f5] leading-[1.1] tracking-tight"
          >
            De los desafíos a{' '}
            <span className="italic font-normal text-gradient">los agentes.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.75)] mt-5 text-base md:text-lg font-medium">
            Un sistema, no una lista.
          </p>
          <p className="text-[rgba(255,255,255,0.55)] mt-3 max-w-2xl mx-auto text-base leading-relaxed">
            Cada desafío real empieza como una pregunta abierta, se trabaja en el formato adecuado, y termina en algo concreto que opera en tu negocio.
          </p>
        </div>

        {/* Desktop: tabla */}
        <div
          className="hidden lg:block rounded-2xl border overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.02)',
            borderColor: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.4)] py-4 px-5 w-[4%]">
                  #
                </th>
                <th className="text-left text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.4)] py-4 px-4 w-[24%]">
                  Desafío
                </th>
                <th className="text-left text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.4)] py-4 px-4 w-[20%]">
                  Pregunta HMW
                </th>
                <th className="text-left text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.4)] py-4 px-4 w-[14%]">
                  Actividad
                </th>
                <th className="text-left text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3b82f6] py-4 px-5 w-[38%]">
                  Take-away
                </th>
              </tr>
            </thead>
            <tbody>
              {agentes.map(({ number, challenge, hmw, activity, agent, takeaway }, i) => (
                <tr
                  key={number}
                  className="align-top"
                  style={{
                    borderTop: i === 0 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <td className="py-6 px-5 text-sm font-bold text-[rgba(59,130,246,0.55)]">
                    {number}
                  </td>
                  <td className="py-6 px-4 text-sm text-[rgba(255,255,255,0.75)] leading-relaxed">
                    {challenge}
                  </td>
                  <td className="py-6 px-4 text-sm italic text-[rgba(255,255,255,0.55)] leading-relaxed">
                    {hmw}
                  </td>
                  <td className="py-6 px-4">
                    <span
                      className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      {activity}
                    </span>
                  </td>
                  <td className="py-6 px-5 border-l border-[rgba(59,130,246,0.12)] bg-[rgba(59,130,246,0.03)]">
                    <p className="text-sm font-semibold text-[#3b82f6] mb-1.5">
                      {agent}
                    </p>
                    <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed">
                      {takeaway}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / tablet: cards apiladas */}
        <div className="lg:hidden flex flex-col gap-3">
          {agentes.map(({ number, challenge, hmw, activity, agent, takeaway }) => (
            <article
              key={number}
              className="rounded-2xl p-6 border flex flex-col gap-4"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-[#3b82f6]">{number}</span>
                  <h4 className="text-base font-semibold text-[#f5f5f5] leading-snug">
                    {challenge}
                  </h4>
                </div>
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.18em] px-2 py-1 rounded-full flex-shrink-0"
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {activity}
                </span>
              </div>

              <p className="text-sm italic text-[rgba(255,255,255,0.55)] leading-relaxed">
                {hmw}
              </p>

              <div className="pt-4 border-t border-[rgba(59,130,246,0.12)] bg-[rgba(59,130,246,0.03)] -mx-6 -mb-6 px-6 pb-6 rounded-b-2xl">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#3b82f6] mb-2 mt-2">
                  Take-away
                </p>
                <p className="text-sm font-semibold text-[#3b82f6] mb-1.5">
                  {agent}
                </p>
                <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed">
                  {takeaway}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
