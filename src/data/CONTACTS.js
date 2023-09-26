import { PhoneIcon, MailIcon, LocationIcon } from '~/components/Icons';

const CONTACTS = [
  {
    icon: PhoneIcon,
    to: 'tel:+84 979-336-872',
    title: 'Số điện thoại',
    content: '+84 979-336-872',
  },
  {
    icon: MailIcon,
    to: 'mailto:thanhbinhprinting02@gmail.com',
    title: 'Thư điện tử',
    content: 'thanhbinhprinting02@gmail.com',
  },
  {
    icon: LocationIcon,
    to: 'https://maps.app.goo.gl/PsSnfzb7eH6HJBj88',
    target: '_blank',
    title: 'Địa chỉ',
    content: '432 Nguyễn Văn Giáp, Từ Liêm, Hà Nội',
  },
];

export default CONTACTS;
