export default function Hero() {
  return (
    <section className="hero">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>

    </section>
  )
}