import Button from '~/components/Button';
import ServiceList from '~/components/ServiceList';

import config from '~/config';

const OtherServices = ({ data }) => (
  <section className="thin-padding desktop-no-padding">
    <div className="section-container-flex align-center">
      <h2>Các dịch vụ khác</h2>
      <ServiceList data={data} />
      <Button to={config.routes.services.path} className="back-to-all-btn">
        Xem tất cả
      </Button>
    </div>
  </section>
);

export default OtherServices;
