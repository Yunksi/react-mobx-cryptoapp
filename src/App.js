import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import CryptoList from './components/CryptoList';
import CustomAppBar from './components/common/CustomAppBar';
import CryptoDetails from './components/CryptoDetails';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CustomAppBar />
        <Switch>
          <Route path="/" exact component={CryptoList} />
          <Route path="/coin/:id" component={CryptoDetails} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
