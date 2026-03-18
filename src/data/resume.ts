import type { Profile, Post } from '../types'

export const profile: Profile = {
  name: 'Jonathan Moon',
  headline: 'Software Engineer',
  bio: '5 years of experience in real-time, safety-critical traffic systems. Specialized in C++/Python, SNMP/MIB communication, and modernizing large production codebases for reliability and scalability.',
  imageUrl: 'https://placehold.co/150x150/e5e5e5/737373?text=JM',
  stats: [
    { label: 'Years Experience', value: 5 },
    { label: 'Projects', value: 10 },
    { label: 'Domains', value: 4 },
  ],
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jkmoon98' },
    { label: 'Email', url: 'mailto:jkmoon98@gmail.com' },
    { label: 'Resume', url: '/resume.pdf' },
  ],
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Software Engineer',
    category: 'Experience',
    date: 'Aug 2022 – Present',
    summary: 'Econolite. SCOOT protocol, traffic control systems, and multi-team codebase modernization.',
    imageUrl: 'https://placehold.co/600x600/e8e8e8/555?text=SE',
    context: 'Econolite builds real-time, safety-critical traffic systems. The SCOOT protocol supports international, stage-based traffic control in live deployments.',
    action: 'Designed and implemented extensions to the SCOOT protocol. Delivered features and fixes across UI and backend for SCOOT-based controllers. Contributed to a large, multi-team rewrite of protocol handlers with high-quality C++ and proactive identification of integration risks. Diagnosed and resolved high-severity defects affecting live intersections, often under time pressure. Worked across SNMP handlers, MIB definitions, core traffic algorithms, and UI components.',
    impact: 'Improved system reliability and operational safety at live intersections. Became a go-to engineer for complex issues and broad system knowledge.',
    tech: ['C++', 'Python', 'SNMP', 'MIBs', 'Embedded Linux', 'Git', 'CI/CD', 'Google Test'],
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/jkmoon98' }],
  },
  {
    id: '2',
    title: 'Associate Software Engineer',
    category: 'Experience',
    date: 'June 2020 – Aug 2022',
    summary: 'Econolite. Real-time traffic control features and configuration tools in embedded C++.',
    imageUrl: 'https://placehold.co/600x600/e8e8e8/555?text=ASE',
    context: 'Same safety-critical traffic control environment; role focused on implementation with guidance and review from senior engineers.',
    action: 'Implemented real-time traffic control features in embedded C++. Contributed to UI and backend for traffic controller configuration tools. Assisted in debugging field-reported issues via log analysis, reproduction, and validation. Implemented SNMP features and customer-specific enhancements from requirements. Built unit tests with PyTest and Google Test to validate functionality and support refactoring.',
    impact: 'Delivered correct, maintainable code that adhered to existing design patterns and supported refactoring efforts.',
    tech: ['C++', 'Python', 'SNMP', 'PyTest', 'Google Test'],
  },
  {
    id: '3',
    title: 'Software Engineer Intern',
    category: 'Experience',
    date: 'Oct 2019 – May 2020',
    summary: 'Econolite. New features in C++ and Python; optimized logging API for traffic events.',
    imageUrl: 'https://placehold.co/600x600/e8e8e8/555?text=Intern',
    context: 'Internship in a fully Agile environment, contributing to production C++ and Python codebases.',
    action: 'Developed new features and functionality using C++ and Python. Optimized the Econolite Logging API by recording key traffic events in the MOE Log to aid in finding bugs.',
    impact: 'Improved debuggability and visibility into traffic events for the team.',
    tech: ['C++', 'Python'],
  },
  {
    id: '4',
    title: 'B.S. Computer Science',
    category: 'Education',
    date: 'June 2020',
    summary: 'University of California, Irvine.',
    imageUrl: 'https://placehold.co/600x600/e8e8e8/555?text=UCI',
    context: 'Bachelor of Science in Computer Science.',
    action: 'Completed degree program in Computer Science.',
    impact: 'Foundation for software engineering in real-time and systems-oriented domains.',
  },
]
