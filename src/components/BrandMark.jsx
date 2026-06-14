/**
 * BrandMark — HidayaSoft logo mark.
 * Renders the brand icon from public/logo-icon.png.
 */
export default function BrandMark({ className = 'h-10 w-10' }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo-icon.png`}
      className={`${className} object-contain`}
      alt="HidayaSoft"
      loading="eager"
      decoding="async"
    />
  )
}
