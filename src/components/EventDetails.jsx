import eventData from '../eventData.js'
import useReveal from '../useReveal.js'
import Countdown from './Countdown.jsx'

export default function EventDetails() {
  const [ref, visible] = useReveal()

  return (
    <section className={`section reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
      <p className="eyebrow">Save the Date</p>

      <div className="details-grid">
        <div className="detail-card">
          <p className="label">Date</p>
          <p className="value">{eventData.displayDate}</p>
        </div>
        <div className="detail-card">
          <p className="label">Time</p>
          <p className="value">{eventData.displayTime}</p>
        </div>
      </div>

      <Countdown />
    </section>
  )
}
