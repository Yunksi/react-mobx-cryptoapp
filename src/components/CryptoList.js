import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow
} from '@material-ui/core';
import CryptoItem from './CryptoItem';

export class CryptoList extends Component {
  componentDidMount = () => {
    this.props.cryptoStore.fetchCoinData();
  };

  render() {
    const { coins } = this.props.cryptoStore;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Change (24h)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map(coin => {
            return <CryptoItem key={coin.id} coin={coin} />;
          })}
        </TableBody>
      </Table>
    );
  }
}

export default inject('cryptoStore')(observer(CryptoList));
