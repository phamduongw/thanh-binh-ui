const routes = {
  home: {
    path: '/home',
    title: 'Trang chủ',
  },
  services: {
    path: '/services',
    title: 'Dịch vụ',
    slugs: ['in-sach', 'in-catalogue', 'in-lich', 'in-tap-chi', 'in-hop-qua'],
  },
  about: {
    path: '/about',
    title: 'Giới thiệu',
  },
  blog: {
    path: '/blog',
    title: 'Tin tức',
    slugs: [
      '5-steps-to-achieving-business-goals',
      'how-much-office-space-do-you-need-per-person',
      'lich-su-phat-trien-nghanh-in-an',
    ],
  },
  contact: {
    path: '/contact',
    title: 'Liên hệ',
  },
  'not-found': {
    path: '/not-found',
    title: 'Trang này không tồn tại',
  },
};

export default routes;
