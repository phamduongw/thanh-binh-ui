import config from '~/config';

import About from '~/pages/About';
import Blog from '~/pages/Blog';
import BlogDetail from '~/pages/Blog/BlogDetail/';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
import ServiceDetail from '~/pages/Services/ServiceDetail';
import Services from '~/pages/Services';

const publicRoutes = [
  {
    path: config.routes.home.path,
    title: config.routes.home.title,
    component: Home,
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
    path: config.routes.about.path,
    title: config.routes.about.title,
    component: About,
  },
  {
    path: config.routes.contact.path,
    title: config.routes.contact.title,
    component: Contact,
  },
  {
    path: config.routes.notFound.path,
    title: config.routes.notFound.title,
    component: NotFound,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
