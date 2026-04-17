const encuentros = [
  {
    number: '01',
    title: 'Punto de partida',
    action:
      'Mapear dónde está cada uno: negocio, equipo y uso actual de IA.',
    result:
      'Diagnóstico compartido y la pregunta prioritaria de cada participante.',
  },
  {
    number: '02',
    title: 'Foco',
    action:
      'Elegir el movimiento clave del ciclo — de X a Y — por participante.',
    result:
      'Una apuesta concreta con su métrica de éxito.',
  },
  {
    number: '03',
    title: 'Primer experimento',
    action:
      'Diseñar y lanzar un experimento corto con IA sobre la apuesta elegida.',
    result:
      'Experimento en marcha. Datos en días, no en meses.',
  },
  {
    number: '04',
    title: 'Evidencia',
    action:
      'Traer resultados, datos y aprendizajes sobre la mesa entre pares.',
    result:
      'Qué funcionó, qué no, qué probar distinto. Iteración del experimento.',
  },
  {
    number: '05',
    title: 'Escalar lo que funciona',
    action:
      'Diseñar cómo integrar el aprendizaje al día a día del negocio.',
    result:
      'Plan concreto con responsables y plazos — listo para ejecutar.',
  },
  {
    number: '06',
    title: 'Cierre + próximos pasos',
    action:
      'Consolidar aprendizajes del ciclo y decidir continuidad.',
    result:
      'Roadmap personal para los próximos 90 días.',
  },
]

export default function Journey() {
  return (
    <section className="py-24 px-6" aria-labelledby="journey-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[rgba(255,255,255,0.4)] mb-3">
            El recorrido
          </p>
          <h2
            id="journey-heading"
            className="text-3xl md:text-4xl font-semibold text-[#f5f5f5] leading-snug"
          >
            Seis encuentros.{' '}
            <span className="text-[#3b82f6]">Acción y evidencia.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base leading-relaxed">
            Cada encuentro tiene una acción concreta y un resultado al final. Nada de sesiones abiertas: entrás con una pregunta, salís con algo tangible.
          </p>
        </div>

        {/* Desktop: tabla */}
        <div
          className="hidden md:block rounded-2xl border overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.02)',
            borderColor: 'rgba(255,255,255,0.08)',
          }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left">
                <th className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.4)] py-4 px-6 w-[5%]">
                  #
                </th>
                <th className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.4)] py-4 px-4 w-[22%]">
                  Encuentro
                </th>
                <th className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.4)] py-4 px-4 w-[38%]">
                  Acción
                </th>
                <th className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3b82f6] py-4 px-4 pr-6 w-[35%]">
                  Resultado
                </th>
              </tr>
            </thead>
            <tbody>
              {encuentros.map(({ number, title, action, result }, i) => (
                <tr
                  key={number}
                  className="align-top"
                  style={{
                    borderTop:
                      i === 0 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <td className="py-6 px-6 text-sm font-bold text-[rgba(59,130,246,0.55)]">
                    {number}
                  </td>
                  <td className="py-6 px-4 text-sm font-semibold text-[#f5f5f5]">
                    {title}
                  </td>
                  <td className="py-6 px-4 text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
                    {action}
                  </td>
                  <td className="py-6 px-4 pr-6 text-sm text-[rgba(255,255,255,0.85)] leading-relaxed">
                    {result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: cards apiladas */}
        <div className="md:hidden flex flex-col gap-3">
          {encuentros.map(({ number, title, action, result }) => (
            <div
              key={number}
              className="rounded-2xl p-5 border flex flex-col gap-3"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[#3b82f6]">
                  {number}
                </span>
                <h3 className="text-base font-semibold text-[#f5f5f5]">
                  {title}
                </h3>
              </div>
              <div className="flex flex-col gap-2.5 pt-2 border-t border-[rgba(255,255,255,0.06)]">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.4)] mb-1">
                    Acción
                  </p>
                  <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
                    {action}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#3b82f6] mb-1">
                    Resultado
                  </p>
                  <p className="text-sm text-[rgba(255,255,255,0.85)] leading-relaxed">
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
