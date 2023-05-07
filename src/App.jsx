import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<div>404 Not Found</div>} />
    </Routes>
  </>
);

export default App;
