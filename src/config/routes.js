const routes = {
  home: {
    path: '/',
    title: 'Home',
  },
  services: {
    path: '/services',
    title: 'Services',
    slugs: [
      'office-space',
      'dedicated-desk',
      'coworking-space',
      'virtual-office',
      'meeting-room',
    ],
  },
  location: {
    path: '/location',
    title: 'Location',
  },
  about: {
    path: '/about',
    title: 'About',
  },
  blog: {
    path: '/blog',
    title: 'Blog',
    slugs: [
      'how-coworking-spaces-promote-creativity',
      'what-is-a-virtual-office',
      'managing-your-mail-box',
      'how-much-office-space-do-you-need-per-person',
      '5-steps-to-achieving-business-goals',
    ],
  },
  contact: {
    path: '/contact',
    title: 'Contact',
  },
};

export default routes;
