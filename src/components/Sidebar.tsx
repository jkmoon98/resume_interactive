import styles from './Sidebar.module.css'

export type SidebarItemId = 'home' | 'experience' | 'education' | 'beyond' | 'links'

interface SidebarItem {
  id: SidebarItemId
  label: string
  icon: React.ReactNode
}

const items: SidebarItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 'education',
    label: 'Education',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: 'beyond',
    label: 'Beyond Code',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    id: 'links',
    label: 'Links',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
]

interface SidebarProps {
  activeId: SidebarItemId | null
  onSelect: (id: SidebarItemId) => void
}

export function Sidebar({ activeId, onSelect }: SidebarProps) {
  const handleSelect = (id: SidebarItemId) => {
    onSelect(id)
  }

  return (
    <aside className={styles.sidebar} aria-label="Navigation">
      <nav className={styles.nav}>
        {items.map(({ id, label, icon }) =>
          id === 'home' ? (
            <span key={id} className={`${styles.item} ${styles.itemIconOnly}`} aria-hidden>
              <span className={styles.icon}>{icon}</span>
            </span>
          ) : (
            <button
              key={id}
              type="button"
              className={activeId === id ? styles.itemActive : styles.item}
              onClick={() => handleSelect(id)}
              title={label}
              aria-label={label}
            >
              <span className={styles.icon}>{icon}</span>
              <span className={styles.label}>{label}</span>
            </button>
          )
        )}
      </nav>
    </aside>
  )
}
