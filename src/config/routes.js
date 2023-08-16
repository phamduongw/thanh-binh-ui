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
  blog: {
    path: '/blog',
    title: 'Locations',
    slugs: [
      'how-coworking-spaces-promote-creativity',
      'what-is-a-virtual-office',
      'managing-your-mail-box',
      'how-much-office-space-do-you-need-per-person',
      '5-steps-to-achieving-business-goals',
    ],
  },
  about: {
    path: '/about',
    title: 'About',
  },
  contact: {
    path: '/contact',
    title: 'Blog',
  },
};

export default routes;
