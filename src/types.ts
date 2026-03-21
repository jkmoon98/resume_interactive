export interface Profile {
  name: string
  headline: string
  bio: string
  imageUrl: string
  stats: { label: string; value: number }[]
  links: { label: string; url: string }[]
}

export interface Highlight {
  id: string
  title: string
  icon?: string
}

export type GridTabId = 'experience' | 'projects'

export interface Post {
  id: string
  /** Which top tab this tile appears under */
  gridTab: GridTabId
  title: string
  category: string
  date: string
  summary: string
  imageUrl: string
  context?: string
  action?: string
  impact?: string
  reflection?: string
  tech?: string[]
  links?: { label: string; url: string }[]
}
