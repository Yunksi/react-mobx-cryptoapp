import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import {
	Table,
	TableHead,
	TableCell,
	TableBody,
	TableRow,
	CircularProgress,
	Hidden
} from '@material-ui/core';
import CryptoItem from './CryptoItem';
import './CryptoList.css';

export class CryptoList extends Component {
	componentDidMount = () => {
		this.props.cryptoStore.fetchCoinData();
	};

	render() {
		const { coins, isLoadingCoins, currency } = this.props.cryptoStore;
		return (
			<Fragment>
				{isLoadingCoins ? (
					<div className="progress">
						<CircularProgress />
					</div>
				) : (
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>#</TableCell>
								<TableCell>Symbol</TableCell>
								<TableCell>Price</TableCell>
								<Hidden xsDown>
									<TableCell>Change (24h)</TableCell>
								</Hidden>
								<Hidden smDown>
									<TableCell>Price Graph</TableCell>
								</Hidden>
							</TableRow>
						</TableHead>
						<TableBody>
							{coins.map(coin => {
								return (
									<CryptoItem key={coin.id} coin={coin} currency={currency} />
								);
							})}
						</TableBody>
					</Table>
				)}
			</Fragment>
		);
	}
}

export default inject('cryptoStore')(observer(CryptoList));
