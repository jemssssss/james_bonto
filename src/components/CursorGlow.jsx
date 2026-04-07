import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [cursor, setCursor] = useState({ x: -120, y: -120, active: false })

  useEffect(() => {
    const updateCursor = (event) => {
      const interactive = event.target.closest('a, button')
      setCursor({
        x: event.clientX,
        y: event.clientY,
        active: Boolean(interactive),
      })
    }

    const handleLeave = () => {
      setCursor((current) => ({ ...current, x: -120, y: -120, active: false }))
    }

    window.addEventListener('pointermove', updateCursor)
    window.addEventListener('pointerleave', handleLeave)

    return () => {
      window.removeEventListener('pointermove', updateCursor)
      window.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-30 hidden rounded-full border border-primary/25 bg-primary/10 blur-sm transition-[width,height,transform,opacity] duration-300 ease-expo md:block ${
        cursor.active ? 'h-20 w-20 opacity-100' : 'h-10 w-10 opacity-70'
      }`}
      style={{
        transform: `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)`,
      }}
      aria-hidden="true"
    />
  )
}
