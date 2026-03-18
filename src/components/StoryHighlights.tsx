import styles from './StoryHighlights.module.css'

export interface StoryHighlightItem {
  id: string
  title: string
}

interface StoryHighlightsProps {
  highlights: StoryHighlightItem[]
  onSelect?: (id: string) => void
}

export function StoryHighlights({ highlights, onSelect }: StoryHighlightsProps) {
  return (
    <div className={styles.wrap} role="navigation" aria-label="Highlights">
      <ul className={styles.list}>
        {highlights.map((h) => (
          <li key={h.id}>
            <button
              type="button"
              className={styles.circle}
              onClick={() => onSelect?.(h.id)}
              aria-label={h.title}
            >
              <span className={styles.ring} />
              <span className={styles.label}>{h.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
