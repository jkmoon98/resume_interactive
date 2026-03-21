/**
 * PROJECTS TAB — Personal apps & repos.
 * Grid images: screenshots in `public/project-*.png` (regenerate with Playwright if you redesign a site).
 */
import type { Post } from '../types'

export const myProjects: Post[] = [
  {
    id: 'proj-gym',
    gridTab: 'projects',
    category: 'Project',
    title: 'Gym tracker',
    date: '2024',
    summary: 'Web app to log and track gym workouts, with optional Firebase sync for signed-in users.',
    imageUrl: '/project-gym.png',
    context: 'Personal tool to record training sessions and stay consistent at the gym.',
    action: 'Built a static front end with JavaScript and HTML; optional Firebase sync for signed-in users—production config is kept local per security practice. Documented API key handling and Firestore security rules in the repo.',
    impact: 'Practical daily-use app with a clear path to secure multi-device sync.',
    tech: ['JavaScript', 'HTML', 'Firebase', 'Firestore'],
    links: [
      { label: 'GitHub', url: 'https://github.com/jkmoon98/gym-tracker' },
      { label: 'Live', url: 'https://gym-tracker-3b7eb.web.app' },
    ],
  },
  {
    id: 'proj-movie',
    gridTab: 'projects',
    category: 'Project',
    title: 'Movie Review Studio',
    date: '2024',
    summary: 'Web app to browse films and write reflections—tagline: “Director commentary, but for your brain.”',
    imageUrl: '/project-movie.png',
    context: 'Personal movie review experience with search, film detail views, and a guided reflection flow.',
    action: 'Built and deployed as a static web app on Firebase Hosting; integrates movie metadata and a focused writing flow.',
    impact: 'Shipped a usable live product with clear UX from discovery to reflection.',
    tech: ['JavaScript', 'HTML', 'Firebase Hosting'],
    links: [
      { label: 'GitHub', url: 'https://github.com/jkmoon98/movie_review' },
      { label: 'Live', url: 'https://movie-review-c5b11.web.app/' },
    ],
  },
  {
    id: 'proj-resume',
    gridTab: 'projects',
    category: 'Project',
    title: 'Interactive resume',
    date: '2025',
    summary: 'Instagram-style portfolio: experience and projects—React, TypeScript, Firebase Hosting.',
    imageUrl: '/project-resume.png',
    context: 'Personal site to present a software engineering background in a familiar mobile layout.',
    action: 'Built with Vite and React; tabbed grids, post modals, and static assets including resume PDF.',
    impact: 'Single deployable site with fast load and clear navigation for recruiters.',
    tech: ['React', 'TypeScript', 'Vite', 'Firebase Hosting'],
    links: [
      { label: 'GitHub', url: 'https://github.com/jkmoon98/resume_interactive' },
      { label: 'Live', url: 'https://jonathan-moon-resume.web.app' },
    ],
  },
  {
    id: 'proj-show',
    gridTab: 'projects',
    category: 'Project',
    title: 'Show tracker',
    date: '2024',
    summary: 'Personal TV show diary with Firebase auth/sync and TMDB search—runs on the free Firebase Spark plan.',
    imageUrl: '/project-show.png',
    context: 'Track what you watch with search powered by The Movie Database API and optional cloud backup.',
    action: 'Static hosting with Firebase Authentication and Firestore; TMDB integration via config. README documents setup with `config.js` (gitignored) and `firebase deploy` for hosting-only deploys.',
    impact: 'Usable show log without paid Firebase features; clear docs for keys and deploy.',
    tech: ['HTML', 'JavaScript', 'Firebase', 'Firestore', 'TMDB API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/jkmoon98/show-tracker' },
      { label: 'Live', url: 'https://show-tracker-f033d.web.app' },
    ],
  },
]
