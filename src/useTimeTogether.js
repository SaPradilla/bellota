import { useState, useEffect } from 'react'

// Medianoche del 20 dic 2024 en Colombia (UTC-5) = 05:00 UTC
const START_DATE = new Date('2024-12-20T05:00:00Z')

function calcTime() {
  const now = new Date()
  const diff = now - START_DATE

  const totalSeconds = Math.floor(diff / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const totalHours = Math.floor(totalMinutes / 60)
  const totalDays = Math.floor(totalHours / 24)

  const years = Math.floor(totalDays / 365)
  const months = Math.floor((totalDays % 365) / 30)
  const days = totalDays % 30
  const hours = totalHours % 24
  const minutes = totalMinutes % 60
  const seconds = totalSeconds % 60

  return { totalDays, years, months, days, hours, minutes, seconds }
}

export function useTimeTogether() {
  const [time, setTime] = useState(calcTime)

  useEffect(() => {
    const id = setInterval(() => setTime(calcTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return time
}
