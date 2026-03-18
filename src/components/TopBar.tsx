import styles from './TopBar.module.css'

interface TopBarProps {
  title: string
  onMenuClick?: () => void
}

export function TopBar({ title, onMenuClick }: TopBarProps) {
  return (
    <header className={styles.bar}>
      <span className={styles.back} aria-hidden>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      </span>
      <h1 className={styles.title}>{title}</h1>
      <button
        type="button"
        className={styles.menu}
        onClick={onMenuClick}
        aria-label="Menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>
    </header>
  )
}
