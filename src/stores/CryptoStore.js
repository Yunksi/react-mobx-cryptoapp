import { observable, configure, action, runInAction, computed } from 'mobx';
import Axios from 'axios';

const BASE_API_URL = 'https://api.coinmarketcap.com/v2';

configure({ enforceActions: 'observed' });

class CryptoStore {
	@observable coins = [];
	@observable isLoadingCoins = true;
	@observable anchorEl = null;
	@observable currency = 'USD';
	@observable selectedCoin = null;
	@observable loadingCoinDetails = true;
	@observable coinBTCData = null;

	@action
	async fetchCoinData() {
		this.isLoadingCoins = true;
		const coins = await Axios.get(
			`${BASE_API_URL}/ticker/?convert=${this.currency}&structure=array`
		);
		runInAction(() => {
			this.setCoins(coins.data);
		});
	}

	@action
	async fetchSingleCoin(coinId) {
		this.loadingCoinDetails = true;
		var coin = await Axios.get(
			`${BASE_API_URL}/ticker/${coinId}/?convert=${this.currency}`
		);
		runInAction(() => {
			this.setCoin(coin.data.data);
		});
	}

	@action
	async fetchSingleCoinBTCPrice(coinId) {
		var btcCoin = await Axios.get(
			`${BASE_API_URL}/ticker/${coinId}/?convert=BTC`
		);
		runInAction(() => {
			this.setCoinBTCdata(btcCoin.data.data.quotes.BTC);
		});
	}

	setCoinBTCdata = data => {
		this.coinBTCData = data;
	};

	setCoin = data => {
		this.selectedCoin = data;
		this.loadingCoinDetails = false;
	};

	setCoins = data => {
		this.coins = data.data;
		this.isLoadingCoins = false;
	};

	@action
	openMenu = e => {
		this.anchorEl = e;
	};

	@action
	closeMenu = selectedCurrency => {
		switch (selectedCurrency) {
			case 'USD':
				this.currency = 'USD';
				break;
			case 'EUR':
				this.currency = 'EUR';
				break;
			case 'CNY':
				this.currency = 'CNY';
				break;
			default:
				break;
		}
		this.anchorEl = null;
		this.fetchCoinData();
		if (this.selectedCoin) {
			this.fetchSingleCoin(this.selectedCoin.id);
		}
	};

	@computed
	get percentChangeClass() {
		if (this.selectedCoin)
			return this.selectedCoin.quotes[this.currency].percent_change_24h > 0
				? 'green'
				: 'red';
		return 'red';
	}
}

var store = new CryptoStore();

export default store;
