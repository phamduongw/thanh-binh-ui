import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import ResetScroll from '~/components/ResetScroll';

const DefaultLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
    <ResetScroll />
  </>
);

export default DefaultLayout;
