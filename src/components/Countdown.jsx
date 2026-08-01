import { useEffect, useState } from 'react'
import eventData from '../eventData.js'

function getTimeLeft() {
  const target = new Date(eventData.isoDateTime).getTime()
  const now = Date.now()
  const diff = Math.max(target - now, 0)

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff <= 0,
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Mins', value: time.minutes },
    { label: 'Secs', value: time.seconds },
  ]

  return (
    <div className="countdown" role="timer" aria-live="polite">
      {time.done ? (
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--emerald-deep)' }}>
          The Walima day has arrived!
        </p>
      ) : (
        units.map((u) => (
          <div className="countdown-unit" key={u.label}>
            <span className="num">{String(u.value).padStart(2, '0')}</span>
            <span className="unit-label">{u.label}</span>
          </div>
        ))
      )}
    </div>
  )
}
