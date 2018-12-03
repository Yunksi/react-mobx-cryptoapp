import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import CoinMarketInfo from './CoinMarketInfo';
import CoinValueInfo from './CoinValueInfo';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

@inject('cryptoStore')
@observer
class CryptoDetails extends Component {
	componentDidMount = () => {
		const coinId = this.props.match.params.id;
		this.props.cryptoStore.fetchSingleCoin(coinId);
		this.props.cryptoStore.fetchSingleCoinBTCPrice(coinId);
	};

	refreshCoin = () => {
		this.props.cryptoStore.fetchSingleCoin(this.props.match.params.id);
	};

	render() {
		const {
			selectedCoin,
			currency,
			loadingCoinDetails,
			coinBTCData
		} = this.props.cryptoStore;
		const coinLogo = `https://s2.coinmarketcap.com/static/img/coins/32x32/${
			this.props.match.params.id
		}.png`;

		return (
			<div style={{ marginLeft: '0.5em', marginRight: '0.5em' }}>
				{!loadingCoinDetails ? (
					<Fragment>
						<Grid
							container
							direction="row"
							justify="flex-end"
							style={{ marginTop: '1em' }}
						>
							<Button
								color="primary"
								variant="contained"
								onClick={this.refreshCoin}
							>
								Refresh
								<Icon>refresh</Icon>
							</Button>
						</Grid>
						<Grid container spacing={8}>
							<Grid item xs={12} sm={6}>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										flexDirection: 'row',
										marginLeft: '0.5em'
									}}
								>
									<img
										src={coinLogo}
										alt="coin logo"
										height="32"
										width="32"
										style={{ marginRight: '4px' }}
									/>
									<h1>
										{selectedCoin.name} ({selectedCoin.symbol}) #
										{selectedCoin.rank}
									</h1>
								</div>
							</Grid>
							<CoinValueInfo
								btc={coinBTCData}
								currency={currency}
								coin={selectedCoin}
							/>
							<CoinMarketInfo currency={currency} coin={selectedCoin} />
						</Grid>
					</Fragment>
				) : (
					<div>
						<CircularProgress />
					</div>
				)}
			</div>
		);
	}
}

export default CryptoDetails;
