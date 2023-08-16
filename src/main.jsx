import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import store from './redux/store';
import GlobalStyles from './components/GlobalStyles/';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </GlobalStyles>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
