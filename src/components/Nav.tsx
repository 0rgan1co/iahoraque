const TIDYCAL_URL = 'https://tidycal.com/roldanjorgex'

const links = [
  { href: '#problem-heading', label: 'Problema' },
  { href: '#propuesta-heading', label: 'Propuesta' },
  { href: '#actividades-heading', label: 'Cómo trabajamos' },
  { href: '#agents-heading', label: 'Agentes' },
  { href: '#manifiesto', label: 'Manifiesto' },
]

export default function Nav() {
  return (
    <nav
      aria-label="Navegación principal"
      className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(255,255,255,0.06)]"
      style={{
        background: 'rgba(7, 7, 9, 0.72)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <a
          href="#"
          className="flex items-baseline gap-1.5 text-sm font-semibold tracking-tight text-[#f5f5f5] hover:opacity-90 transition-opacity"
          aria-label="IAhora qué — inicio"
        >
          <span className="text-[#3b82f6] font-bold">IA</span>
          <span>hora qué</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-xs font-medium text-[rgba(255,255,255,0.55)] hover:text-[#f5f5f5] px-3 py-1.5 rounded-full hover:bg-[rgba(255,255,255,0.04)] transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={TIDYCAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-[1.03] shadow-[0_0_20px_-8px_rgba(59,130,246,0.7)]"
        >
          Agendar
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
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </nav>
  )
}
