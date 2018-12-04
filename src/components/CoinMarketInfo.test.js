import React from 'react';
import { shallow } from 'enzyme';
import CoinMarketInfo from './CoinMarketInfo';
import { Typography } from '@material-ui/core';
import { IntlProvider, FormattedNumber } from 'react-intl';
import { CoinDetail } from './common/CoinDetail';

let coin, currency, wrapper;

describe('<CoinMarketInfo />', () => {
	beforeEach(() => {
		coin = {
			id: 1,
			name: 'Bitcoin',
			symbol: 'BTC',
			website_slug: 'bitcoin',
			rank: 1,
			circulating_supply: 17376137,
			total_supply: 17376137,
			max_supply: 21000000,
			quotes: {
				USD: {
					price: 5572.4702634,
					volume_24h: 6732768290.21329,
					market_cap: 96828006725,
					percent_change_1h: -1.27,
					percent_change_24h: -12.42,
					percent_change_7d: -14.63
				},
				BTC: {
					price: 1,
					volume_24h: 1208219.6892882735,
					market_cap: 17376137,
					percent_change_1h: 0,
					percent_change_24h: 0,
					percent_change_7d: 0
				}
			},
			last_updated: 1542229816
		};
		currency = 'USD';
		wrapper = shallow(<CoinMarketInfo coin={coin} currency={currency} />);
	});

	it('should render 4 Coin Detail Columns', () => {
		expect(wrapper.find(CoinDetail).length).toBe(4);
	});

	// it('should render market cap string', () => {
	// 	expect(
	// 		wrapper
	// 			.find(Typography)
	// 			.first()
	// 			.text()
	// 	).toBe('Market cap');
	// });

	// it('should render market cap number', () => {
	// 	expect(
	// 		wrapper
	// 			.find(FormattedNumber)
	// 			.first()
	// 			.props().value
	// 	).toBe(96828006725);
	// });
});
