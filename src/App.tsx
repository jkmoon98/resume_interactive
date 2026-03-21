import { useState, useCallback, useRef, useMemo, useEffect } from 'react'
import { profile, posts } from './data/resume'
import type { GridTabId } from './types'
import { TopBar } from './components/TopBar'
import { ProfileHeader } from './components/ProfileHeader'
import { ContentTabs } from './components/ContentTabs'
import { Sidebar, type SidebarItemId } from './components/Sidebar'
import { Grid } from './components/Grid'
import { PostModal } from './components/PostModal'
import { HighlightModal } from './components/HighlightModal'
import type { Post } from './types'

import './App.css'

const highlightTitles: Record<Exclude<SidebarItemId, 'home' | 'links'>, string> = {
  experience: 'Experience & Skills',
  education: 'Education',
  beyond: 'Beyond Code',
}

const highlightContent: Record<Exclude<SidebarItemId, 'home' | 'links'>, React.ReactNode> = {
  experience: (
    <>
      <p style={{ marginTop: 0 }}>Software Engineer with 5 years in real-time, safety-critical traffic systems at Econolite. Roles span intern through Software Engineer, with focus on C++/Python, SNMP/MIB, and large codebase modernization.</p>
      <h4 style={{ marginBottom: 6, fontSize: 13, color: 'var(--text-secondary)' }}>Languages & Systems</h4>
      <p style={{ margin: '0 0 12px' }}>C++, Python, Embedded Linux</p>
      <h4 style={{ marginBottom: 6, fontSize: 13, color: 'var(--text-secondary)' }}>Protocols & Domains</h4>
      <p style={{ margin: '0 0 12px' }}>SNMP, MIBs, Real-Time Systems, Traffic Control Systems</p>
      <h4 style={{ marginBottom: 6, fontSize: 13, color: 'var(--text-secondary)' }}>Tooling & Practices</h4>
      <p style={{ margin: 0 }}>Git, CI/CD (Jenkins, CMake), SQL. Unit Testing (Google Test, PyTest). Agile Development, Code Reviews.</p>
    </>
  ),
  education: (
    <p><strong>University of California, Irvine</strong> — June 2020. Bachelor of Science, Computer Science.</p>
  ),
  beyond: (
    <p>
      I&apos;m a big Dodgers fan! Let&apos;s go for that three-peat! :) I&apos;m a big fan of sports. I love to sing. I love to watch TV shows and movies—my favorites are{' '}
      <em>Community</em> and the <em>Lord of the Rings</em> trilogy.
    </p>
  ),
}

export default function App() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  type SidebarModalItemId = Exclude<SidebarItemId, 'home' | 'links'> // experience | education | beyond
  type SidebarModalId = Exclude<SidebarItemId, 'home'> // experience | education | beyond | links

  const [sidebarModal, setSidebarModal] = useState<SidebarModalId | null>(null)
  const [activeGridTab, setActiveGridTab] = useState<GridTabId>('experience')
  const mainContentRef = useRef<HTMLElement>(null)

  const filteredPosts = useMemo(
    () => posts.filter((p) => p.gridTab === activeGridTab),
    [activeGridTab]
  )

  useEffect(() => {
    setSelectedPost(null)
  }, [activeGridTab])

  const currentIndex = selectedPost
    ? filteredPosts.findIndex((p) => p.id === selectedPost.id)
    : -1
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex >= 0 && currentIndex < filteredPosts.length - 1

  const openPost = useCallback((post: Post) => setSelectedPost(post), [])
  const closePost = useCallback(() => setSelectedPost(null), [])
  const goPrev = useCallback(() => {
    if (hasPrev && selectedPost) {
      setSelectedPost(filteredPosts[currentIndex - 1])
    }
  }, [hasPrev, currentIndex, selectedPost, filteredPosts])
  const goNext = useCallback(() => {
    if (hasNext && selectedPost) {
      setSelectedPost(filteredPosts[currentIndex + 1])
    }
  }, [hasNext, currentIndex, selectedPost, filteredPosts])

  const handleSidebarSelect = useCallback((id: SidebarItemId) => {
    if (id === 'home') {
      mainContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    setSidebarModal(id as Exclude<SidebarItemId, 'home'>)
  }, [])

  const highlightTitle =
    sidebarModal === 'links'
      ? 'Links'
      : sidebarModal
        ? highlightTitles[sidebarModal as SidebarModalItemId]
        : null

  const highlightBody =
    sidebarModal === 'links' ? (
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {profile.links.map(({ label, url }) => (
          <li key={label} style={{ marginBottom: 12 }}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>
    ) : sidebarModal && highlightContent[sidebarModal as SidebarModalItemId] ? (
      highlightContent[sidebarModal as SidebarModalItemId]
    ) : null

  return (
    <div className="app-shell">
      <main ref={mainContentRef} className="main-content">
        <TopBar title={profile.name} onMenuClick={() => setSidebarModal('links')} />
        <div className="main-inner">
          <div className="app-header">
            <ProfileHeader profile={profile} />
          </div>
          <ContentTabs activeTab={activeGridTab} onTabChange={setActiveGridTab} />
          <Grid posts={filteredPosts} onPostClick={openPost} />
        </div>
      </main>
      <Sidebar
        activeId={sidebarModal}
        onSelect={handleSidebarSelect}
      />
      <PostModal
        post={selectedPost}
        onClose={closePost}
        onPrev={goPrev}
        onNext={goNext}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />
      {sidebarModal && (
        <HighlightModal
          title={sidebarModal === 'links' ? 'Links' : highlightTitle ?? sidebarModal}
          content={highlightBody}
          onClose={() => setSidebarModal(null)}
        />
      )}
    </div>
  )
}
