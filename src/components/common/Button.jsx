import { Link } from 'react-router-dom'

const variantClasses = {
  primary: 'bg-royal text-white shadow-sm hover:bg-royal-dark hover:shadow-md',
  secondary: 'bg-secondary text-white shadow-sm hover:brightness-95 hover:shadow-md',
  outline: 'border border-royal text-royal hover:bg-royal hover:text-white',
  outlineLight: 'border border-white/40 text-white hover:bg-white hover:text-royal',
  gold: 'bg-gold text-royal-dark shadow-sm hover:brightness-95 hover:shadow-md',
  ghost: 'text-royal hover:bg-royal/5',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-60 ${
    variantClasses[variant] ?? variantClasses.primary
  } ${sizeClasses[size] ?? sizeClasses.md} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
