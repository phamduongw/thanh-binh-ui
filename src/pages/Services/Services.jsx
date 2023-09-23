import { Helmet } from 'react-helmet-async';

import CallToAction from '~/components/CallToAction';
import Paragraph from '~/components/Paragraph';
import ServiceList from '~/components/ServiceList';

const Services = ({ title }) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <section className="thin-padding">
      <div className="section-container-flex align-center">
        <div className="section-heading text-center">
          <div className="section-title">Dịch vụ</div>
          <h1>Lựa chọn giải pháp in ấn cho doanh nghiệp của bạn</h1>
          <Paragraph gray71>
            Nam faucibus nisi quis leo eleifend lacinia. Suspendisse vel gravida
            mi, ut lobortis felis. Nunc molestie dolor ut vehicula viverra.
          </Paragraph>
        </div>
        <ServiceList />
      </div>
    </section>
    <CallToAction />
  </main>
);

export default Services;
