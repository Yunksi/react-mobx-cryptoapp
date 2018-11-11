import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ToolbarMenu from './ToolbarMenu';
import { Link } from 'react-router-dom';

export class CustomAppBar extends Component {
  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link
              to="/"
              style={{ flexGrow: 1, color: 'white', textDecoration: 'none' }}
            >
              <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                CryptoApp
              </Typography>
            </Link>

            <ToolbarMenu />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default CustomAppBar;
