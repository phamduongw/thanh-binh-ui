import config from '~/config';

import About from '~/pages/About';
import Blog from '~/pages/Blog';
import BlogDetail from '~/pages/Blog/BlogDetail/';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Location from '~/pages/Location';
import ServiceDetail from '~/pages/Services/ServiceDetail';
import Services from '~/pages/Services';

const publicRoutes = [
  {
    path: config.routes.about.path,
    title: config.routes.about.title,
    component: About,
  },
  {
    path: config.routes.blog.path,
    title: config.routes.blog.title,
    slugs: config.routes.blog.slugs,
    component: {
      parent: Blog,
      child: BlogDetail,
    },
  },
  {
    path: config.routes.contact.path,
    title: config.routes.contact.title,
    component: Contact,
  },
  {
    path: config.routes.home.path,
    title: config.routes.home.title,
    component: Home,
  },
  {
    path: config.routes.location.path,
    title: config.routes.location.title,
    component: Location,
  },
  {
    path: config.routes.services.path,
    title: config.routes.services.title,
    slugs: config.routes.services.slugs,
    component: {
      parent: Services,
      child: ServiceDetail,
    },
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
