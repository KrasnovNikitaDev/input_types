import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createGlobalStyle } from 'styled-components'
import { store } from './store/store';
import { Provider } from 'react-redux';
import './assets/CSSTransition/style.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`


ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle />
      <App className="container"/>
    </Provider>
  ,document.getElementById('rootApp')
);

