import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import GlobalStyles from './components/GlobalStyles/';

import store from './redux/store';

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
