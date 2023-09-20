const routes = {
  home: {
    path: '/',
    title: 'Trang chủ',
  },
  services: {
    path: '/dich-vu',
    title: 'Dịch vụ',
    slugs: ['in-sach', 'in-catalogue', 'in-lich', 'in-tap-chi', 'in-hop-qua'],
  },
  about: {
    path: '/gioi-thieu',
    title: 'Giới thiệu',
  },
  blog: {
    path: '/tin-tuc',
    title: 'Tin tức',
    slugs: [
      '5-steps-to-achieving-business-goals',
      'how-much-office-space-do-you-need-per-person',
      'managing-your-mail-box',
      'what-is-a-virtual-office',
      'how-coworking-spaces-promote-creativity',
    ],
  },
  contact: {
    path: '/lien-he',
    title: 'Liên hệ',
  },
};

export default routes;
