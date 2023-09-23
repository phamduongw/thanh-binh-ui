import Button from '~/components/Button';
import ServiceList from '~/components/ServiceList';

import config from '~/config';

const OurServices = () => (
  <section className="section-wrapper">
    <div className="section-container-flex align-center">
      <div className="section-heading text-center">
        <div className="section-title">Dịch vụ</div>
        <h2>
          Giải pháp in ấn linh hoạt - Hãy lựa chọn dich vụ phù hợp nhất với bạn
        </h2>
      </div>
      <ServiceList />
      <Button to={config.routes.services.path} button primary>
        Tất cả dịch vụ
      </Button>
    </div>
  </section>
);

export default OurServices;
