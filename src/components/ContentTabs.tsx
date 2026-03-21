import type { GridTabId } from '../types'

import styles from './ContentTabs.module.css'

const tabs: { id: GridTabId; label: string; icon: React.ReactNode }[] = [
  {
    id: 'experience',
    label: 'Experience',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

interface ContentTabsProps {
  activeTab: GridTabId
  onTabChange: (tab: GridTabId) => void
}

export function ContentTabs({ activeTab, onTabChange }: ContentTabsProps) {
  return (
    <div className={styles.tabs} role="tablist" aria-label="Grid categories">
      {tabs.map(({ id, label, icon }) => (
        <button
          key={id}
          type="button"
          role="tab"
          aria-selected={activeTab === id}
          className={activeTab === id ? styles.tabActive : styles.tab}
          onClick={() => onTabChange(id)}
        >
          {icon}
          <span className={styles.tabLabel}>{label}</span>
        </button>
      ))}
    </div>
  )
}
