import { useEffect, useCallback } from 'react'
import type { Post } from '../types'

import styles from './PostModal.module.css'

interface PostModalProps {
  post: Post | null
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
  hasPrev?: boolean
  hasNext?: boolean
}

export function PostModal({
  post,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: PostModalProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!post) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') hasPrev && onPrev?.()
      if (e.key === 'ArrowRight') hasNext && onNext?.()
    },
    [post, onClose, onPrev, onNext, hasPrev, hasNext]
  )

  useEffect(() => {
    if (post) {
      document.body.classList.add('modal-open')
      window.addEventListener('keydown', handleKey)
    }
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKey)
    }
  }, [post, handleKey])

  if (!post) return null

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={styles.panel}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {hasPrev && (
          <button
            type="button"
            className={styles.arrowLeft}
            onClick={onPrev}
            aria-label="Previous"
          >
            ‹
          </button>
        )}
        {hasNext && (
          <button
            type="button"
            className={styles.arrowRight}
            onClick={onNext}
            aria-label="Next"
          >
            ›
          </button>
        )}

        <div className={styles.layout}>
          <div className={styles.media}>
            <img
              src={post.imageUrl}
              alt=""
              className={styles.mediaImg}
            />
          </div>
          <div className={styles.content}>
            <h2 id="modal-title" className={styles.title}>
              {post.title}
            </h2>
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.date}>{post.date}</span>
            </div>
            <p className={styles.summary}>{post.summary}</p>
            <div className={styles.body}>
              {post.context && (
                <section>
                  <h3 className={styles.sectionTitle}>Context</h3>
                  <p>{post.context}</p>
                </section>
              )}
              {post.action && (
                <section>
                  <h3 className={styles.sectionTitle}>Action</h3>
                  <p>{post.action}</p>
                </section>
              )}
              {post.impact && (
                <section>
                  <h3 className={styles.sectionTitle}>Impact</h3>
                  <p>{post.impact}</p>
                </section>
              )}
              {post.reflection && (
                <section>
                  <h3 className={styles.sectionTitle}>Reflection</h3>
                  <p>{post.reflection}</p>
                </section>
              )}
            </div>
            {post.tech && post.tech.length > 0 && (
              <div className={styles.tech}>
                {post.tech.map((t) => (
                  <span key={t} className={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>
            )}
            {post.links && post.links.length > 0 && (
              <ul className={styles.links}>
                {post.links.map(({ label, url }) => (
                  <li key={label}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
