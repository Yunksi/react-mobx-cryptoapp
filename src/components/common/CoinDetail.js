import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FormattedNumber } from 'react-intl';

function CoinDetail(props) {
	return (
		<Fragment>
			<Grid item xs={6} sm={3}>
				<Typography variant="h6">{props.headerString}</Typography>
				<Typography variant="subtitle1">
					<FormattedNumber
						value={props.value}
						style={props.isCurrency ? 'currency' : undefined}
						minimumFractionDigits={0}
						maximumFractionDigits={0}
						currency={props.isCurrency ? props.currency : undefined}
					/>
					{props.coinSymbol ? props.coinSymbol : ''}
				</Typography>
			</Grid>
		</Fragment>
	);
}

CoinDetail.propTypes = {
	headerString: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	currency: PropTypes.string,
	isCurrency: PropTypes.bool,
	coinSymbol: PropTypes.string
};

export default CoinDetail;
