import eventData from '../eventData.js'
import useReveal from '../useReveal.js'

export default function IslamicSection() {
  const [ref, visible] = useReveal()

  return (
    <section className={`islamic-section reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
      <div className="geo-bg" />
      <p className="eyebrow" style={{ color: 'var(--gold-light)', opacity: 0.9 }}>
        A Blessing
      </p>

      <p className="dua-arabic">{eventData.arabicDua}</p>
      <p className="dua-translation">{eventData.duaTranslation}</p>

      <p className="quran-verse">
        &ldquo;{eventData.quranVerse}&rdquo;
        <span className="quran-ref">{eventData.quranReference}</span>
      </p>
    </section>
  )
}
