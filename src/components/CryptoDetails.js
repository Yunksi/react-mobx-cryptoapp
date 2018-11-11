import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

export class CryptoDetails extends Component {
  render() {
    const coinId = this.props.match.params.id;
    return <div>This is cryptoDetailsView of coin with id: {coinId}</div>;
  }
}

export default inject('cryptoStore')(observer(CryptoDetails));
