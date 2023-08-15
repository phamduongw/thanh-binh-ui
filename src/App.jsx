import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

const App = () => (
  <>
    <Header />
    <Routes>
      {publicRoutes.map(({ path, title, component: Page, slugs }) => {
        if (slugs) {
          const { parent: Parent, child: Child } = Page;
          return (
            <Route key={path} path={path}>
              <Route index element={<Parent title={title} />} />
              {slugs.map((slug) => (
                <Route key={slug} path={slug} element={<Child slug={slug} />} />
              ))}
            </Route>
          );
        } else {
          return (
            <Route key={path} path={path} element={<Page title={title} />} />
          );
        }
      })}
    </Routes>
    <Footer />
  </>
);

export default App;
