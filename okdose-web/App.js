import React from 'react';
import RouterConfig from './router/routeConfig';
import './assets/styles/main.css';
import i18n from './i18n/i18n';
import {I18nextProvider} from 'react-i18next';

function App () {
  return (
    <I18nextProvider i18n={i18n}>
      <RouterConfig />
    </I18nextProvider>
  );
}

export default App;
