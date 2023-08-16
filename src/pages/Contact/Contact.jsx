import { Helmet } from 'react-helmet-async';

const Contact = ({ title }) => {
  return (
    <main>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      Contact
    </main>
  );
};

export default Contact;
