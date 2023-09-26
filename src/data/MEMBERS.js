import member_1_500 from '~/assets/images/home/member_1_500.webp';
import member_1_800 from '~/assets/images/home/member_1_800.webp';
import member_1_1080 from '~/assets/images/home/member_1_1080.webp';
import member_2_500 from '~/assets/images/home/member_2_500.webp';
import member_2_800 from '~/assets/images/home/member_2_800.webp';
import member_2_1080 from '~/assets/images/home/member_2_1080.webp';
import member_3_500 from '~/assets/images/home/member_3_500.webp';
import member_3_800 from '~/assets/images/home/member_3_800.webp';
import member_3_1080 from '~/assets/images/home/member_3_1080.webp';
import member_4_500 from '~/assets/images/home/member_4_500.webp';
import member_4_800 from '~/assets/images/home/member_4_800.webp';
import member_4_1080 from '~/assets/images/home/member_4_1080.webp';

const MEMBERS = [
  {
    srcSet: `${member_1_500} 500w, ${member_1_800} 800w, ${member_1_1080} 1080w`,
    src: member_1_1080,
    name: 'Nguyễn Thị Mai Duyên',
    position: 'Tổng Giám Đốc',
  },
  {
    srcSet: `${member_2_500} 500w, ${member_2_800} 800w, ${member_2_1080} 1080w`,
    src: member_2_1080,
    name: 'Phạm Thái Hà',
    position: 'Phó Giám Đốc Kinh Doanh',
  },
  {
    srcSet: `${member_3_500} 500w, ${member_3_800} 800w, ${member_3_1080} 1080w`,
    src: member_3_1080,
    name: 'Trịnh Thị Thanh Vân',
    position: 'Phó Giám Đốc Tài Chính',
  },
  {
    srcSet: `${member_4_500} 500w, ${member_4_800} 800w, ${member_4_1080} 1080w`,
    src: member_4_1080,
    name: 'Trịnh Thanh Hoa',
    position: 'Phó Giám Đốc Nhân Sự',
  },
];

export default MEMBERS;
