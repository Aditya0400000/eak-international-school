import { Link } from 'react-router-dom'
import { Camera, Globe, Mail, MapPin, Phone, Video } from 'lucide-react'
import Container from '../common/Container'
import Logo from '../common/Logo'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Admissions', to: '/admissions' },
]

const socialLinks = [
  { label: 'Facebook', href: '#', icon: Globe },
  { label: 'Instagram', href: '#', icon: Camera },
  { label: 'YouTube', href: '#', icon: Video },
]

const contactItems = [
  { icon: MapPin, text: '123 Knowledge Avenue, Springfield' },
  { icon: Phone, text: '+91 98765 43210' },
  { icon: Mail, text: 'hello@eakinternational.edu' },
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t-4 border-gold bg-royal text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo tone="light" />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            EAK International School is a creative, premium learning community where every learner is
            welcomed, valued and challenged to grow.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-gold hover:text-royal-dark"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            Quick Links
          </h3>
          <ul className="mt-4 flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-white/80 transition-colors duration-200 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            Reach Us
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {contactItems.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-white/80">
                <Icon size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            School Hours
          </h3>
          <p className="mt-4 text-sm text-white/80">Monday – Friday</p>
          <p className="text-sm text-white/80">8:00 AM – 3:30 PM</p>
          <p className="mt-3 text-sm text-white/70">Admissions office open all weekdays.</p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-sm text-white/70 sm:flex-row">
          <p>© {currentYear} EAK International School. All rights reserved.</p>
          <p>Fictional content created for a frontend assignment.</p>
        </Container>
      </div>
    </footer>
  )
}
