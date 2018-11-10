import { observable, configure, decorate, action, runInAction } from 'mobx';
import Axios from 'axios';

const BASE_API_URL = 'https://api.coinmarketcap.com/v1';

configure({ enforceActions: 'observed' });

class CryptoStore {
  coins = [];

  fetchCoinData = () => {
    Axios.get(`${BASE_API_URL}/ticker/`).then(res => {
      runInAction(() => {
        this.setCoins(res.data);
      });
    });
  };

  setCoins = data => {
    this.coins = data;
  };
}

decorate(CryptoStore, {
  coins: observable,
  fetchCoinData: action
});

var store = (window.store = new CryptoStore());

export default store;
