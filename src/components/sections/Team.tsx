type Person = {
  name: string
  role: string
  quote: string
  paragraphs: string[]
  credentials: string[]
  link: { href: string; label: string }
  initials: string
}

const people: Person[] = [
  {
    name: 'Gaël Thomé',
    role: 'Co-creador · Fundador de Utópica',
    quote:
      'El crecimiento sostenible no se trata de hacer más, sino de hacer menos y mejor.',
    paragraphs: [
      'Co-fundé varias empresas B2B y escalé Multiplica — duplicando el tamaño año tras año durante más de una década, liderando un equipo de 400+ personas y con clientes como Telcel, Coppel y BBVA.',
      'Viví cada uno de los problemas que resolvemos acá: el mensaje que no diferencia, el pipeline que depende de referidos, el equipo que no vende como el fundador.',
      'Hoy integro IA en procesos comerciales y organizacionales para que los fundadores dejen de ser el cuello de botella de su propia empresa.',
    ],
    credentials: [
      '10+ años de experiencia en crecimiento B2B',
      '2× crecimiento anual sostenido en Multiplica',
      '400+ personas lideradas',
      'Multilingüe: FR · PT · ES · EN',
    ],
    link: { href: 'https://www.linkedin.com/in/gaelthome/', label: 'LinkedIn' },
    initials: 'GT',
  },
  {
    name: 'Jorge Roldán',
    role: 'Agente de cambio organizacional',
    quote:
      'Las organizaciones no cambian con slides. Cambian cuando aparecen las preguntas que se venían evitando.',
    paragraphs: [
      'Acompaño a equipos y fundadores a convertir preguntas abiertas en experimentos que operan. Trabajo en la intersección de producto, organización y criterio.',
      'Diseño sistemas de aprendizaje y decisión que sostienen el cambio. Prefiero los ciclos cortos con evidencia sobre la mesa antes que los planes de 18 meses que nadie lee.',
      'Con IAhora qué pongo esa experiencia al servicio de decisores que quieren dejar de pensar solos.',
    ],
    credentials: [
      'Diseño de sistemas de aprendizaje y decisión',
      'Integración de IA en procesos organizacionales',
      'Experimentación por ciclos cortos',
      'Acompañamiento a CEOs y Founders',
    ],
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
          {people.map(({ name, role, quote, paragraphs, credentials, link, initials }) => (
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
                  <h4 className="text-lg font-semibold text-[#f5f5f5] leading-snug">
                    {name}
                  </h4>
                  <p className="text-xs text-[#3b82f6] font-medium">
                    {role}
                  </p>
                </div>
              </div>

              {/* Quote personal */}
              <blockquote
                className="text-sm md:text-base italic text-[#f5f5f5] leading-snug pl-4 border-l-2 border-[#3b82f6]"
              >
                &ldquo;{quote}&rdquo;
              </blockquote>

              {/* Bio: 3 párrafos cortos */}
              <div className="flex flex-col gap-3">
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-sm text-[rgba(255,255,255,0.65)] leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Credenciales / highlights */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.08)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.45)] mb-3">
                  Highlights
                </p>
                <ul className="flex flex-col gap-1.5">
                  {credentials.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-xs md:text-sm text-[rgba(255,255,255,0.62)] leading-relaxed"
                    >
                      <span className="text-[#3b82f6] flex-shrink-0 mt-1" aria-hidden="true">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link */}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3b82f6] hover:text-[#60a5fa] transition-colors mt-auto w-fit"
              >
                Conecta en {link.label}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        <p className="text-center italic text-[rgba(255,255,255,0.55)] mt-12 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          No hablamos de teoría. Hablamos de lo que funciona porque lo probamos primero con nosotros.
        </p>
      </div>
    </section>
  )
}
