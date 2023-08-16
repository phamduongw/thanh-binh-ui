import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';

const DefaultLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default DefaultLayout;
