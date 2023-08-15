import usePageTitle from '~/hooks/usePageTitle';

const About = ({ title }) => {
  usePageTitle(title);
  return <main>About</main>;
};

export default About;
