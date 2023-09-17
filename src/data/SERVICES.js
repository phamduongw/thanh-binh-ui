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
    title: 'In Sách',
    subtitle:
      'In ấn các loại sách khác nhau bao gồm: sách giáo khoa, sách giới thiệu sản phẩm, truyện, tiểu thuyết.',
  },
  {
    to: PATH + config.routes.services.slugs[1],
    icon: ServiceIcon2,
    title: 'In Catalogue',
    subtitle:
      'Catalogue là một mô hình giới thiệu dịch vụ không thể thiếu đối với mọi doanh nghiệp kinh doanh sản phẩm.',
  },
  {
    to: PATH + config.routes.services.slugs[2],
    icon: ServiceIcon3,
    title: 'In Lịch',
    subtitle:
      'Lịch là một trong những món quà tinh thần tặng đối tác được các công ty sử dụng vào mỗi dịp cuối năm.',
  },
  {
    to: PATH + config.routes.services.slugs[3],
    icon: ServiceIcon4,
    title: 'In Tạp Chí',
    subtitle:
      'Tạp chí được ứng dụng trong nhiều lĩnh vực thời trang, làm đẹp, sức khỏe, âm nhạc.',
  },
  {
    to: PATH + config.routes.services.slugs[4],
    icon: ServiceIcon5,
    title: 'In Hộp Quà',
    subtitle:
      'Hộp quà tặng với kiểu dáng sang trọng, thiết kế tinh tế giúp nâng cao giá trị của món quà.',
  },
];

export default SERVICES;
