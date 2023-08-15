import usePageTitle from '~/hooks/usePageTitle';

const Contact = ({ title }) => {
  usePageTitle(title);
  return <main>Contact</main>;
};

export default Contact;
