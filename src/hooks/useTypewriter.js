import { useEffect, useState } from 'react'

export function useTypewriter(lines, speed = 26) {
  const [visibleLines, setVisibleLines] = useState([''])
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let lineIndex = 0
    let charIndex = 0
    let timer

    const tick = () => {
      if (lineIndex >= lines.length) {
        setIsComplete(true)
        return
      }

      setVisibleLines((current) => {
        const next = [...current]
        next[lineIndex] = lines[lineIndex].slice(0, charIndex + 1)
        return next
      })

      charIndex += 1

      if (charIndex > lines[lineIndex].length) {
        lineIndex += 1
        charIndex = 0
        setVisibleLines((current) => [...current, ''])
      }

      timer = window.setTimeout(tick, speed)
    }

    setVisibleLines([''])
    setIsComplete(false)
    timer = window.setTimeout(tick, 350)

    return () => window.clearTimeout(timer)
  }, [lines, speed])

  return { visibleLines, isComplete }
}
