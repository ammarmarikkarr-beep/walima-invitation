import eventData from '../eventData.js'
import useReveal from '../useReveal.js'

export default function Invitation() {
  const [ref, visible] = useReveal()

  return (
    <section className={`section reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
      <p className="eyebrow">With Gratitude to Allah</p>
      <p className="invitation-text">{eventData.invitationMessage}</p>
      <p className="invitation-parents">
        Son of {eventData.groomParents}
        <br />
        &amp;
        <br />
        Daughter of {eventData.brideParents}
      </p>
    </section>
  )
}
