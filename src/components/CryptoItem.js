import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@material-ui/core';
import { withRouter } from 'react-router';

export class CryptoItem extends Component {
  goToDetails = () => {
    this.props.history.push(`/coin/${this.props.coin.id}`);
  };

  render() {
    const { coin } = this.props;
    return (
      <TableRow onClick={this.goToDetails}>
        <TableCell component="th" scope="row">
          {coin.rank}
        </TableCell>
        <TableCell>{coin.symbol}</TableCell>
        <TableCell>{coin.price_usd}</TableCell>
        <TableCell>{coin.percent_change_24h}</TableCell>
      </TableRow>
    );
  }
}

CryptoItem.propTypes = {
  coin: PropTypes.object.isRequired
};

export default withRouter(CryptoItem);
