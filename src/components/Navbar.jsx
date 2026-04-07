export function Navbar({ items, activeSection, scrollProgress }) {
  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
        <div
          className="h-full bg-primary transition-[width] duration-200"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      <nav className="fixed inset-x-0 top-4 z-40 px-4 sm:px-6">
        <div className="section-shell glass-panel ghost-border flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-6">
            <a href="#hero" className="font-black uppercase tracking-tight text-onSurface">
              L. BONTO
            </a>
            <a
              href="./resume.pdf"
              download
              className="bg-primaryContainer px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-onPrimary transition duration-300 ease-expo hover:translate-x-[2px] hover:translate-y-[-2px] hover:bg-primary"
            >
              Resume
            </a>
          </div>
          <div className="flex items-center gap-6 overflow-x-auto pb-1">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={`font-mono text-[11px] uppercase tracking-[0.28em] transition-colors duration-300 ${
                  activeSection === item.id ? 'text-primary' : 'text-onSurfaceVariant hover:text-onSurface'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
