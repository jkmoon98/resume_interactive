import type { Post } from '../types'

import styles from './Grid.module.css'

interface GridProps {
  posts: Post[]
  onPostClick: (post: Post) => void
}

export function Grid({ posts, onPostClick }: GridProps) {
  return (
    <div className={styles.grid} role="list">
      {posts.map((post) => (
        <button
          key={post.id}
          type="button"
          className={styles.tile}
          onClick={() => onPostClick(post)}
          role="listitem"
        >
          <span className={styles.aspect}>
            <img
              src={post.imageUrl}
              alt=""
              className={styles.img}
              loading="lazy"
            />
          </span>
          <span className={styles.overlay}>
            <span className={styles.overlayTitle}>{post.title}</span>
            <span className={styles.overlayCategory}>{post.category}</span>
          </span>
        </button>
      ))}
    </div>
  )
}
