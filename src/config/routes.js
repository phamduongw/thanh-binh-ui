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
    slugs: [],
  },
  contact: {
    path: '/lien-he',
    title: 'Liên hệ',
  },
};

export default routes;
