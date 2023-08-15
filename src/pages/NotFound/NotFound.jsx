import usePageTitle from '~/hooks/usePageTitle';

const NotFound = ({ title }) => {
  usePageTitle(title);
  return <main>NotFound</main>;
};

export default NotFound;
