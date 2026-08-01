import eventData from '../eventData.js'

export default function OpeningOverlay({ opening, onOpen }) {
  return (
    <div className={`opening-overlay ${opening ? 'is-opening' : ''}`}>
      <div className="open-content">
        <p className="open-bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>

        <svg className="open-star" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M28 0L34 22L56 28L34 34L28 56L22 34L0 28L22 22Z"
            stroke="#e8cd82"
            strokeWidth="1"
          />
        </svg>

        <p className="open-title">You are invited to the Walima of</p>
        <p className="open-names">
          {eventData.groomName} &amp; {eventData.brideName}
        </p>

        <button type="button" className="open-button" onClick={onOpen}>
          Open Invitation
        </button>
      </div>

      <div className="door left" />
      <div className="door right" />
    </div>
  )
}
