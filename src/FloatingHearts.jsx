import { useMemo } from 'react'
import styles from './FloatingHearts.module.css'

const HEART_COUNT = 18

export default function FloatingHearts() {
  const hearts = useMemo(() =>
    Array.from({ length: HEART_COUNT }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animDuration: `${6 + Math.random() * 10}s`,
      animDelay: `${Math.random() * 8}s`,
      size: `${10 + Math.random() * 20}px`,
      opacity: 0.15 + Math.random() * 0.25,
    })), [])

  return (
    <div className={styles.container} aria-hidden="true">
      {hearts.map(h => (
        <span
          key={h.id}
          className={styles.heart}
          style={{
            left: h.left,
            fontSize: h.size,
            animationDuration: h.animDuration,
            animationDelay: h.animDelay,
            opacity: h.opacity,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  )
}
