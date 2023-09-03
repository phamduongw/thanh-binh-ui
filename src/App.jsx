import { Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes';

import DefaultLayout from './layouts/DefaultLayout';

import NotFound from './pages/NotFound';

const renderLayout = (Component, title) => <Component title={title} />;

const App = () => (
  <Routes>
    <Route element={<DefaultLayout />}>
      {publicRoutes.map(({ path, title, component, slugs }) =>
        slugs ? (
          <Route key={path} path={path}>
            <Route index element={renderLayout(component.parent, title)} />
            <Route
              path={path + '/:slug'}
              element={renderLayout(component.child)}
            />
          </Route>
        ) : (
          <Route
            key={path}
            path={path}
            element={renderLayout(component, title)}
          />
        ),
      )}
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
