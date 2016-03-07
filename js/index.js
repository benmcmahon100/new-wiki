import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import $ from 'jquery';

import Header from './Components/Header';
import ContentProvider from './Components/ContentProvider';
import Footer from './Components/Footer';

ReactDOM.render(
  <Provider store = {store} >
    <div className = "appContainer">
      <Header />
      <ContentProvider />
      <Footer />
    </div>
  </Provider>,
  document.getElementById('root')
);