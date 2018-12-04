import React from 'react';
import { CryptoList } from './CryptoList';
import { shallow } from 'enzyme';
import { CircularProgress, TableBody } from '@material-ui/core';

let cryptoStore, wrapper;

describe('<CryptoList />', () => {
	it('should render top 100 crypto currencies', () => {
		cryptoStore = {
			coins: [
				{
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
				{
					id: 52,
					name: 'XRP',
					symbol: 'XRP',
					website_slug: 'ripple',
					rank: 2,
					circulating_supply: 40271748947,
					total_supply: 99991787268,
					max_supply: 100000000000,
					quotes: {
						USD: {
							price: 0.5133409786,
							volume_24h: 884961243.734933,
							market_cap: 20673139014,
							percent_change_1h: -0.53,
							percent_change_24h: 5.76,
							percent_change_7d: 2.29
						}
					},
					last_updated: 1542563827
				},
				{
					id: 1027,
					name: 'Ethereum',
					symbol: 'ETH',
					website_slug: 'ethereum',
					rank: 3,
					circulating_supply: 103280182,
					total_supply: 103280182,
					max_supply: null,
					quotes: {
						USD: {
							price: 175.502857826,
							volume_24h: 1783284815.26477,
							market_cap: 18125967125,
							percent_change_1h: -0.58,
							percent_change_24h: 1.12,
							percent_change_7d: -16.57
						}
					},
					last_updated: 1542563862
				},
				{
					id: 1831,
					name: 'Bitcoin Cash',
					symbol: 'BCH',
					website_slug: 'bitcoin-cash',
					rank: 4,
					circulating_supply: 17464975,
					total_supply: 17464975,
					max_supply: 21000000,
					quotes: {
						USD: {
							price: 384.403384343,
							volume_24h: 282157688.360693,
							market_cap: 6713595497,
							percent_change_1h: 0.28,
							percent_change_24h: -1.97,
							percent_change_7d: -27.67
						}
					},
					last_updated: 1542563853
				},
				{
					id: 512,
					name: 'Stellar',
					symbol: 'XLM',
					website_slug: 'stellar',
					rank: 5,
					circulating_supply: 19264393064,
					total_supply: 104463177385,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.2525479979,
							volume_24h: 101245224.115037,
							market_cap: 4865183899,
							percent_change_1h: -0.07,
							percent_change_24h: 4.15,
							percent_change_7d: -6.59
						}
					},
					last_updated: 1542563843
				},
				{
					id: 1765,
					name: 'EOS',
					symbol: 'EOS',
					website_slug: 'eos',
					rank: 6,
					circulating_supply: 906245118,
					total_supply: 1006245120,
					max_supply: null,
					quotes: {
						USD: {
							price: 4.593162709,
							volume_24h: 745140783.898951,
							market_cap: 4162531279,
							percent_change_1h: -0.17,
							percent_change_24h: 0.94,
							percent_change_7d: -13.9
						}
					},
					last_updated: 1542563863
				},
				{
					id: 2,
					name: 'Litecoin',
					symbol: 'LTC',
					website_slug: 'litecoin',
					rank: 7,
					circulating_supply: 59214038,
					total_supply: 59214038,
					max_supply: 84000000,
					quotes: {
						USD: {
							price: 42.4562910715,
							volume_24h: 327059140.330591,
							market_cap: 2514008440,
							percent_change_1h: -0.2,
							percent_change_24h: 1.45,
							percent_change_7d: -16.83
						}
					},
					last_updated: 1542563823
				},
				{
					id: 825,
					name: 'Tether',
					symbol: 'USDT',
					website_slug: 'tether',
					rank: 8,
					circulating_supply: 1756421736,
					total_supply: 2580109502,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.990609094,
							volume_24h: 2906881519.00762,
							market_cap: 1739927344,
							percent_change_1h: -0.07,
							percent_change_24h: 0.31,
							percent_change_7d: -0.51
						}
					},
					last_updated: 1542563865
				},
				{
					id: 2010,
					name: 'Cardano',
					symbol: 'ADA',
					website_slug: 'cardano',
					rank: 9,
					circulating_supply: 25927070538,
					total_supply: 31112483745,
					max_supply: 45000000000,
					quotes: {
						USD: {
							price: 0.0615533312,
							volume_24h: 15801630.9133852,
							market_cap: 1595897560,
							percent_change_1h: -0.16,
							percent_change_24h: 1.83,
							percent_change_7d: -18.9
						}
					},
					last_updated: 1542563867
				},
				{
					id: 328,
					name: 'Monero',
					symbol: 'XMR',
					website_slug: 'monero',
					rank: 10,
					circulating_supply: 16579669,
					total_supply: 16579669,
					max_supply: null,
					quotes: {
						USD: {
							price: 89.3725620475,
							volume_24h: 25554896.6357447,
							market_cap: 1481767527,
							percent_change_1h: 0.32,
							percent_change_24h: 4.02,
							percent_change_7d: -14.11
						}
					},
					last_updated: 1542563838
				},
				{
					id: 1958,
					name: 'TRON',
					symbol: 'TRX',
					website_slug: 'tron',
					rank: 11,
					circulating_supply: 65748111645,
					total_supply: 99000000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0188875094,
							volume_24h: 71049306.1738048,
							market_cap: 1241818080,
							percent_change_1h: -0.12,
							percent_change_24h: 0.44,
							percent_change_7d: -17.04
						}
					},
					last_updated: 1542563867
				},
				{
					id: 1720,
					name: 'IOTA',
					symbol: 'MIOTA',
					website_slug: 'iota',
					rank: 12,
					circulating_supply: 2779530283,
					total_supply: 2779530283,
					max_supply: 2779530283,
					quotes: {
						USD: {
							price: 0.4145914849,
							volume_24h: 5028370.97044592,
							market_cap: 1152369587,
							percent_change_1h: -0.18,
							percent_change_24h: 1.25,
							percent_change_7d: -13.69
						}
					},
					last_updated: 1542563856
				},
				{
					id: 131,
					name: 'Dash',
					symbol: 'DASH',
					website_slug: 'dash',
					rank: 13,
					circulating_supply: 8451283,
					total_supply: 8451283,
					max_supply: 18900000,
					quotes: {
						USD: {
							price: 133.305081541,
							volume_24h: 149944774.221279,
							market_cap: 1126598913,
							percent_change_1h: -0.29,
							percent_change_24h: 0.79,
							percent_change_7d: -16.52
						}
					},
					last_updated: 1542563833
				},
				{
					id: 1839,
					name: 'Binance Coin',
					symbol: 'BNB',
					website_slug: 'binance-coin',
					rank: 14,
					circulating_supply: 130799315,
					total_supply: 190799315,
					max_supply: null,
					quotes: {
						USD: {
							price: 7.9600460535,
							volume_24h: 14058518.6856052,
							market_cap: 1041168571,
							percent_change_1h: -0.19,
							percent_change_24h: 3.46,
							percent_change_7d: -15.53
						}
					},
					last_updated: 1542563853
				},
				{
					id: 873,
					name: 'NEM',
					symbol: 'XEM',
					website_slug: 'nem',
					rank: 15,
					circulating_supply: 8999999999,
					total_supply: 8999999999,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0930540273,
							volume_24h: 8103603.9231811,
							market_cap: 837486245,
							percent_change_1h: 0.07,
							percent_change_24h: 0.63,
							percent_change_7d: 0.38
						}
					},
					last_updated: 1542563854
				},
				{
					id: 1376,
					name: 'NEO',
					symbol: 'NEO',
					website_slug: 'neo',
					rank: 16,
					circulating_supply: 65000000,
					total_supply: 100000000,
					max_supply: 100000000,
					quotes: {
						USD: {
							price: 12.5452140978,
							volume_24h: 166630278.00943,
							market_cap: 815438916,
							percent_change_1h: 0.05,
							percent_change_24h: 1.19,
							percent_change_7d: -20.23
						}
					},
					last_updated: 1542563867
				},
				{
					id: 1321,
					name: 'Ethereum Classic',
					symbol: 'ETC',
					website_slug: 'ethereum-classic',
					rank: 17,
					circulating_supply: 106126811,
					total_supply: 106126811,
					max_supply: null,
					quotes: {
						USD: {
							price: 7.5226025874,
							volume_24h: 148737463.713268,
							market_cap: 798349823,
							percent_change_1h: -0.09,
							percent_change_24h: 1.5,
							percent_change_7d: -18.64
						}
					},
					last_updated: 1542563852
				},
				{
					id: 2011,
					name: 'Tezos',
					symbol: 'XTZ',
					website_slug: 'tezos',
					rank: 18,
					circulating_supply: 607489041,
					total_supply: 763306930,
					max_supply: null,
					quotes: {
						USD: {
							price: 1.0930305444,
							volume_24h: 1666155.7453683,
							market_cap: 664004077,
							percent_change_1h: -0.31,
							percent_change_24h: -0.33,
							percent_change_7d: -16.83
						}
					},
					last_updated: 1542563868
				},
				{
					id: 1437,
					name: 'Zcash',
					symbol: 'ZEC',
					website_slug: 'zcash',
					rank: 19,
					circulating_supply: 5263194,
					total_supply: 5263194,
					max_supply: null,
					quotes: {
						USD: {
							price: 113.232120636,
							volume_24h: 187831805.388602,
							market_cap: 595962590,
							percent_change_1h: -0.7,
							percent_change_24h: 6.55,
							percent_change_7d: -12.52
						}
					},
					last_updated: 1542563853
				},
				{
					id: 2083,
					name: 'Bitcoin Gold',
					symbol: 'BTG',
					website_slug: 'bitcoin-gold',
					rank: 20,
					circulating_supply: 17350111,
					total_supply: 17450111,
					max_supply: 21000000,
					quotes: {
						USD: {
							price: 27.0088673149,
							volume_24h: 5677942.18744742,
							market_cap: 468606848,
							percent_change_1h: 0.05,
							percent_change_24h: 1.8,
							percent_change_7d: -9.38
						}
					},
					last_updated: 1542563872
				},
				{
					id: 3077,
					name: 'VeChain',
					symbol: 'VET',
					website_slug: 'vechain',
					rank: 21,
					circulating_supply: 55454734800,
					total_supply: 86712634466,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0075844644,
							volume_24h: 9206545.29955936,
							market_cap: 420594462,
							percent_change_1h: -0.55,
							percent_change_24h: -1.31,
							percent_change_7d: -25.26
						}
					},
					last_updated: 1542563868
				},
				{
					id: 1518,
					name: 'Maker',
					symbol: 'MKR',
					website_slug: 'maker',
					rank: 22,
					circulating_supply: 728228,
					total_supply: 1000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 574.019652051,
							volume_24h: 403526.087509775,
							market_cap: 418017051,
							percent_change_1h: -0.96,
							percent_change_24h: 0.97,
							percent_change_7d: -17.59
						}
					},
					last_updated: 1542563867
				},
				{
					id: 2566,
					name: 'Ontology',
					symbol: 'ONT',
					website_slug: 'ontology',
					rank: 23,
					circulating_supply: 291115881,
					total_supply: 1000000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 1.3327425404,
							volume_24h: 15743145.0935546,
							market_cap: 387982519,
							percent_change_1h: -0.31,
							percent_change_24h: 0.54,
							percent_change_7d: -17.89
						}
					},
					last_updated: 1542563872
				},
				{
					id: 1808,
					name: 'OmiseGO',
					symbol: 'OMG',
					website_slug: 'omisego',
					rank: 24,
					circulating_supply: 140245398,
					total_supply: 140245398,
					max_supply: null,
					quotes: {
						USD: {
							price: 2.7318834606,
							volume_24h: 29001129.8516025,
							market_cap: 383134084,
							percent_change_1h: -0.26,
							percent_change_24h: 2.01,
							percent_change_7d: -15.07
						}
					},
					last_updated: 1542563858
				},
				{
					id: 1896,
					name: '0x',
					symbol: 'ZRX',
					website_slug: '0x',
					rank: 25,
					circulating_supply: 546175478,
					total_supply: 1000000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.5554856955,
							volume_24h: 8444673.66752753,
							market_cap: 303392665,
							percent_change_1h: 0.1,
							percent_change_24h: 3.44,
							percent_change_7d: -20.17
						}
					},
					last_updated: 1542563854
				},
				{
					id: 74,
					name: 'Dogecoin',
					symbol: 'DOGE',
					website_slug: 'dogecoin',
					rank: 26,
					circulating_supply: 117043246447,
					total_supply: 117043246447,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0025878593,
							volume_24h: 12794208.0116424,
							market_cap: 302891454,
							percent_change_1h: -0.24,
							percent_change_24h: -0.64,
							percent_change_7d: -18.37
						}
					},
					last_updated: 1542563827
				},
				{
					id: 1168,
					name: 'Decred',
					symbol: 'DCR',
					website_slug: 'decred',
					rank: 27,
					circulating_supply: 8836410,
					total_supply: 8836410,
					max_supply: 21000000,
					quotes: {
						USD: {
							price: 33.6291730704,
							volume_24h: 1567025.62629713,
							market_cap: 297161147,
							percent_change_1h: 0.08,
							percent_change_24h: 3.55,
							percent_change_7d: -15.05
						}
					},
					last_updated: 1542563856
				},
				{
					id: 1684,
					name: 'Qtum',
					symbol: 'QTUM',
					website_slug: 'qtum',
					rank: 28,
					circulating_supply: 89045144,
					total_supply: 101045144,
					max_supply: null,
					quotes: {
						USD: {
							price: 3.0904519481,
							volume_24h: 130653076.435261,
							market_cap: 275189739,
							percent_change_1h: -0.49,
							percent_change_24h: 0.98,
							percent_change_7d: -18.97
						}
					},
					last_updated: 1542563864
				},
				{
					id: 1697,
					name: 'Basic Attention Token',
					symbol: 'BAT',
					website_slug: 'basic-attention-token',
					rank: 29,
					circulating_supply: 1180808540,
					total_supply: 1500000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.2149535003,
							volume_24h: 5670400.42120195,
							market_cap: 253818929,
							percent_change_1h: 0.03,
							percent_change_24h: 0.72,
							percent_change_7d: -15.64
						}
					},
					last_updated: 1542563868
				},
				{
					id: 1214,
					name: 'Lisk',
					symbol: 'LSK',
					website_slug: 'lisk',
					rank: 30,
					circulating_supply: 112283475,
					total_supply: 127452553,
					max_supply: null,
					quotes: {
						USD: {
							price: 2.1831970667,
							volume_24h: 4602332.87012103,
							market_cap: 245136952,
							percent_change_1h: -0.13,
							percent_change_24h: 2.22,
							percent_change_7d: -20.01
						}
					},
					last_updated: 1542563868
				},
				{
					id: 2469,
					name: 'Zilliqa',
					symbol: 'ZIL',
					website_slug: 'zilliqa',
					rank: 31,
					circulating_supply: 7902642023,
					total_supply: 12600000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0264448944,
							volume_24h: 2739199.73329988,
							market_cap: 208984534,
							percent_change_1h: -0.62,
							percent_change_24h: -0.08,
							percent_change_7d: -21.95
						}
					},
					last_updated: 1542563872
				},
				{
					id: 1700,
					name: 'Aeternity',
					symbol: 'AE',
					website_slug: 'aeternity',
					rank: 32,
					circulating_supply: 233020472,
					total_supply: 273685830,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.8842134809,
							volume_24h: 7858686.02646688,
							market_cap: 206039843,
							percent_change_1h: -0.29,
							percent_change_24h: 1.19,
							percent_change_7d: -22.91
						}
					},
					last_updated: 1542563855
				},
				{
					id: 372,
					name: 'Bytecoin',
					symbol: 'BCN',
					website_slug: 'bytecoin-bcn',
					rank: 33,
					circulating_supply: 184066828814,
					total_supply: 184066828814,
					max_supply: 184470000000,
					quotes: {
						USD: {
							price: 0.001112542,
							volume_24h: 246885.22100861,
							market_cap: 204782082,
							percent_change_1h: -0.4,
							percent_change_24h: 0.58,
							percent_change_7d: -12.61
						}
					},
					last_updated: 1542563841
				},
				{
					id: 2222,
					name: 'Bitcoin Diamond',
					symbol: 'BCD',
					website_slug: 'bitcoin-diamond',
					rank: 34,
					circulating_supply: 153756875,
					total_supply: 156756875,
					max_supply: 210000000,
					quotes: {
						USD: {
							price: 1.3252329057,
							volume_24h: 698568.701150832,
							market_cap: 203763670,
							percent_change_1h: -0.2,
							percent_change_24h: 1.71,
							percent_change_7d: -22.13
						}
					},
					last_updated: 1542563858
				},
				{
					id: 2099,
					name: 'ICON',
					symbol: 'ICX',
					website_slug: 'icon',
					rank: 35,
					circulating_supply: 473406688,
					total_supply: 800460000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.4204966623,
							volume_24h: 4266913.71618049,
							market_cap: 199065932,
							percent_change_1h: -0.23,
							percent_change_24h: 1.59,
							percent_change_7d: -28.06
						}
					},
					last_updated: 1542563852
				},
				{
					id: 1567,
					name: 'Nano',
					symbol: 'NANO',
					website_slug: 'nano',
					rank: 36,
					circulating_supply: 133248289,
					total_supply: 133248289,
					max_supply: 133248290,
					quotes: {
						USD: {
							price: 1.4594205637,
							volume_24h: 3246992.41243643,
							market_cap: 194465293,
							percent_change_1h: 0.52,
							percent_change_24h: 9.27,
							percent_change_7d: -19.81
						}
					},
					last_updated: 1542563863
				},
				{
					id: 463,
					name: 'BitShares',
					symbol: 'BTS',
					website_slug: 'bitshares',
					rank: 37,
					circulating_supply: 2673090000,
					total_supply: 2673090000,
					max_supply: 3600570502,
					quotes: {
						USD: {
							price: 0.0714945965,
							volume_24h: 3198045.51196067,
							market_cap: 191111491,
							percent_change_1h: -0.07,
							percent_change_24h: 0.22,
							percent_change_7d: -24.11
						}
					},
					last_updated: 1542563843
				},
				{
					id: 109,
					name: 'DigiByte',
					symbol: 'DGB',
					website_slug: 'digibyte',
					rank: 38,
					circulating_supply: 11070286655,
					total_supply: 11070286655,
					max_supply: 21000000000,
					quotes: {
						USD: {
							price: 0.0168502248,
							volume_24h: 1138694.62564315,
							market_cap: 186536818,
							percent_change_1h: 0.32,
							percent_change_24h: 0.51,
							percent_change_7d: -14.09
						}
					},
					last_updated: 1542563830
				},
				{
					id: 1975,
					name: 'Chainlink',
					symbol: 'LINK',
					website_slug: 'chainlink',
					rank: 39,
					circulating_supply: 350000000,
					total_supply: 1000000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.5235738796,
							volume_24h: 3031922.83301876,
							market_cap: 183250858,
							percent_change_1h: 1.13,
							percent_change_24h: 6.75,
							percent_change_7d: 2.97
						}
					},
					last_updated: 1542563867
				},
				{
					id: 1042,
					name: 'Siacoin',
					symbol: 'SC',
					website_slug: 'siacoin',
					rank: 40,
					circulating_supply: 37992468309,
					total_supply: 37992468309,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0045598433,
							volume_24h: 835477.741195336,
							market_cap: 173239701,
							percent_change_1h: 0.34,
							percent_change_24h: 2.35,
							percent_change_7d: -23.18
						}
					},
					last_updated: 1542563855
				},
				{
					id: 1230,
					name: 'Steem',
					symbol: 'STEEM',
					website_slug: 'steem',
					rank: 41,
					circulating_supply: 289654980,
					total_supply: 306629074,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.5961861556,
							volume_24h: 3872152.12742258,
							market_cap: 172688289,
							percent_change_1h: 0.01,
							percent_change_24h: -1.77,
							percent_change_7d: -19.91
						}
					},
					last_updated: 1542563854
				},
				{
					id: 2603,
					name: 'Pundi X',
					symbol: 'NPXS',
					website_slug: 'pundi-x',
					rank: 42,
					circulating_supply: 142603994148,
					total_supply: 280255193861,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0011840331,
							volume_24h: 12211101.6986652,
							market_cap: 168847853,
							percent_change_1h: -0.89,
							percent_change_24h: 2.58,
							percent_change_7d: -23.95
						}
					},
					last_updated: 1542563867
				},
				{
					id: 2563,
					name: 'TrueUSD',
					symbol: 'TUSD',
					website_slug: 'trueusd',
					rank: 43,
					circulating_supply: 159393111,
					total_supply: 159393111,
					max_supply: null,
					quotes: {
						USD: {
							price: 1.0129243263,
							volume_24h: 13378869.8128886,
							market_cap: 161453160,
							percent_change_1h: -0.01,
							percent_change_24h: 0.02,
							percent_change_7d: 0.85
						}
					},
					last_updated: 1542563876
				},
				{
					id: 1866,
					name: 'Bytom',
					symbol: 'BTM',
					website_slug: 'bytom',
					rank: 44,
					circulating_supply: 1002499275,
					total_supply: 1407000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.157226597,
							volume_24h: 4827613.5122969,
							market_cap: 157619549,
							percent_change_1h: -0.23,
							percent_change_24h: 1.45,
							percent_change_7d: -14.94
						}
					},
					last_updated: 1542563867
				},
				{
					id: 2874,
					name: 'Aurora',
					symbol: 'AOA',
					website_slug: 'aurora',
					rank: 45,
					circulating_supply: 6542330148,
					total_supply: 10000000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0236612195,
							volume_24h: 778450.612925019,
							market_cap: 154799510,
							percent_change_1h: -0.39,
							percent_change_24h: 1.1,
							percent_change_7d: -14.18
						}
					},
					last_updated: 1542563867
				},
				{
					id: 1274,
					name: 'Waves',
					symbol: 'WAVES',
					website_slug: 'waves',
					rank: 46,
					circulating_supply: 100000000,
					total_supply: 100000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 1.5139123033,
							volume_24h: 3626648.77388006,
							market_cap: 151391230,
							percent_change_1h: 0.22,
							percent_change_24h: 1.65,
							percent_change_7d: -12.62
						}
					},
					last_updated: 1542563856
				},
				{
					id: 693,
					name: 'Verge',
					symbol: 'XVG',
					website_slug: 'verge',
					rank: 47,
					circulating_supply: 15172086051,
					total_supply: 15172086051,
					max_supply: 16555000000,
					quotes: {
						USD: {
							price: 0.0096331374,
							volume_24h: 1304306.28290173,
							market_cap: 146154790,
							percent_change_1h: 0.17,
							percent_change_24h: 0.92,
							percent_change_7d: -25.3
						}
					},
					last_updated: 1542563851
				},
				{
					id: 1703,
					name: 'Metaverse ETP',
					symbol: 'ETP',
					website_slug: 'metaverse',
					rank: 48,
					circulating_supply: 53584381,
					total_supply: 56918514,
					max_supply: 100000000,
					quotes: {
						USD: {
							price: 2.722381332,
							volume_24h: 2537333.50639374,
							market_cap: 145877118,
							percent_change_1h: 0.13,
							percent_change_24h: -2.58,
							percent_change_7d: -9.4
						}
					},
					last_updated: 1542563858
				},
				{
					id: 3408,
					name: 'USD Coin',
					symbol: 'USDC',
					website_slug: 'usd-coin',
					rank: 49,
					circulating_supply: 142776001,
					total_supply: 143122409,
					max_supply: null,
					quotes: {
						USD: {
							price: 1.0126038904,
							volume_24h: 5246214.50101379,
							market_cap: 144575534,
							percent_change_1h: -0.06,
							percent_change_24h: 0.11,
							percent_change_7d: 0.44
						}
					},
					last_updated: 1542563876
				},
				{
					id: 1789,
					name: 'Populous',
					symbol: 'PPT',
					website_slug: 'populous',
					rank: 50,
					circulating_supply: 53252246,
					total_supply: 53252246,
					max_supply: 53252246,
					quotes: {
						USD: {
							price: 2.6157765141,
							volume_24h: 1477062.96557343,
							market_cap: 139295974,
							percent_change_1h: -1.11,
							percent_change_24h: 2.07,
							percent_change_7d: -23.72
						}
					},
					last_updated: 1542563876
				},
				{
					id: 3330,
					name: 'Paxos Standard Token',
					symbol: 'PAX',
					website_slug: 'paxos-standard-token',
					rank: 51,
					circulating_supply: 135158371,
					total_supply: 135451492,
					max_supply: null,
					quotes: {
						USD: {
							price: 1.0069929663,
							volume_24h: 50043116.8441408,
							market_cap: 136103529,
							percent_change_1h: -0.05,
							percent_change_24h: -0.01,
							percent_change_7d: 0.6
						}
					},
					last_updated: 1542563880
				},
				{
					id: 1104,
					name: 'Augur',
					symbol: 'REP',
					website_slug: 'augur',
					rank: 52,
					circulating_supply: 11000000,
					total_supply: 11000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 10.949520456,
							volume_24h: 677671.159077287,
							market_cap: 120444725,
							percent_change_1h: -0.2,
							percent_change_24h: 0.82,
							percent_change_7d: -21.27
						}
					},
					last_updated: 1542563858
				},
				{
					id: 1455,
					name: 'Golem',
					symbol: 'GNT',
					website_slug: 'golem-network-tokens',
					rank: 53,
					circulating_supply: 959842000,
					total_supply: 1000000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.1223534473,
							volume_24h: 1349227.22623183,
							market_cap: 117439978,
							percent_change_1h: 0.3,
							percent_change_24h: 1.51,
							percent_change_7d: -24.99
						}
					},
					last_updated: 1542563853
				},
				{
					id: 1343,
					name: 'Stratis',
					symbol: 'STRAT',
					website_slug: 'stratis',
					rank: 54,
					circulating_supply: 99098054,
					total_supply: 99098054,
					max_supply: null,
					quotes: {
						USD: {
							price: 1.0900999128,
							volume_24h: 964860.305148291,
							market_cap: 108026780,
							percent_change_1h: -0.46,
							percent_change_24h: 5.53,
							percent_change_7d: -24.69
						}
					},
					last_updated: 1542563863
				},
				{
					id: 2682,
					name: 'Holo',
					symbol: 'HOT',
					website_slug: 'holo',
					rank: 55,
					circulating_supply: 133214575156,
					total_supply: 177619433541,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0007952696,
							volume_24h: 3398566.59198867,
							market_cap: 105941502,
							percent_change_1h: -0.13,
							percent_change_24h: 1.5,
							percent_change_7d: -20.82
						}
					},
					last_updated: 1542563861
				},
				{
					id: 2137,
					name: 'Electroneum',
					symbol: 'ETN',
					website_slug: 'electroneum',
					rank: 56,
					circulating_supply: 8359372438,
					total_supply: 8359372438,
					max_supply: 21000000000,
					quotes: {
						USD: {
							price: 0.0124612513,
							volume_24h: 319440.795303725,
							market_cap: 104168241,
							percent_change_1h: 0.05,
							percent_change_24h: -2.95,
							percent_change_7d: -16.38
						}
					},
					last_updated: 1542563861
				},
				{
					id: 1759,
					name: 'Status',
					symbol: 'SNT',
					website_slug: 'status',
					rank: 57,
					circulating_supply: 3470483788,
					total_supply: 6804870174,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0296518927,
							volume_24h: 2402542.15726427,
							market_cap: 102906413,
							percent_change_1h: -0.59,
							percent_change_24h: 0.99,
							percent_change_7d: -17.88
						}
					},
					last_updated: 1542563852
				},
				{
					id: 1521,
					name: 'Komodo',
					symbol: 'KMD',
					website_slug: 'komodo',
					rank: 58,
					circulating_supply: 110706301,
					total_supply: 110706301,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.9122725325,
							volume_24h: 253874.277332379,
							market_cap: 100994317,
							percent_change_1h: -0.85,
							percent_change_24h: 1.01,
							percent_change_7d: -22.24
						}
					},
					last_updated: 1542563854
				},
				{
					id: 291,
					name: 'MaidSafeCoin',
					symbol: 'MAID',
					website_slug: 'maidsafecoin',
					rank: 59,
					circulating_supply: 452552412,
					total_supply: 452552412,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.217382222,
							volume_24h: 527006.61268545,
							market_cap: 98376849,
							percent_change_1h: 2.53,
							percent_change_24h: 5.21,
							percent_change_7d: -12.03
						}
					},
					last_updated: 1542563833
				},
				{
					id: 2027,
					name: 'Cryptonex',
					symbol: 'CNX',
					website_slug: 'cryptonex',
					rank: 60,
					circulating_supply: 55555327,
					total_supply: 107004052,
					max_supply: 210000000,
					quotes: {
						USD: {
							price: 1.7375482871,
							volume_24h: 6123605.69604335,
							market_cap: 96530063,
							percent_change_1h: -0.01,
							percent_change_24h: 1.02,
							percent_change_7d: -11.96
						}
					},
					last_updated: 1542563854
				},
				{
					id: 2405,
					name: 'IOST',
					symbol: 'IOST',
					website_slug: 'iostoken',
					rank: 61,
					circulating_supply: 12003807131,
					total_supply: 21000000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0079826786,
							volume_24h: 3604858.1537755,
							market_cap: 95822535,
							percent_change_1h: -0.61,
							percent_change_24h: -0.24,
							percent_change_7d: -32.99
						}
					},
					last_updated: 1542563867
				},
				{
					id: 1966,
					name: 'Decentraland',
					symbol: 'MANA',
					website_slug: 'decentraland',
					rank: 62,
					circulating_supply: 1050141509,
					total_supply: 2644403343,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0880650946,
							volume_24h: 4032166.26576005,
							market_cap: 92480811,
							percent_change_1h: 0.81,
							percent_change_24h: 6.99,
							percent_change_7d: -6.92
						}
					},
					last_updated: 1542563867
				},
				{
					id: 2300,
					name: 'WAX',
					symbol: 'WAX',
					website_slug: 'wax',
					rank: 63,
					circulating_supply: 935838056,
					total_supply: 1850000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0954602648,
							volume_24h: 317774.406500794,
							market_cap: 89335349,
							percent_change_1h: -0.26,
							percent_change_24h: 1.1,
							percent_change_7d: -21.72
						}
					},
					last_updated: 1542563867
				},
				{
					id: 2087,
					name: 'KuCoin Shares',
					symbol: 'KCS',
					website_slug: 'kucoin-shares',
					rank: 64,
					circulating_supply: 90138154,
					total_supply: 180138154,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.9909977225,
							volume_24h: 102920.105117544,
							market_cap: 89326705,
							percent_change_1h: 0.76,
							percent_change_24h: 1.99,
							percent_change_7d: -11.27
						}
					},
					last_updated: 1542563872
				},
				{
					id: 2608,
					name: 'Mithril',
					symbol: 'MITH',
					website_slug: 'mithril',
					rank: 65,
					circulating_supply: 387558759,
					total_supply: 1000000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.2206617717,
							volume_24h: 10026973.0963688,
							market_cap: 85519402,
							percent_change_1h: 1.98,
							percent_change_24h: 0.03,
							percent_change_7d: -20.58
						}
					},
					last_updated: 1542563858
				},
				{
					id: 1925,
					name: 'Waltonchain',
					symbol: 'WTC',
					website_slug: 'waltonchain',
					rank: 66,
					circulating_supply: 40344109,
					total_supply: 70000000,
					max_supply: 100000000,
					quotes: {
						USD: {
							price: 2.0710963158,
							volume_24h: 10997239.0120447,
							market_cap: 83556536,
							percent_change_1h: -0.68,
							percent_change_24h: 0.07,
							percent_change_7d: -31.49
						}
					},
					last_updated: 1542563856
				},
				{
					id: 1320,
					name: 'Ardor',
					symbol: 'ARDR',
					website_slug: 'ardor',
					rank: 67,
					circulating_supply: 998999495,
					total_supply: 998999495,
					max_supply: 998999495,
					quotes: {
						USD: {
							price: 0.0807745804,
							volume_24h: 260624.858902969,
							market_cap: 80693765,
							percent_change_1h: 0.32,
							percent_change_24h: 2.24,
							percent_change_7d: -21.39
						}
					},
					last_updated: 1542563868
				},
				{
					id: 2308,
					name: 'Dai',
					symbol: 'DAI',
					website_slug: 'dai',
					rank: 68,
					circulating_supply: 76805081,
					total_supply: 76805081,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.9945150779,
							volume_24h: 4030514.10361507,
							market_cap: 76383811,
							percent_change_1h: -0.42,
							percent_change_24h: 0.11,
							percent_change_7d: -1.02
						}
					},
					last_updated: 1542563854
				},
				{
					id: 2213,
					name: 'QASH',
					symbol: 'QASH',
					website_slug: 'qash',
					rank: 69,
					circulating_supply: 350000000,
					total_supply: 1000000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.2146473801,
							volume_24h: 544647.271618913,
							market_cap: 75126583,
							percent_change_1h: -0.08,
							percent_change_24h: 0.57,
							percent_change_7d: -3.37
						}
					},
					last_updated: 1542563876
				},
				{
					id: 2502,
					name: 'Huobi Token',
					symbol: 'HT',
					website_slug: 'huobi-token',
					rank: 70,
					circulating_supply: 50000200,
					total_supply: 500000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 1.4676210145,
							volume_24h: 21453967.218319,
							market_cap: 73381344,
							percent_change_1h: -0.47,
							percent_change_24h: 10.71,
							percent_change_7d: -6.43
						}
					},
					last_updated: 1542563857
				},
				{
					id: 2403,
					name: 'MOAC',
					symbol: 'MOAC',
					website_slug: 'moac',
					rank: 71,
					circulating_supply: 62463334,
					total_supply: 151205864,
					max_supply: null,
					quotes: {
						USD: {
							price: 1.1670996123,
							volume_24h: 38690.1504033088,
							market_cap: 72900932,
							percent_change_1h: -0.19,
							percent_change_24h: -0.56,
							percent_change_7d: -4.4
						}
					},
					last_updated: 1542563872
				},
				{
					id: 2062,
					name: 'Aion',
					symbol: 'AION',
					website_slug: 'aion',
					rank: 72,
					circulating_supply: 260861920,
					total_supply: 465934587,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.2776783387,
							volume_24h: 1699261.49938539,
							market_cap: 72435705,
							percent_change_1h: -0.42,
							percent_change_24h: 1.78,
							percent_change_7d: -29.09
						}
					},
					last_updated: 1542563855
				},
				{
					id: 2606,
					name: 'Wanchain',
					symbol: 'WAN',
					website_slug: 'wanchain',
					rank: 73,
					circulating_supply: 106152493,
					total_supply: 210000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.6758348926,
							volume_24h: 2171442.23291765,
							market_cap: 71741558,
							percent_change_1h: -0.23,
							percent_change_24h: 2.33,
							percent_change_7d: -28.11
						}
					},
					last_updated: 1542563872
				},
				{
					id: 213,
					name: 'MonaCoin',
					symbol: 'MONA',
					website_slug: 'monacoin',
					rank: 74,
					circulating_supply: 63756500,
					total_supply: 63756500,
					max_supply: null,
					quotes: {
						USD: {
							price: 1.1106158935,
							volume_24h: 654606.720846713,
							market_cap: 70808982,
							percent_change_1h: -0.04,
							percent_change_24h: 1.15,
							percent_change_7d: -2.92
						}
					},
					last_updated: 1542563835
				},
				{
					id: 2135,
					name: 'Revain',
					symbol: 'R',
					website_slug: 'revain',
					rank: 75,
					circulating_supply: 384450000,
					total_supply: 484450000,
					max_supply: 484450000,
					quotes: {
						USD: {
							price: 0.1811177406,
							volume_24h: 2455189.05123445,
							market_cap: 69630715,
							percent_change_1h: 0.5,
							percent_change_24h: 7.13,
							percent_change_7d: -14.01
						}
					},
					last_updated: 1542563861
				},
				{
					id: 1727,
					name: 'Bancor',
					symbol: 'BNT',
					website_slug: 'bancor',
					rank: 76,
					circulating_supply: 64950876,
					total_supply: 77620073,
					max_supply: null,
					quotes: {
						USD: {
							price: 1.0552739068,
							volume_24h: 919403.272107168,
							market_cap: 68540964,
							percent_change_1h: -0.57,
							percent_change_24h: 1.99,
							percent_change_7d: -20.31
						}
					},
					last_updated: 1542563856
				},
				{
					id: 2694,
					name: 'Nexo',
					symbol: 'NEXO',
					website_slug: 'nexo',
					rank: 77,
					circulating_supply: 560000011,
					total_supply: 1000000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.1212856,
							volume_24h: 1984183.79446631,
							market_cap: 67919937,
							percent_change_1h: -0.76,
							percent_change_24h: -4.4,
							percent_change_7d: -12.38
						}
					},
					last_updated: 1542563872
				},
				{
					id: 1087,
					name: 'Factom',
					symbol: 'FCT',
					website_slug: 'factom',
					rank: 78,
					circulating_supply: 8745102,
					total_supply: 8745102,
					max_supply: null,
					quotes: {
						USD: {
							price: 7.4584200777,
							volume_24h: 1743414.09979793,
							market_cap: 65224644,
							percent_change_1h: 3.1,
							percent_change_24h: 26.4,
							percent_change_7d: 70.87
						}
					},
					last_updated: 1542563861
				},
				{
					id: 1750,
					name: 'GXChain',
					symbol: 'GXS',
					website_slug: 'gxchain',
					rank: 79,
					circulating_supply: 60000000,
					total_supply: 100000000,
					max_supply: 100000000,
					quotes: {
						USD: {
							price: 1.0812615649,
							volume_24h: 3496444.16565977,
							market_cap: 64875694,
							percent_change_1h: -0.11,
							percent_change_24h: -0.27,
							percent_change_7d: -15.33
						}
					},
					last_updated: 1542563856
				},
				{
					id: 2313,
					name: 'SIRIN LABS Token',
					symbol: 'SRN',
					website_slug: 'sirin-labs-token',
					rank: 80,
					circulating_supply: 491820906,
					total_supply: 572166104,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.1293881618,
							volume_24h: 3315949.6529732,
							market_cap: 63635803,
							percent_change_1h: 0.23,
							percent_change_24h: 3.06,
							percent_change_7d: -7.78
						}
					},
					last_updated: 1542563872
				},
				{
					id: 2299,
					name: 'aelf',
					symbol: 'ELF',
					website_slug: 'aelf',
					rank: 81,
					circulating_supply: 280000000,
					total_supply: 300000000,
					max_supply: 1000000000,
					quotes: {
						USD: {
							price: 0.2214174404,
							volume_24h: 2547602.52407626,
							market_cap: 61996883,
							percent_change_1h: -0.89,
							percent_change_24h: 0.2,
							percent_change_7d: -29.21
						}
					},
					last_updated: 1542563858
				},
				{
					id: 2577,
					name: 'Ravencoin',
					symbol: 'RVN',
					website_slug: 'ravencoin',
					rank: 82,
					circulating_supply: 2271290000,
					total_supply: 2271290000,
					max_supply: 21000000000,
					quotes: {
						USD: {
							price: 0.0269244041,
							volume_24h: 3628396.38376739,
							market_cap: 61153130,
							percent_change_1h: 0.89,
							percent_change_24h: 3.24,
							percent_change_7d: -30.2
						}
					},
					last_updated: 1542563861
				},
				{
					id: 2496,
					name: 'Polymath',
					symbol: 'POLY',
					website_slug: 'polymath-network',
					rank: 83,
					circulating_supply: 286737107,
					total_supply: 1000000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.2120171667,
							volume_24h: 2285383.93509541,
							market_cap: 60793189,
							percent_change_1h: -1.09,
							percent_change_24h: 2.03,
							percent_change_7d: -16.19
						}
					},
					last_updated: 1542563880
				},
				{
					id: 1229,
					name: 'DigixDAO',
					symbol: 'DGD',
					website_slug: 'digixdao',
					rank: 84,
					circulating_supply: 2000000,
					total_supply: 2000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 30.3166329793,
							volume_24h: 160055.788596147,
							market_cap: 60633266,
							percent_change_1h: -0.26,
							percent_change_24h: 0.4,
							percent_change_7d: -22.2
						}
					},
					last_updated: 1542563864
				},
				{
					id: 1169,
					name: 'PIVX',
					symbol: 'PIVX',
					website_slug: 'pivx',
					rank: 85,
					circulating_supply: 56781166,
					total_supply: 56781166,
					max_supply: null,
					quotes: {
						USD: {
							price: 1.0649380594,
							volume_24h: 236679.810635375,
							market_cap: 60468425,
							percent_change_1h: -0.19,
							percent_change_24h: 3.1,
							percent_change_7d: -20.22
						}
					},
					last_updated: 1542563858
				},
				{
					id: 1698,
					name: 'Horizen',
					symbol: 'ZEN',
					website_slug: 'zencash',
					rank: 86,
					circulating_supply: 5182288,
					total_supply: 5182288,
					max_supply: 21000000,
					quotes: {
						USD: {
							price: 11.4433861342,
							volume_24h: 1133031.16726382,
							market_cap: 59302917,
							percent_change_1h: 0.15,
							percent_change_24h: -1.19,
							percent_change_7d: -20.1
						}
					},
					last_updated: 1542563858
				},
				{
					id: 1776,
					name: 'Crypto.com',
					symbol: 'MCO',
					website_slug: 'crypto-com',
					rank: 87,
					circulating_supply: 15793831,
					total_supply: 31587682,
					max_supply: null,
					quotes: {
						USD: {
							price: 3.6758319268,
							volume_24h: 3383265.24201626,
							market_cap: 58055469,
							percent_change_1h: -0.07,
							percent_change_24h: 0.69,
							percent_change_7d: -13.51
						}
					},
					last_updated: 1542563868
				},
				{
					id: 1876,
					name: 'Dentacoin',
					symbol: 'DCN',
					website_slug: 'dentacoin',
					rank: 88,
					circulating_supply: 325226613094,
					total_supply: 1963173416169,
					max_supply: 8000000000000,
					quotes: {
						USD: {
							price: 0.000177585,
							volume_24h: 64575.7759882934,
							market_cap: 57755381,
							percent_change_1h: 2.89,
							percent_change_24h: 1.92,
							percent_change_7d: -13.38
						}
					},
					last_updated: 1542563855
				},
				{
					id: 2631,
					name: 'ODEM',
					symbol: 'ODE',
					website_slug: 'odem',
					rank: 89,
					circulating_supply: 218002386,
					total_supply: 268946131,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.2594338207,
							volume_24h: 1778577.90729629,
							market_cap: 56557192,
							percent_change_1h: -0.19,
							percent_change_24h: 2.64,
							percent_change_7d: 7.87
						}
					},
					last_updated: 1542563861
				},
				{
					id: 2349,
					name: 'Mixin',
					symbol: 'XIN',
					website_slug: 'mixin',
					rank: 90,
					circulating_supply: 444346,
					total_supply: 1000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 124.727072848,
							volume_24h: 15341.3921574024,
							market_cap: 55421926,
							percent_change_1h: -0.1,
							percent_change_24h: 4.35,
							percent_change_7d: -14.72
						}
					},
					last_updated: 1542563855
				},
				{
					id: 1934,
					name: 'Loopring',
					symbol: 'LRC',
					website_slug: 'loopring',
					rank: 91,
					circulating_supply: 788984491,
					total_supply: 1374955752,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0696950308,
							volume_24h: 426856.810455264,
							market_cap: 54988298,
							percent_change_1h: -0.56,
							percent_change_24h: 1.41,
							percent_change_7d: -29.42
						}
					},
					last_updated: 1542563858
				},
				{
					id: 118,
					name: 'ReddCoin',
					symbol: 'RDD',
					website_slug: 'reddcoin',
					rank: 92,
					circulating_supply: 28808713174,
					total_supply: 28808713174,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0019055971,
							volume_24h: 461312.891678176,
							market_cap: 54897800,
							percent_change_1h: -1.26,
							percent_change_24h: -2.36,
							percent_change_7d: -25.18
						}
					},
					last_updated: 1542563828
				},
				{
					id: 2492,
					name: 'Elastos',
					symbol: 'ELA',
					website_slug: 'elastos',
					rank: 93,
					circulating_supply: 9599802,
					total_supply: 33777123,
					max_supply: null,
					quotes: {
						USD: {
							price: 5.6715166418,
							volume_24h: 1584443.29908783,
							market_cap: 54445435,
							percent_change_1h: 1.96,
							percent_change_24h: -0.61,
							percent_change_7d: -13.88
						}
					},
					last_updated: 1542563867
				},
				{
					id: 1586,
					name: 'Ark',
					symbol: 'ARK',
					website_slug: 'ark',
					rank: 94,
					circulating_supply: 106458006,
					total_supply: 137708006,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.4995123954,
							volume_24h: 187790.408731567,
							market_cap: 53177094,
							percent_change_1h: 0.31,
							percent_change_24h: 2.94,
							percent_change_7d: -29.45
						}
					},
					last_updated: 1542563858
				},
				{
					id: 2772,
					name: 'Digitex Futures',
					symbol: 'DGTX',
					website_slug: 'digitex-futures',
					rank: 95,
					circulating_supply: 731250000,
					total_supply: 1000000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0709746688,
							volume_24h: 907121.290649125,
							market_cap: 51900227,
							percent_change_1h: -0.22,
							percent_change_24h: 30.64,
							percent_change_7d: 8.19
						}
					},
					last_updated: 1542563875
				},
				{
					id: 2095,
					name: 'BOScoin',
					symbol: 'BOS',
					website_slug: 'boscoin',
					rank: 96,
					circulating_supply: 456838751,
					total_supply: 500000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.1135688723,
							volume_24h: 125691.334817686,
							market_cap: 51882662,
							percent_change_1h: -0.4,
							percent_change_24h: 5.78,
							percent_change_7d: -6.69
						}
					},
					last_updated: 1542563861
				},
				{
					id: 3116,
					name: 'Insight Chain',
					symbol: 'INB',
					website_slug: 'insight-chain',
					rank: 97,
					circulating_supply: 170492790,
					total_supply: 10000000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.2988512419,
							volume_24h: 50631644.9828914,
							market_cap: 50951982,
							percent_change_1h: -0.09,
							percent_change_24h: -6.98,
							percent_change_7d: -14.6
						}
					},
					last_updated: 1542563876
				},
				{
					id: 1903,
					name: 'HyperCash',
					symbol: 'HC',
					website_slug: 'hypercash',
					rank: 98,
					circulating_supply: 43529781,
					total_supply: 43529781,
					max_supply: 84000000,
					quotes: {
						USD: {
							price: 1.1655051702,
							volume_24h: 234051.245613102,
							market_cap: 50734185,
							percent_change_1h: 0.17,
							percent_change_24h: 1.85,
							percent_change_7d: -32.63
						}
					},
					last_updated: 1542563867
				},
				{
					id: 1758,
					name: 'TenX',
					symbol: 'PAY',
					website_slug: 'tenx',
					rank: 99,
					circulating_supply: 109347861,
					total_supply: 205218256,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.4582706548,
							volume_24h: 560594.536922562,
							market_cap: 50110916,
							percent_change_1h: -0.17,
							percent_change_24h: 0.19,
							percent_change_7d: -17.44
						}
					},
					last_updated: 1542563854
				},
				{
					id: 2588,
					name: 'Loom Network',
					symbol: 'LOOM',
					website_slug: 'loom-network',
					rank: 100,
					circulating_supply: 603931434,
					total_supply: 1000000000,
					max_supply: null,
					quotes: {
						USD: {
							price: 0.0826860115,
							volume_24h: 882134.761149827,
							market_cap: 49936681,
							percent_change_1h: -0.27,
							percent_change_24h: 3.26,
							percent_change_7d: -26.02
						}
					},
					last_updated: 1542563867
				}
			],
			isLoadingCoins: false,
			currency: 'USD',
			fetchCoinData: () => {}
		};
		wrapper = shallow(<CryptoList cryptoStore={cryptoStore} />);
		console.log(wrapper.find(TableBody).children());
		expect(wrapper.find(TableBody).children()).toHaveLength(
			cryptoStore.coins.length
		);
	});

	it('should display loading spinner when loading coins', () => {
		cryptoStore = {
			isLoadingCoins: true,
			currency: 'USD',
			fetchCoinData: () => {}
		};
		wrapper = shallow(<CryptoList cryptoStore={cryptoStore} />);
		expect(wrapper.find(CircularProgress)).toHaveLength(1);
	});
});
