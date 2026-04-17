const impactos = [
  {
    number: '01',
    title: 'Velocidad de aprendizaje',
    body:
      'Organizaciones que trabajan en ciclos cortos, aprenden en iteraciones y adaptan dirección sin perder momentum.',
  },
  {
    number: '02',
    title: 'Autonomía operativa',
    body:
      'Unidades de negocio que ganan eficiencia, diversifican ingresos y remueven las barreras que frenaban la colaboración.',
  },
  {
    number: '03',
    title: 'Soluciones con sentido',
    body:
      'Respuestas creativas que ponen en el centro el respeto por las personas y el planeta — no como marketing, como método.',
  },
]

export default function Metrics() {
  return (
    <section className="py-24 px-6" aria-labelledby="impacto-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[rgba(255,255,255,0.4)] mb-3">
            El impacto que nos mueve
          </p>
          <h2
            id="impacto-heading"
            className="text-3xl md:text-4xl font-semibold text-[#f5f5f5] leading-snug"
          >
            El cambio que{' '}
            <span className="text-[#3b82f6]">perseguimos.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base leading-relaxed">
            No trabajamos por métricas de vanidad. Trabajamos porque creemos que organizaciones más rápidas, más autónomas y más conectadas hacen mejores decisiones — para sí mismas, para su gente y para el resto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {impactos.map(({ number, title, body }) => (
            <div
              key={number}
              className="rounded-2xl p-7 border flex flex-col gap-5"
              style={{
                background: 'rgba(59, 130, 246, 0.04)',
                borderColor: 'rgba(59, 130, 246, 0.15)',
              }}
            >
              <span className="text-3xl font-bold text-[#3b82f6] select-none">
                {number}
              </span>
              <div>
                <h3 className="text-base font-semibold text-[#f5f5f5] mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
