import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Main from './component/Main';

import store from './redux/store';

export default class App2 extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}