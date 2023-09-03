import {
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
  ServiceIcon5,
} from '~/components/Icons';

import config from '~/config';

const PATH = config.routes.services.path + '/';

const SERVICES = [
  {
    to: PATH + config.routes.services.slugs[0],
    icon: ServiceIcon1,
    title: 'Office Space',
    subtitle:
      'Curabitur turpis justo, gravida eget placerat at, volutpat ac est. Fusce luctus tempus est cursus suscipit.',
  },
  {
    to: PATH + config.routes.services.slugs[1],
    icon: ServiceIcon2,
    title: 'Dedicated Desk',
    subtitle:
      'Etiam malesuada, tellus sed bibendum maximus, sem odio mattis dui, quis mollis dui leo non nisi.',
  },
  {
    to: PATH + config.routes.services.slugs[2],
    icon: ServiceIcon3,
    title: 'Coworking Space',
    subtitle:
      'Maecenas at ligula consequat eros commodo interdum. Quisque convallis eget arcu vitae egestas.',
  },
  {
    to: PATH + config.routes.services.slugs[3],
    icon: ServiceIcon4,
    title: 'Virtual Office',
    subtitle:
      'Donec mi augue, mollis eu pulvinar et, bibendum non lorem. Praesent aliquam malesuada velit id tincidunt.',
  },
  {
    to: PATH + config.routes.services.slugs[4],
    icon: ServiceIcon5,
    title: 'Meeting Room',
    subtitle:
      'Etiam nunc odio, gravida vitae metus in, placerat varius leo. Nam convallis tellus sit amet lobortis imperdiet.',
  },
];

export default SERVICES;
