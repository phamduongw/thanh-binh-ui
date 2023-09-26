import {
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
  ServiceIcon5,
} from '~/components/Icons';

import book_1 from '~/assets/images/service-detail/book_1.webp';
import book_2 from '~/assets/images/service-detail/book_2.webp';
import book_3 from '~/assets/images/service-detail/book_3.webp';
import catalogue_1 from '~/assets/images/service-detail/catalogue_1.webp';
import calendar_1 from '~/assets/images/service-detail/calendar_1.webp';
import calendar_2 from '~/assets/images/service-detail/calendar_2.webp';
import calendar_3 from '~/assets/images/service-detail/calendar_3.webp';
import report_1 from '~/assets/images/service-detail/report_1.webp';
import gift_box_1 from '~/assets/images/service-detail/gift_box_1.webp';
import gift_box_2 from '~/assets/images/service-detail/gift_box_2.webp';
import gift_box_3 from '~/assets/images/service-detail/gift_box_3.webp';

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
      'Chất lượng in cao cấp thể hiện tâm huyết của bạn',
      'Đáp ứng đơn hàng từ nhỏ đến lớn với sự linh hoạt cao',
      'Tùy chỉnh hoàn toàn về kích thước, loại giấy, và thiết kế bìa sách',
      'Đội ngũ vận hành chuyên nghiệp đảm bảo sự hài lòng của bạn',
    ],
    products: [book_1, book_2, book_3],
  },
  {
    id: 2,
    to: PATH + SERVICE.slugs[1],
    icon: ServiceIcon2,
    title: 'In Catalogue',
    subtitle:
      'Catalogue là một mô hình giới thiệu dịch vụ không thể thiếu đối với mọi doanh nghiệp kinh doanh sản phẩm.',
    descriptions: [
      'Thiết kế độc đáo và đẹp mắt, gợi cảm hứng mua sắm',
      'Tùy chỉnh kích thước, giấy và thiết kế catalogue theo yêu cầu',
      'Đáp ứng đơn hàng từ nhỏ đến lớn với sự linh hoạt cao',
      'Kỹ thuật in hiện đại và đội ngũ chuyên nghiệp đảm bảo chất lượng',
    ],
    products: [catalogue_1],
  },
  {
    id: 3,
    to: PATH + SERVICE.slugs[2],
    icon: ServiceIcon3,
    title: 'In Lịch',
    subtitle:
      'Lịch là một trong những món quà tinh thần tặng đối tác được các công ty sử dụng vào mỗi dịp cuối năm.',
    descriptions: [
      'In lịch cho cá nhân, doanh nghiệp, và sự kiện đặc biệt',
      'Thiết kế sáng tạo, thể hiện sự độc quyền và thương hiệu riêng',
      'Tùy chỉnh đa dạng kích thước, mẫu lịch, và chất liệu giấy',
      'Chất lượng in tốt nhất, sản xuất đúng tiến độ, chuyên nghiệp',
    ],
    products: [calendar_1, calendar_2, calendar_3],
  },
  {
    id: 4,
    to: PATH + SERVICE.slugs[3],
    icon: ServiceIcon4,
    title: 'In Báo Cáo',
    subtitle:
      'Trình bày thành tích của bạn một cách ấn tượng và chuyên nghiệp với dịch vụ in ấn báo cáo thường niên.',
    descriptions: [
      'Sự lựa chọn đáng tin cậy cho các tổ chức và doanh nghiệp',
      'Báo cáo thể hiện sự chuyên nghiệp trong việc ghi nhận thành tích',
      'Tùy chỉnh kích thước, bìa báo cáo và chất liệu giấy, theo yêu cầu',
      'Chất lượng in ấn xuất sắc, đảm bảo tiến độ sản xuất chặt chẽ',
    ],
    products: [report_1],
  },
  {
    id: 5,
    to: PATH + SERVICE.slugs[4],
    icon: ServiceIcon5,
    title: 'In Hộp Quà',
    subtitle:
      'Hộp quà tặng với kiểu dáng sang trọng, thiết kế tinh tế giúp nâng cao giá trị của món quà.',
    descriptions: [
      'Hộp quà với thiết kế tinh tế nhắm tôn vinh giá trị sản phẩm',
      'Phục vụ nhu cầu đa dạng của các cá nhân, doanh nghiệp và sự kiện',
      'Tùy chỉnh kích thước, hình dạng và thiết kế hộp quà độc đáo',
      'Chất lượng sản phẩm và dịch vụ in ân chuyên nghiệp, đáng tin cậy',
    ],
    products: [gift_box_1, gift_box_2, gift_box_3],
  },
];

export default SERVICES;
