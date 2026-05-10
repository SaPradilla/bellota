import FloatingHearts from './FloatingHearts'
import { useTimeTogether } from './useTimeTogether'
import styles from './App.module.css'

const phrases = [
  'Cada segundo a tu lado vale más que mil vidas sin ti.',
  'Contigo el tiempo no pasa — simplemente se vuelve más bonito.',
  'Eres mi lugar favorito en el mundo.',
  'Gracias por elegirme cada día.',
]

function Stat({ value, label }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>{String(value).padStart(2, '0')}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

export default function App() {
  const { totalDays, years, months, days, hours, minutes, seconds } = useTimeTogether()

  const phraseIndex = Math.floor(totalDays / 30) % phrases.length
  const phrase = phrases[phraseIndex]

  return (
    <div className={styles.page}>
      <FloatingHearts />

      <main className={styles.card}>
        <p className={styles.since}>Desde el 20 de diciembre de 2024</p>

        <h1 className={styles.title}>
          Santiago <span className={styles.amp}>&amp;</span> Anlly
        </h1>

        <div className={styles.daysHero}>
          <span className={styles.daysNumber}>{totalDays}</span>
          <span className={styles.daysWord}>días juntos</span>
        </div>

        <div className={styles.statsRow}>
          <Stat value={years} label="años" />
          <div className={styles.dot} />
          <Stat value={months} label="meses" />
          <div className={styles.dot} />
          <Stat value={days} label="días" />
        </div>

        <div className={styles.clock}>
          <Stat value={hours} label="hrs" />
          <span className={styles.colon}>:</span>
          <Stat value={minutes} label="min" />
          <span className={styles.colon}>:</span>
          <Stat value={seconds} label="seg" />
        </div>

        <div className={styles.divider}>
          <span>♥</span>
        </div>

        <blockquote className={styles.quote}>{phrase}</blockquote>

        <p className={styles.footer}>
          Con amor,{' '}
          <em>Santiago</em>
        </p>
      </main>
    </div>
  )
}
