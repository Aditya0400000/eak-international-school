import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

export default function Logo({ tone = 'default', className = '' }) {
  const isLight = tone === 'light'

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="EAK International School home">
      <span
        className={`grid h-10 w-10 place-items-center rounded-xl ${
          isLight ? 'bg-white/10 text-gold' : 'bg-royal text-white'
        }`}
      >
        <GraduationCap size={22} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-heading text-base font-semibold ${isLight ? 'text-white' : 'text-royal'}`}>EAK</span>
        <span
          className={`text-[11px] font-medium uppercase tracking-[0.14em] ${
            isLight ? 'text-gold' : 'text-gold-deep'
          }`}
        >
          International School
        </span>
      </span>
    </Link>
  )
}
