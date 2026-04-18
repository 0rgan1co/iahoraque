type QuoteProps = {
  text: string
  cite: string
  source?: string
  variant?: 'blue' | 'amber'
}

const palette = {
  blue: {
    border: 'rgba(59, 130, 246, 0.5)',
    accent: '#3b82f6',
    bg: 'rgba(59, 130, 246, 0.04)',
  },
  amber: {
    border: 'rgba(221, 132, 72, 0.5)',
    accent: '#dd8448',
    bg: 'rgba(221, 132, 72, 0.04)',
  },
}

export default function Quote({ text, cite, source, variant = 'blue' }: QuoteProps) {
  const c = palette[variant]
  return (
    <figure
      className="relative rounded-2xl p-7 md:p-9 border-l-[3px] border"
      style={{
        background: c.bg,
        borderLeftColor: c.accent,
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      <blockquote>
        <p className="text-lg md:text-xl italic text-[#f5f5f5] leading-relaxed tracking-[-0.005em]">
          &ldquo;{text}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 text-xs">
        <span
          className="w-6 h-px"
          style={{ background: c.accent }}
          aria-hidden="true"
        />
        <cite className="not-italic text-[rgba(255,255,255,0.65)] font-medium">
          {cite}
          {source && (
            <>
              {', '}
              <span className="italic text-[rgba(255,255,255,0.5)]">{source}</span>
            </>
          )}
        </cite>
      </figcaption>
    </figure>
  )
}
