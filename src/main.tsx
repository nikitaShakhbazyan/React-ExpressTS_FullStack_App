import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './public/fonts/Righteous/Righteous-Regular.ttf';
import './public/fonts/Montserrat_Alternates/MontserratAlternates.ttf';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
);
