import eventData from '../eventData.js'

export default function OpeningOverlay({ opening, onOpen }) {
  return (
    <div className={`opening-overlay ${opening ? 'is-opening' : ''}`}>
      <div className="flap">
        {/* Envelope flap crease, like the folded paper in the reference photo */}
        <svg className="flap-crease" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L50,44 L100,0" stroke="var(--gold)" strokeWidth="0.3" fill="none" />
        </svg>

        <p className="open-bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>

        <div className="open-divider" aria-hidden="true">
          <span className="line" />
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0L12.2 7.8L20 10L12.2 12.2L10 20L7.8 12.2L0 10L7.8 7.8Z" fill="var(--gold)" />
          </svg>
          <span className="line" />
        </div>

        <p className="open-names">
          {eventData.groomName} &amp; {eventData.brideName}
        </p>

        <div className="wax-seal">
          <span>{eventData.groomName.charAt(0)}</span>
        </div>

        <p className="open-title">Walima Invitation</p>

        <p className="open-date">
          {eventData.displayDay}, {eventData.displayDate}
        </p>
        <p className="open-venue">{eventData.venue.name}</p>

        <button type="button" className="open-button" onClick={onOpen}>
          Open Invitation
        </button>

        <svg className="open-chevron" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 21L17 9L30 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="open-hint">Tap to open</p>
      </div>
    </div>
  )
}