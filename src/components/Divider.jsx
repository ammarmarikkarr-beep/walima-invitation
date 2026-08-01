export default function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span className="line" />
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 0L12.2 7.8L20 10L12.2 12.2L10 20L7.8 12.2L0 10L7.8 7.8Z"
          fill="var(--gold)"
        />
      </svg>
      <span className="line" />
    </div>
  )
}
