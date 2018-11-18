import { observe, useStrict, configure } from 'mobx';
import CryptoStore from './CryptoStore';

describe('CryptoStore', () => {
	let cryptoStore;
	beforeEach(() => {
		configure({ enforceActions: 'never' });
	});

	it('makes isLoadingCoins observable', () => {
		cryptoStore = CryptoStore;

		let isObserved = false;
		const observation = observe(cryptoStore, changes => {
			isObserved = true;
		});

		cryptoStore.isLoadingCoins = false;
		expect(isObserved).toEqual(true);
	});
});
