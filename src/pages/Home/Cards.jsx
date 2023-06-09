import Card from '../../components/Card';
import { SlRocket, SlDiamond } from 'react-icons/sl';
import { TfiHeadphoneAlt } from 'react-icons/tfi';

const cards = [
  {
    icon: <SlRocket />,
    title: 'Free Shipping From $150',
    content:
      'Morbi at neque enim. Aenean dapibus porttitor sapien vitae ultricies. Nullam eget nunc sed justo scelerisque fermentum. Etiam dignissim condimentum tellus, et interdum quis.',
  },
  {
    icon: <SlDiamond />,
    title: 'Money Back Guarantee',
    content:
      'Morbi at neque enim. Aenean dapibus porttitor sapien vitae ultricies. Nullam eget nunc sed justo scelerisque fermentum. Etiam dignissim condimentum tellus, et interdum quis.',
  },
  {
    icon: <TfiHeadphoneAlt />,
    title: 'Support 24/7',
    content:
      'Morbi at neque enim. Aenean dapibus porttitor sapien vitae ultricies. Nullam eget nunc sed justo scelerisque fermentum. Etiam dignissim condimentum tellus, et interdum quis.',
  },
];
const Cards = () => {
  return (
    <div className='mt-[6vw] max-md:mt-[13vw] flex justify-center '>
      <div className='md:flex gap-[30px] max-md:px-[15px]'>
        {cards.map((item) => (
          <Card
            key={item.title}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
