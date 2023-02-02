import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next'

import reportWebVitals from './reportWebVitals';
import HeaderSeo from '@components/Seo/HeaderSeo';

// ** translations 
import i18next from './translations/i18next';

// ** Redux 
import { Provider } from 'react-redux';
import store from './redux'

// ** Router
import Routers from './routers';

// ** Styles 
import '@assets/styles/__global.scss'
import "@assets/styles/__resetcss.scss"
import 'antd/dist/reset.css';

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <HeaderSeo
        title={process.env.REACT_APP_PAGE_TYPE}
        desc={process.env.REACT_APP_PAGE_DESCRIPTION}
        image={process.env.REACT_APP_PAGE_IMAGE}
      />
      <Routers />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
