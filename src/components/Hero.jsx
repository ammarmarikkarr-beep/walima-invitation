import eventData from '../eventData.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-frame">
        <svg className="hero-arch" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 74V38C12 20 26 8 42 8C58 8 72 20 72 38V74"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M22 74V40C22 27 30 18 42 18C54 18 62 27 62 40V74"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
          />
          <circle cx="42" cy="30" r="3" fill="currentColor" />
        </svg>

        <p className="hero-bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>

        <p className="hero-eyebrow">Walima Invitation</p>

        <h1 className="hero-names">
          {eventData.groomName}
          <span className="hero-amp">&amp;</span>
          {eventData.brideName}
        </h1>

        <p className="hero-date">
          {eventData.displayDay}, {eventData.displayDate}
        </p>
      </div>
    </section>
  )
}
