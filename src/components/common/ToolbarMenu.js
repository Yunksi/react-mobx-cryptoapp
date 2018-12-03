import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { inject, observer } from 'mobx-react';

@inject('cryptoStore')
@observer
class ToolbarMenu extends React.Component {
	handleClick = event => {
		this.props.cryptoStore.openMenu(event.currentTarget);
	};

	handleClose = selectedCurrency => {
		this.props.cryptoStore.closeMenu(selectedCurrency);
	};

	render() {
		const { anchorEl } = this.props.cryptoStore;

		return (
			<div>
				<IconButton
					aria-owns={anchorEl ? 'simple-menu' : undefined}
					aria-haspopup="true"
					onClick={this.handleClick}
					color="inherit"
				>
					<Icon>more_vert</Icon>
				</IconButton>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleClose}
				>
					<MenuItem onClick={this.handleClose.bind(this, 'USD')}>USD</MenuItem>
					<MenuItem onClick={this.handleClose.bind(this, 'EUR')}>EUR</MenuItem>
					<MenuItem onClick={this.handleClose.bind(this, 'CNY')}>CNY</MenuItem>
				</Menu>
			</div>
		);
	}
}

export default ToolbarMenu;
