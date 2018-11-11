import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { FormattedNumber } from 'react-intl';
import { inject, observer } from 'mobx-react';

export class CoinValueInfo extends Component {
  render() {
    const { btc, coin, currency } = this.props;
    return (
      <Grid item xs={12} sm={6}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <h1>
              <FormattedNumber
                value={coin.quotes[currency].price}
                // eslint-disable-next-line react/style-prop-object
                style="currency"
                currency={currency}
              />
            </h1>
            <h2
              style={{
                marginLeft: '0.5em',
                color: this.props.cryptoStore.percentChangeClass
              }}
            >
              ({coin.quotes[currency].percent_change_24h}%)
            </h2>
          </div>
          <div>
            <p style={{ margin: 0 }}>
              Price change 1h:
              <span
                style={{
                  marginLeft: '0.5em',
                  color:
                    coin.quotes[currency].percent_change_1h > 0
                      ? 'green'
                      : 'red'
                }}
              >
                {coin.quotes[currency].percent_change_1h}%
              </span>
            </p>
            <p style={{ margin: 0 }}>
              Price change 7d:
              <span
                style={{
                  marginLeft: '0.5em',
                  color:
                    coin.quotes[currency].percent_change_7d > 0
                      ? 'green'
                      : 'red'
                }}
              >
                {coin.quotes[currency].percent_change_7d}%
              </span>
            </p>
            <p style={{ margin: 0 }}>
              <FormattedNumber
                value={btc ? btc.price : 0}
                minimumFractionDigits={8}
              />
              <span style={{ marginLeft: '0.5em' }}>BTC</span>
              <span
                style={{
                  marginLeft: '0.2em',
                  color:
                    (btc ? btc.percent_change_24h : 0) > 0 ? 'green' : 'red'
                }}
              >
                (
                <FormattedNumber
                  value={btc ? btc.percent_change_24h : 0}
                  minimumFractionDigits={2}
                />
                %)
              </span>
            </p>
          </div>
        </div>
      </Grid>
    );
  }
}

export default inject('cryptoStore')(observer(CoinValueInfo));
