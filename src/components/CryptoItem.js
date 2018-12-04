import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell, Hidden } from '@material-ui/core';
import { withRouter } from 'react-router';
import './CryptoItem.css';

export class CryptoItem extends Component {
	goToDetails = () => {
		this.props.history.push(`/coin/${this.props.coin.id}`);
	};

	render() {
		const { coin, currency } = this.props;
		let priceSign = '$';
		switch (currency) {
			case 'USD':
				priceSign = '$';
				break;
			case 'EUR':
				priceSign = '€';
				break;
			case 'CNY':
				priceSign = '¥';
				break;
			default:
				break;
		}
		const coinLogo = `https://s2.coinmarketcap.com/static/img/coins/16x16/${
			coin.id
		}.png`;
		const coinPriceGraph7d = `https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/${
			coin.id
		}.png`;

		return (
			<TableRow onClick={this.goToDetails}>
				<TableCell component="th" scope="row">
					{coin.rank}
				</TableCell>
				<TableCell>
					<div className="coinSymbol">
						<img src={coinLogo} alt="Coin Logo" className="logo-sprite" />
						{coin.symbol}
					</div>
				</TableCell>
				<TableCell>
					{priceSign}
					{parseFloat(coin.quotes[currency].price).toFixed(2)}
				</TableCell>
				<Hidden xsDown>
					<TableCell
						style={{
							color:
								coin.quotes[currency].percent_change_24h > 0 ? 'green' : 'red'
						}}
					>
						{coin.quotes[currency].percent_change_24h}%
					</TableCell>
				</Hidden>
				<Hidden smDown>
					<TableCell>
						<img src={coinPriceGraph7d} alt="Coin Sparkline" />
					</TableCell>
				</Hidden>
			</TableRow>
		);
	}
}

CryptoItem.propTypes = {
	coin: PropTypes.object.isRequired
};

export default withRouter(CryptoItem);
