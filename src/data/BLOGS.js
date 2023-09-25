import blog_1 from '~/assets/images/home/blog_1.svg';
import blog_2 from '~/assets/images/home/blog_2.svg';
import blog_3 from '~/assets/images/home/blog_3.svg';
import blog_4 from '~/assets/images/home/blog_4.svg';
import blog_5 from '~/assets/images/home/blog_5.svg';

import config from '~/config';

const BLOG = config.routes.blog;
const PATH = BLOG.path + '/';

const BLOGS = [
  {
    to: PATH + BLOG.slugs[0],
    poster: blog_1,
    tag: 'Business',
    title: '5 Steps To Achieving Your Business Goals',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt viverra urna, et aliquam leo semper a. Morbi euismod, massa ut faucibus ultrices, justo dui tempus arcu, quis lobortis elit enim vitae turpis.',
  },
  {
    to: PATH + BLOG.slugs[1],
    poster: blog_2,
    tag: 'Office Space',
    title: 'How Much Office Space Do You Need Per Person',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt viverra urna, et aliquam leo semper a. Morbi euismod, massa ut faucibus ultrices, justo dui tempus arcu, quis lobortis elit enim vitae turpis.',
  },
  {
    to: PATH + BLOG.slugs[2],
    poster: blog_3,
    tag: 'Business',
    title: 'Managing Your Mail Box',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt viverra urna, et aliquam leo semper a. Morbi euismod, massa ut faucibus ultrices, justo dui tempus arcu, quis lobortis elit enim vitae turpis.',
  },
  {
    to: PATH + BLOG.slugs[3],
    poster: blog_4,
    tag: 'Virtual Office',
    title: 'What is a Virtual Office and How Does it Work?',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt viverra urna, et aliquam leo semper a. Morbi euismod, massa ut faucibus ultrices, justo dui tempus arcu, quis lobortis elit enim vitae turpis.',
  },
  {
    to: PATH + BLOG.slugs[4],
    poster: blog_5,
    tag: 'Coworking',
    title: 'How Coworking Spaces Promote Creativity',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt viverra urna, et aliquam leo semper a. Morbi euismod, massa ut faucibus ultrices, justo dui tempus arcu, quis lobortis elit enim vitae turpis.',
  },
];

export default BLOGS;
