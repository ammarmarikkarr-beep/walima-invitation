import { useState } from 'react'
import OpeningOverlay from './components/OpeningOverlay.jsx'
import Hero from './components/Hero.jsx'
import Invitation from './components/Invitation.jsx'
import EventDetails from './components/EventDetails.jsx'
import Venue from './components/Venue.jsx'
import IslamicSection from './components/IslamicSection.jsx'
import Footer from './components/Footer.jsx'
import Divider from './components/Divider.jsx'

export default function App() {
  const [entered, setEntered] = useState(false)
  const [opening, setOpening] = useState(false)

  function handleOpen() {
    setOpening(true)
    // Match the CSS flap transition (1.2s) before unmounting the overlay.
    setTimeout(() => setEntered(true), 1250)
  }

  return (
    <div className="page-shell">
      {!entered && <OpeningOverlay opening={opening} onOpen={handleOpen} />}

      <div className="card">
        <div className="geo-bg" />

        <Hero />
        <Divider />
        <Invitation />
        <Divider />
        <EventDetails />
        <Divider />
        <Venue />

        <IslamicSection />

        <Footer />
      </div>
    </div>
  )
}