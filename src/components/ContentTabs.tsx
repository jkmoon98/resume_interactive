import styles from './ContentTabs.module.css'

export function ContentTabs() {
  return (
    <div className={styles.tabs} role="tablist">
      <button type="button" className={styles.tabActive} role="tab" aria-selected="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
        <span>Posts</span>
      </button>
    </div>
  )
}
