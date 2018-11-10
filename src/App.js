import React, { Component, Fragment } from 'react';

import CryptoList from './components/CryptoList';
import CustomAppBar from './components/common/CustomAppBar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CustomAppBar />
        <CryptoList />
      </Fragment>
    );
  }
}

export default App;
