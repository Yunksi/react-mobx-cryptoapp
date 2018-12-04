import React from 'react';
import { shallow } from 'enzyme';
import { CryptoDetails } from './CryptoDetails';
import { CircularProgress, TableBody } from '@material-ui/core';
import CoinMarketInfo from './CoinMarketInfo';

let wrapper;

describe('<CoinDetails />', () => {
	it('should render circular progress if loading data', () => {
		const cryptoStore = {
			selectedCoin: {
				id: 1,
				name: 'Bitcoin',
				symbol: 'BTC',
				website_slug: 'bitcoin',
				rank: 1,
				circulating_supply: 17382650,
				total_supply: 17382650,
				max_supply: 21000000,
				quotes: {
					USD: {
						price: 5602.52362362,
						volume_24h: 4056790790.21145,
						market_cap: 97386707266,
						percent_change_1h: -0.2,
						percent_change_24h: 1,
						percent_change_7d: -12.22
					}
				},
				last_updated: 1542563831
			},
			currency: 'USD',
			loadingCoinDetails: true,
			coinBTCData: {
				id: 1,
				name: 'Bitcoin',
				symbol: 'BTC',
				website_slug: 'bitcoin',
				rank: 1,
				circulating_supply: 17407075,
				total_supply: 17407075,
				max_supply: 21000000,
				quotes: {
					USD: {
						price: 3946.30909307,
						volume_24h: 5050850184.63345,
						market_cap: 68693698356,
						percent_change_1h: -0.03,
						percent_change_24h: 1.12,
						percent_change_7d: 3.36
					},
					BTC: {
						price: 1,
						volume_24h: 1279892.1892618858,
						market_cap: 17407075,
						percent_change_1h: 0,
						percent_change_24h: 0,
						percent_change_7d: 0
					}
				},
				last_updated: 1543965023
			},
			fetchSingleCoin: () => {},
			fetchSingleCoinBTCPrice: () => {}
		};
		wrapper = shallow(
			<CryptoDetails
				cryptoStore={cryptoStore}
				match={{ params: { id: 1 }, isExact: true, path: '', url: '' }}
			/>
		);
		expect(wrapper.find(CircularProgress)).toHaveLength(1);
	});

	it('should render coin details', () => {
		const cryptoStore = {
			selectedCoin: {
				id: 1,
				name: 'Bitcoin',
				symbol: 'BTC',
				website_slug: 'bitcoin',
				rank: 1,
				circulating_supply: 17382650,
				total_supply: 17382650,
				max_supply: 21000000,
				quotes: {
					USD: {
						price: 5602.52362362,
						volume_24h: 4056790790.21145,
						market_cap: 97386707266,
						percent_change_1h: -0.2,
						percent_change_24h: 1,
						percent_change_7d: -12.22
					}
				},
				last_updated: 1542563831
			},
			currency: 'USD',
			loadingCoinDetails: false,
			coinBTCData: {
				id: 1,
				name: 'Bitcoin',
				symbol: 'BTC',
				website_slug: 'bitcoin',
				rank: 1,
				circulating_supply: 17407075,
				total_supply: 17407075,
				max_supply: 21000000,
				quotes: {
					USD: {
						price: 3946.30909307,
						volume_24h: 5050850184.63345,
						market_cap: 68693698356,
						percent_change_1h: -0.03,
						percent_change_24h: 1.12,
						percent_change_7d: 3.36
					},
					BTC: {
						price: 1,
						volume_24h: 1279892.1892618858,
						market_cap: 17407075,
						percent_change_1h: 0,
						percent_change_24h: 0,
						percent_change_7d: 0
					}
				},
				last_updated: 1543965023
			},
			fetchSingleCoin: () => {},
			fetchSingleCoinBTCPrice: () => {}
		};
		wrapper = shallow(
			<CryptoDetails
				cryptoStore={cryptoStore}
				match={{ params: { id: 1 }, isExact: true, path: '', url: '' }}
			/>
		);
		expect(wrapper.find(CoinMarketInfo)).toHaveLength(1);
	});
});
