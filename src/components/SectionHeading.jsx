export function SectionHeading({ eyebrow, title, accent, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.32em] text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="text-4xl font-black uppercase tracking-[-0.04em] text-onSurface sm:text-5xl">
        {title} {accent ? <span className="text-primaryContainer">{accent}</span> : null}
      </h2>
      {description ? (
        <p className="section-copy mt-5 text-sm leading-7 text-onSurfaceVariant sm:text-base">{description}</p>
      ) : null}
    </div>
  )
}
