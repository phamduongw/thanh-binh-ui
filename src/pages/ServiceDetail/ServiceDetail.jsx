import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import CallToAction from '~/components/CallToAction';
import Hero from './Hero';
import OtherServices from './OtherServices';

import SERVICES from '~/data/SERVICES';

import config from '~/config';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [
    { id: currentId, icon, title, subtitle, descriptions, products },
    setData,
  ] = useState(SERVICES[0]);

  useEffect(() => {
    const data = SERVICES.find(
      (service) => service.to == config.routes.services.path + '/' + slug,
    );
    if (data) {
      setData(data);
    } else {
      navigate(config.routes['not-found'].path);
    }
  }, [slug]);

  return (
    <main>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Hero
        icon={icon}
        title={title}
        subtitle={subtitle}
        descriptions={descriptions}
        products={products}
      />
      <OtherServices
        data={SERVICES.filter(({ id }) => id !== currentId)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)}
      />
      <CallToAction />
    </main>
  );
};

export default ServiceDetail;
