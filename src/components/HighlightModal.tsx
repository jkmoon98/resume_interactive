import { useEffect } from 'react'
import styles from './HighlightModal.module.css'

interface HighlightModalProps {
  title: string
  content: React.ReactNode
  onClose: () => void
}

export function HighlightModal({ title, content, onClose }: HighlightModalProps) {
  useEffect(() => {
    document.body.classList.add('modal-open')
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="highlight-title"
    >
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 id="highlight-title" className={styles.title}>
          {title}
        </h2>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  )
}
