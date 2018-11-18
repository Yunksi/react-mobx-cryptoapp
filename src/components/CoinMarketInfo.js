import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FormattedNumber } from 'react-intl';
import { PropTypes } from 'prop-types';

export class CoinMarketInfo extends Component {
  render() {
    const { coin, currency } = this.props;
    return (
      <Fragment>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6">Market cap</Typography>
          <Typography variant="subtitle1">
            <FormattedNumber
              value={coin.quotes[currency].market_cap}
              // eslint-disable-next-line react/style-prop-object
              style="currency"
              minimumFractionDigits={0}
              maximumFractionDigits={0}
              currency={currency}
            />
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6">Volume 24h</Typography>
          <Typography variant="subtitle1">
            <FormattedNumber
              value={coin.quotes[currency].volume_24h}
              // eslint-disable-next-line react/style-prop-object
              style="currency"
              minimumFractionDigits={0}
              maximumFractionDigits={0}
              currency={currency}
            />
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6">Circulating supply</Typography>
          <Typography variant="subtitle1">
            <FormattedNumber
              value={coin.circulating_supply}
              minimumFractionDigits={0}
              maximumFractionDigits={0}
            />
            {coin.symbol}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6">Max supply</Typography>
          <Typography variant="subtitle1">
            <FormattedNumber
              value={coin.max_supply}
              minimumFractionDigits={0}
              maximumFractionDigits={0}
            />
            {coin.symbol}
          </Typography>
        </Grid>
      </Fragment>
    );
  }
}

CoinMarketInfo.propTypes = {
  coin: PropTypes.object.isRequired,
  currency: PropTypes.string.isRequired
};

export default CoinMarketInfo;
