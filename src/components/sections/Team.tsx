type Person = {
  name: string
  role: string
  body: string
  link?: { href: string; label: string }
  initials: string
}

const people: Person[] = [
  {
    name: 'Gaël Thomé',
    role: 'Co-creador · Fundador de Utópica',
    body: 'Co-fundó varias empresas B2B y escaló una. Vivió en primera persona cada uno de estos problemas antes de ayudar a otros a resolverlos. Hoy acompaña a fundadores a instalar el sistema comercial que les permite crecer sin ser el cuello de botella.',
    link: { href: 'https://utopica.net/equipo', label: 'Conocer más' },
    initials: 'GT',
  },
  {
    name: 'Jorge Roldán',
    role: 'Agente de cambio organizacional',
    body: 'Acompaña a equipos y fundadores a convertir preguntas abiertas en experimentos que operan. Trabaja en la intersección de producto, organización y criterio, diseñando los sistemas de aprendizaje y decisión que sostienen el cambio.',
    link: { href: 'https://www.linkedin.com/in/roldanjorgex/', label: 'LinkedIn' },
    initials: 'JR',
  },
]

export default function Team() {
  return (
    <section className="py-24 px-6 relative" aria-labelledby="team-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot mask-radial opacity-35"
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6] px-3 py-1.5 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] mb-4">
            Quién está detrás
          </span>
          <h2
            id="team-heading"
            className="text-3xl md:text-5xl font-semibold text-[#f5f5f5] leading-[1.1] tracking-tight"
          >
            Dos decisores{' '}
            <span className="italic font-normal text-gradient">en la misma sala.</span>
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            No somos consultores. Somos pares que viven los mismos problemas y decidieron construir un espacio para pensarlos juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {people.map(({ name, role, body, link, initials }) => (
            <article
              key={name}
              className="relative rounded-2xl p-7 md:p-8 border flex flex-col gap-5 card-lift overflow-hidden backdrop-blur-sm"
              style={{
                background:
                  'linear-gradient(145deg, rgba(59,130,246,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  aria-hidden="true"
                  className="w-14 h-14 rounded-full flex items-center justify-center text-base font-bold text-[#3b82f6] flex-shrink-0"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.06) 100%)',
                    border: '1px solid rgba(59,130,246,0.25)',
                  }}
                >
                  {initials}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-[#f5f5f5] leading-snug">
                    {name}
                  </h3>
                  <p className="text-xs text-[#3b82f6] font-medium">
                    {role}
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-[rgba(255,255,255,0.65)] leading-relaxed">
                {body}
              </p>

              {link && (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3b82f6] hover:text-[#60a5fa] transition-colors mt-auto w-fit"
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </a>
              )}
            </article>
          ))}
        </div>

        <p className="text-center italic text-[rgba(255,255,255,0.5)] mt-10 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          No hablamos de teoría. Hablamos de lo que funciona porque lo probamos primero con nosotros.
        </p>
      </div>
    </section>
  )
}
