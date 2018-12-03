import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import CoinDetail from './common/CoinDetail';

export class CoinMarketInfo extends Component {
	render() {
		const { coin, currency } = this.props;
		return (
			<Fragment>
				<CoinDetail
					value={coin.quotes[currency].market_cap}
					currency={currency}
					headerString="Market cap"
					isCurrency
				/>
				<CoinDetail
					value={coin.quotes[currency].volume_24h}
					currency={currency}
					headerString="Volume 24h"
					isCurrency
				/>
				<CoinDetail
					value={coin.circulating_supply}
					headerString="Circulating supply"
					coinSymbol={coin.symbol}
				/>
				<CoinDetail
					value={coin.max_supply}
					headerString="Max supply"
					coinSymbol={coin.symbol}
				/>
			</Fragment>
		);
	}
}

CoinMarketInfo.propTypes = {
	coin: PropTypes.object.isRequired,
	currency: PropTypes.string.isRequired
};

export default CoinMarketInfo;
