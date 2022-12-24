
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next'
import { Helmet } from 'react-helmet'

import reportWebVitals from './reportWebVitals';

// ** translations 
import i18next from './translations/i18next';

// ** Redux 
import { Provider } from 'react-redux';
import store from './redux'

// ** Router
import Routers from './routers'

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <Helmet defaultTitle="Workplace" titleTemplate="MySite.com - %s">
        <meta property="og:type" content={process.env.REACT_APP_PAGE_TYPE} />
        <meta name="description" content={process.env.REACT_APP_PAGE_DESCRIPTION} />
      </Helmet>
      <Routers />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
