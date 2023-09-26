import { Helmet } from 'react-helmet-async';

import CallToAction from '~/components/CallToAction';
import Paragraph from '~/components/Paragraph';
import ServiceList from '~/components/ServiceList';

import SERVICES from '~/data/SERVICES';

const Services = ({ title }) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <section className="thin-padding">
      <div className="section-container-flex align-center">
        <div className="section-heading text-center">
          <div className="section-title">Dịch vụ in ấn</div>
          <h1>Lựa chọn giải pháp in ấn cho doanh nghiệp của bạn</h1>
          <Paragraph gray71>
            Hãy để Thanh Bình giúp bạn khám phá và tận dụng các giải pháp in ấn
            đa dạng và tùy chỉnh nhằm đáp ứng mục tiêu của doanh nghiệp.
          </Paragraph>
        </div>
        <ServiceList data={SERVICES} />
      </div>
    </section>
    <CallToAction />
  </main>
);

export default Services;
