import {
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
  ServiceIcon5,
} from '~/components/Icons';

import service_1_500 from '~/assets/images/service-detail/service_1_500.jpeg';
import service_1_800 from '~/assets/images/service-detail/service_1_800.jpeg';
import service_1_1080 from '~/assets/images/service-detail/service_1_1080.jpeg';
import service_2_500 from '~/assets/images/service-detail/service_2_500.jpeg';
import service_2_800 from '~/assets/images/service-detail/service_2_800.jpeg';
import service_2_1080 from '~/assets/images/service-detail/service_2_1080.jpeg';
import service_3_500 from '~/assets/images/service-detail/service_3_500.jpeg';
import service_3_800 from '~/assets/images/service-detail/service_3_800.jpeg';
import service_3_1080 from '~/assets/images/service-detail/service_3_1080.jpeg';
import service_4_500 from '~/assets/images/service-detail/service_4_500.jpeg';
import service_4_800 from '~/assets/images/service-detail/service_4_800.jpeg';
import service_4_1080 from '~/assets/images/service-detail/service_4_1080.jpeg';
import service_5_500 from '~/assets/images/service-detail/service_5_500.jpeg';
import service_5_800 from '~/assets/images/service-detail/service_5_800.jpeg';
import service_5_1080 from '~/assets/images/service-detail/service_5_1080.jpeg';

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
    srcSet: `${service_1_500} 500w, ${service_1_800} 800w, ${service_1_1080} 1080w`,
    src: service_1_500,
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
    srcSet: `${service_2_500} 500w, ${service_2_800} 800w, ${service_2_1080} 1080w`,
    src: service_2_500,
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
    srcSet: `${service_3_500} 500w, ${service_3_800} 800w, ${service_3_1080} 1080w`,
    src: service_3_500,
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
    srcSet: `${service_4_500} 500w, ${service_4_800} 800w, ${service_4_1080} 1080w`,
    src: service_4_500,
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
    srcSet: `${service_5_500} 500w, ${service_5_800} 800w, ${service_5_1080} 1080w`,
    src: service_5_500,
  },
];

export default SERVICES;
