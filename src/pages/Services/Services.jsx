import usePageTitle from '~/hooks/usePageTitle';

const Services = ({ title }) => {
  usePageTitle(title);
  return <main>Services</main>;
};

export default Services;
