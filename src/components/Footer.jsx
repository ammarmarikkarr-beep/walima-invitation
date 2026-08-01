import eventData from '../eventData.js'

export default function Footer() {
  return (
    <footer className="footer">
      <svg className="footer-star" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 0L20.7 13.3L34 17L20.7 20.7L17 34L13.3 20.7L0 17L13.3 13.3Z"
          fill="var(--gold)"
        />
      </svg>
      <p className="footer-note">{eventData.footerNote}</p>
      <p className="footer-names">
        {eventData.groomName} &amp; {eventData.brideName}
      </p>
    </footer>
  )
}
