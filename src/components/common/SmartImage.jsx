import { useState } from 'react'
import fallbackImage from '../../assets/images/fallback.svg'

export default function SmartImage({ src, alt = '', fallbackSrc = fallbackImage, className = '', ...props }) {
  const [failed, setFailed] = useState(false)
  const resolvedSrc = !failed && src ? src : fallbackSrc

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      {...props}
    />
  )
}
