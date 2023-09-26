import Button from '~/components/Button';
import ServiceList from '~/components/ServiceList';

import SERVICES from '~/data/SERVICES';

import config from '~/config';

const OurServices = () => (
  <section className="section-wrapper">
    <div className="section-container-flex normal-padding align-center">
      <div className="section-heading text-center">
        <div className="section-title">Dịch vụ in ấn</div>
        <h2>
          Giải pháp in ấn linh hoạt - Hãy lựa chọn dịch vụ phù hợp nhất với bạn
        </h2>
      </div>
      <ServiceList data={SERVICES} />
      <Button to={config.routes.services.path} button primary>
        Tất cả dịch vụ
      </Button>
    </div>
  </section>
);

export default OurServices;
