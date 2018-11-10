import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@material-ui/core';

export class CryptoItem extends Component {
  render() {
    const { coin } = this.props;
    return (
      <TableRow>
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

export default CryptoItem;
