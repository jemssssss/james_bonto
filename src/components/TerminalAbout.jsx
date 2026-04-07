import { useTypewriter } from '../hooks/useTypewriter'

const terminalLines = [
  'class Engineer {',
  '  constructor() {',
  '    this.intro = "Electronics engineer building clean systems from firmware to frontend."; ',
  '    this.interests = ["embedded systems", "IoT", "human-centered interfaces"];',
  '    this.traits = ["diligent", "critical thinker", "open-minded", "calm under pressure"];',
  '    this.hobbies = ["video editing", "gaming", "debugging side projects"];',
  '  }',
  '}',
]

export function TerminalAbout() {
  const { visibleLines, isComplete } = useTypewriter(terminalLines)

  return (
    <div className="overflow-hidden bg-surfaceHighest shadow-obsidian">
      <div className="ghost-border flex items-center justify-between bg-surfaceHigh px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 bg-red-500/50" />
          <span className="h-3 w-3 bg-amber-400/50" />
          <span className="h-3 w-3 bg-emerald-400/50" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-onSurfaceVariant">
          bio.sys / bash / 80x24
        </span>
      </div>
      <div className="min-h-[25rem] bg-[linear-gradient(180deg,rgba(28,27,27,0.4),rgba(19,19,19,1))] p-6 sm:p-8">
        <div className="space-y-2 font-mono text-sm leading-7 text-primary sm:text-base">
          {visibleLines.map((line, index) => (
            <div key={`${index}-${line}`} className="flex gap-4">
              <span className="w-7 shrink-0 text-onSurfaceVariant/45">{String(index + 1).padStart(2, '0')}</span>
              <span className="whitespace-pre-wrap">{line}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2 font-mono text-primary">
          <span>$</span>
          <span className={`h-5 w-2 bg-primary ${isComplete ? 'animate-pulse' : ''}`} />
        </div>
      </div>
    </div>
  )
}
