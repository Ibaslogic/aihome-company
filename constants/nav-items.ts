import { NavItem } from '@/types';

export const menus: NavItem[] = [
  {
    title: 'About',
    path: '/about-us',
    submenu: true,
    subMenuItems: [
      { title: 'Overview', path: '/about-us' },
      { title: 'Our Story', path: '/about-us/story' },
      { title: 'Our Leadership', path: '/about-us/our-leaders' },
      {
        title: 'Our Brands and Businesses',
        path: '/about-us/business',
      },
      { title: 'Our Services', path: '/about-us/services' },
    ],
  },
  {
    title: 'News',
    path: '/news',
    submenu: true,
    subMenuItems: [
      { title: 'Blog', path: '/news' },
      { title: 'Stories', path: '/news/stories' },
      { title: 'Press Releases', path: '/news/releases' },
    ],
  },
  {
    title: 'Investors',
    path: '/investors',
  },
  {
    title: 'Social Responsibility',
    path: '/settings',
    submenu: true,
    subMenuItems: [
      { title: 'Our AI Principles', path: '/ai-principles' },
      { title: 'Community Impact', path: '/community-impact' },
      { title: 'Corporate Governance', path: '#' },
      { title: 'Equity & Belonging', path: '/equity-belonging' },
      { title: 'Corporate Policies', path: '/corporate-policies' },
      { title: 'Sustainability', path: '/sustainability' },
    ],
  },
  {
    title: 'Advocacy',
    path: '/advocacy',
  },
  {
    title: 'Careers',
    path: '/careers',
    submenu: true,
    subMenuItems: [
      { title: 'Overview', path: '/careers' },
      { title: 'Benefits', path: '/benefits' },
      { title: 'Flexible Work', path: 'flexible-work' },
    ],
  },
];
