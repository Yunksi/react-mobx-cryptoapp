import { observable, configure, decorate, action, runInAction } from 'mobx';
import Axios from 'axios';

const BASE_API_URL = 'https://api.coinmarketcap.com/v2';

configure({ enforceActions: 'observed' });

class CryptoStore {
  coins = [];
  isLoadingCoins = true;
  anchorEl = null;
  currency = 'USD';

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

  setCoins = data => {
    this.coins = data.data;
    console.log(data.data);
    this.isLoadingCoins = false;
  };

  openMenu = e => {
    this.anchorEl = e;
  };

  closeMenu = selectedCurrency => {
    switch (selectedCurrency) {
      case 'USD':
        this.currency = 'USD';
        this.fetchCoinData();
        break;
      case 'EUR':
        this.currency = 'EUR';
        this.fetchCoinData();
        break;
      case 'CNY':
        this.currency = 'CNY';
        this.fetchCoinData();
        break;
      default:
        break;
    }
    this.anchorEl = null;
  };
}

decorate(CryptoStore, {
  coins: observable,
  isLoadingCoins: observable,
  isMenuOpen: observable,
  anchorEl: observable,
  currency: observable,
  fetchCoinData: action,
  openMenu: action,
  closeMenu: action
});

var store = (window.store = new CryptoStore());

export default store;
