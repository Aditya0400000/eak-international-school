const toneClasses = {
  white: 'bg-white',
  surface: 'bg-surface',
  royal: 'bg-royal text-white',
}

export default function Card({
  as: Tag = 'article',
  tone = 'white',
  interactive = false,
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      className={`rounded-card border border-royal/10 p-6 shadow-soft transition duration-200 ${
        toneClasses[tone] ?? toneClasses.white
      } ${interactive ? 'hover:-translate-y-1 hover:border-royal/20 hover:shadow-lift' : ''} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
