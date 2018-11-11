import {
  observable,
  configure,
  decorate,
  action,
  runInAction,
  computed
} from 'mobx';
import Axios from 'axios';

const BASE_API_URL = 'https://api.coinmarketcap.com/v2';

configure({ enforceActions: 'observed' });

class CryptoStore {
  coins = [];
  isLoadingCoins = true;
  anchorEl = null;
  currency = 'USD';
  selectedCoin = null;
  loadingCoinDetails = true;
  coinBTCData = null;

  fetchCoinData = () => {
    this.isLoadingCoins = true;
    Axios.get(
      `${BASE_API_URL}/ticker/?convert=${this.currency}&structure=array`
    ).then(res => {
      runInAction(() => {
        this.setCoins(res.data);
      });
    });
  };

  fetchSingleCoin = coinId => {
    this.loadingCoinDetails = true;
    Axios.get(
      `${BASE_API_URL}/ticker/${coinId}/?convert=${this.currency}`
    ).then(res => {
      runInAction(() => {
        this.setCoin(res.data.data);
      });
    });
  };

  fetchSingleCoinBTCPrice = coinId => {
    Axios.get(`${BASE_API_URL}/ticker/${coinId}/?convert=BTC`).then(res => {
      runInAction(() => {
        this.setCoinBTCdata(res.data.data.quotes.BTC);
      });
    });
  };

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

  openMenu = e => {
    this.anchorEl = e;
  };

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

  get percentChangeClass() {
    if (this.selectedCoin)
      return this.selectedCoin.quotes[this.currency].percent_change_24h > 0
        ? 'green'
        : 'red';
    return 'red';
  }
}

decorate(CryptoStore, {
  coins: observable,
  isLoadingCoins: observable,
  isMenuOpen: observable,
  anchorEl: observable,
  currency: observable,
  selectedCoin: observable,
  loadingCoinDetails: observable,
  coinBTCData: observable,
  fetchCoinData: action,
  openMenu: action,
  closeMenu: action,
  fetchSingleCoin: action,
  percentChangeClass: computed
});

var store = new CryptoStore();

export default store;
