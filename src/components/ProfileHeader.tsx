import type { Profile } from '../types'

import styles from './ProfileHeader.module.css'

interface ProfileHeaderProps {
  profile: Profile
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.avatarWrap}>
          <img
            src={profile.imageUrl}
            alt=""
            className={styles.avatar}
            width={88}
            height={88}
          />
        </div>
        <ul className={styles.stats} aria-label="Profile stats">
          {profile.stats.map(({ label, value }) => (
            <li key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.desc}>
        <h1 className={styles.name}>{profile.name}</h1>
        {profile.headline && <p className={styles.headline}>{profile.headline}</p>}
        <p className={styles.bio}>{profile.bio}</p>
        {profile.links[0] && (
          <a href={profile.links[0].url} target="_blank" rel="noopener noreferrer" className={styles.profileLink}>
            {profile.links[0].label}
          </a>
        )}
      </div>
      <div className={styles.actions}>
        <a
          href={profile.links.find((l) => l.label === 'Resume')?.url ?? '/resume.pdf'}
          className={styles.btnPrimary}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a href={profile.links.find(l => l.label === 'Email')?.url ?? '#'} className={styles.btnSecondary}>
          Message
        </a>
        <a href={profile.links.find(l => l.label === 'LinkedIn')?.url ?? '#'} className={styles.btnSecondary}>
          Contact
        </a>
      </div>
    </header>
  )
}
