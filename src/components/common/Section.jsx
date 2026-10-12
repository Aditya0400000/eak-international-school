const toneClasses = {
  light: 'bg-surface',
  white: 'bg-white',
  royal: 'bg-royal text-white',
}

export default function Section({ as: Tag = 'section', tone = 'white', className = '', children, ...props }) {
  return (
    <Tag className={`py-16 sm:py-20 lg:py-24 ${toneClasses[tone] ?? ''} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
