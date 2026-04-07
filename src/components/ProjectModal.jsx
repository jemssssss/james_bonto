export function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end bg-black/70 p-4 backdrop-blur-sm sm:items-center sm:justify-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="ghost-border w-full max-w-3xl bg-surfaceLow shadow-obsidian"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="flex items-center justify-between bg-surfaceHigh px-5 py-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary">{project.category}</p>
            <h3 id="project-modal-title" className="mt-2 text-2xl font-black uppercase tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs uppercase tracking-[0.24em] text-onSurfaceVariant transition-colors hover:text-onSurface"
          >
            Close
          </button>
        </div>
        <div className="grid gap-8 p-5 sm:grid-cols-[1.1fr_0.9fr] sm:p-7">
          <div
            className="min-h-72 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
            aria-hidden="true"
          />
          <div>
            <p className="text-sm leading-7 text-onSurfaceVariant">{project.longDescription}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="bg-secondaryContainer px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-onSecondaryContainer"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <a
                href={project.link}
                className="bg-primaryContainer px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-onPrimary transition duration-300 ease-expo hover:translate-x-[2px] hover:translate-y-[-2px] hover:bg-primary"
              >
                View Case
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
