import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Home from './pages/Home';
import { AppProvider } from './context/AppContext';

const App = () => (
  <AppProvider>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<div>404 Not Found</div>} />
    </Routes>
  </AppProvider>
);

export default App;
