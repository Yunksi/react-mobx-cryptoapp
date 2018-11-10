import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class CustomAppBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              CryptoApp
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default CustomAppBar;
