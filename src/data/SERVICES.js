import {
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
  ServiceIcon5,
} from '~/components/Icons';

import service1_500 from '~/assets/images/service-detail/service1-500.jpeg';
import service1_800 from '~/assets/images/service-detail/service1-800.jpeg';
import service1_1080 from '~/assets/images/service-detail/service1-1080.jpeg';
import service2_500 from '~/assets/images/service-detail/service2-500.jpeg';
import service2_800 from '~/assets/images/service-detail/service2-800.jpeg';
import service2_1080 from '~/assets/images/service-detail/service2-1080.jpeg';
import service3_500 from '~/assets/images/service-detail/service3-500.jpeg';
import service3_800 from '~/assets/images/service-detail/service3-800.jpeg';
import service3_1080 from '~/assets/images/service-detail/service3-1080.jpeg';
import service4_500 from '~/assets/images/service-detail/service4-500.jpeg';
import service4_800 from '~/assets/images/service-detail/service4-800.jpeg';
import service4_1080 from '~/assets/images/service-detail/service4-1080.jpeg';
import service5_500 from '~/assets/images/service-detail/service5-500.jpeg';
import service5_800 from '~/assets/images/service-detail/service5-800.jpeg';
import service5_1080 from '~/assets/images/service-detail/service5-1080.jpeg';

import config from '~/config';

const SERVICE = config.routes.services;
const PATH = SERVICE.path + '/';

const SERVICES = [
  {
    id: 1,
    to: PATH + SERVICE.slugs[0],
    icon: ServiceIcon1,
    title: 'In Sách',
    subtitle:
      'In ấn các loại sách khác nhau bao gồm: sách giáo khoa, sách giới thiệu sản phẩm, truyện, tiểu thuyết.',
    descriptions: [
      'Sed leo magna, varius id sollicitudin eu, ullamcorper sed lacus',
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
      'Praesent consequat ex mi, vel vulputate turpis tincidunt vitae',
      'Nunc id velit tempus ante vestibulum ultrices id nec metus',
    ],
    srcSet: `${service1_500} 500w, ${service1_800} 800w, ${service1_1080} 1080w`,
    src: service1_500,
  },
  {
    id: 2,
    to: PATH + SERVICE.slugs[1],
    icon: ServiceIcon2,
    title: 'In Catalogue',
    subtitle:
      'Catalogue là một mô hình giới thiệu dịch vụ không thể thiếu đối với mọi doanh nghiệp kinh doanh sản phẩm.',
    descriptions: [
      'Sed leo magna, varius id sollicitudin eu, ullamcorper sed lacus',
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
      'Praesent consequat ex mi, vel vulputate turpis tincidunt vitae',
      'Nunc id velit tempus ante vestibulum ultrices id nec metus',
    ],
    srcSet: `${service2_500} 500w, ${service2_800} 800w, ${service2_1080} 1080w`,
    src: service2_500,
  },
  {
    id: 3,
    to: PATH + SERVICE.slugs[2],
    icon: ServiceIcon3,
    title: 'In Lịch',
    subtitle:
      'Lịch là một trong những món quà tinh thần tặng đối tác được các công ty sử dụng vào mỗi dịp cuối năm.',
    descriptions: [
      'Sed leo magna, varius id sollicitudin eu, ullamcorper sed lacus',
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
      'Praesent consequat ex mi, vel vulputate turpis tincidunt vitae',
      'Nunc id velit tempus ante vestibulum ultrices id nec metus',
    ],
    srcSet: `${service3_500} 500w, ${service3_800} 800w, ${service3_1080} 1080w`,
    src: service3_500,
  },
  {
    id: 4,
    to: PATH + SERVICE.slugs[3],
    icon: ServiceIcon4,
    title: 'In Tạp Chí',
    subtitle:
      'Tạp chí được ứng dụng trong nhiều lĩnh vực thời trang, làm đẹp, sức khỏe, âm nhạc.',
    descriptions: [
      'Sed leo magna, varius id sollicitudin eu, ullamcorper sed lacus',
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
      'Praesent consequat ex mi, vel vulputate turpis tincidunt vitae',
      'Nunc id velit tempus ante vestibulum ultrices id nec metus',
    ],
    srcSet: `${service4_500} 500w, ${service4_800} 800w, ${service4_1080} 1080w`,
    src: service4_500,
  },
  {
    id: 5,
    to: PATH + SERVICE.slugs[4],
    icon: ServiceIcon5,
    title: 'In Hộp Quà',
    subtitle:
      'Hộp quà tặng với kiểu dáng sang trọng, thiết kế tinh tế giúp nâng cao giá trị của món quà.',
    descriptions: [
      'Sed leo magna, varius id sollicitudin eu, ullamcorper sed lacus',
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
      'Praesent consequat ex mi, vel vulputate turpis tincidunt vitae',
      'Nunc id velit tempus ante vestibulum ultrices id nec metus',
    ],
    srcSet: `${service5_500} 500w, ${service5_800} 800w, ${service5_1080} 1080w`,
    src: service5_500,
  },
];

export default SERVICES;
