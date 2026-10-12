export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className = '',
}) {
  const isDark = tone === 'dark'
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
            isDark ? 'text-gold' : 'text-gold-deep'
          }`}
        >
          {eyebrow}
        </span>
      )}

      {title && (
        <h2 className={`font-heading text-3xl font-semibold sm:text-4xl ${isDark ? 'text-white' : 'text-royal'}`}>
          {title}
        </h2>
      )}

      <span className="h-1 w-12 rounded-full bg-gold" aria-hidden="true" />

      {description && (
        <p className={`max-w-2xl text-base leading-relaxed ${isDark ? 'text-white/80' : 'text-ink-soft'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
