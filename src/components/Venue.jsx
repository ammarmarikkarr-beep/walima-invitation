import eventData from '../eventData.js'
import useReveal from '../useReveal.js'

export default function Venue() {
  const [ref, visible] = useReveal()

  return (
    <section className={`section reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
      <p className="eyebrow">The Venue</p>

      <svg className="venue-pin" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 4C13 4 7 10 7 17C7 26 20 36 20 36C20 36 33 26 33 17C33 10 27 4 20 4Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="20" cy="17" r="5" stroke="currentColor" strokeWidth="1.4" />
      </svg>

      <h3 className="venue-name">{eventData.venue.name}</h3>
      <p className="venue-location">{eventData.venue.location}</p>

      <a
        className="maps-button"
        href={eventData.venue.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C7.6 2 4 5.6 4 10C4 15.4 12 22 12 22C12 22 20 15.4 20 10C20 5.6 16.4 2 12 2Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        Open in Google Maps
      </a>
    </section>
  )
}
