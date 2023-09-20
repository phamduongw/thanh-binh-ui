import blog1 from '~/assets/images/home/blog1.svg';
import blog2 from '~/assets/images/home/blog2.svg';
import blog3 from '~/assets/images/home/blog3.svg';
import blog4 from '~/assets/images/home/blog4.svg';
import blog5 from '~/assets/images/home/blog5.svg';

import config from '~/config';

const BLOG = config.routes.blog;
const PATH = BLOG.path + '/';

const BLOGS = [
  {
    to: PATH + BLOG.slugs[0],
    poster: blog1,
    tag: 'Business',
    title: '5 Steps To Achieving Your Business Goals',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt viverra urna, et aliquam leo semper a. Morbi euismod, massa ut faucibus ultrices, justo dui tempus arcu, quis lobortis elit enim vitae turpis.',
  },
  {
    to: PATH + BLOG.slugs[1],
    poster: blog2,
    tag: 'Office Space',
    title: 'How Much Office Space Do You Need Per Person',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt viverra urna, et aliquam leo semper a. Morbi euismod, massa ut faucibus ultrices, justo dui tempus arcu, quis lobortis elit enim vitae turpis.',
  },
  {
    to: PATH + BLOG.slugs[2],
    poster: blog3,
    tag: 'Business',
    title: 'Managing Your Mail Box',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt viverra urna, et aliquam leo semper a. Morbi euismod, massa ut faucibus ultrices, justo dui tempus arcu, quis lobortis elit enim vitae turpis.',
  },
  {
    to: PATH + BLOG.slugs[3],
    poster: blog4,
    tag: 'Virtual Office',
    title: 'What is a Virtual Office and How Does it Work?',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt viverra urna, et aliquam leo semper a. Morbi euismod, massa ut faucibus ultrices, justo dui tempus arcu, quis lobortis elit enim vitae turpis.',
  },
  {
    to: PATH + BLOG.slugs[4],
    poster: blog5,
    tag: 'Coworking',
    title: 'How Coworking Spaces Promote Creativity',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt viverra urna, et aliquam leo semper a. Morbi euismod, massa ut faucibus ultrices, justo dui tempus arcu, quis lobortis elit enim vitae turpis.',
  },
];

export default BLOGS;
