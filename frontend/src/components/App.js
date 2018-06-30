import React, { Component } from 'react';
import Menu from './menu';
import Page from './page';
import './style.css';
/* import Grid from '@material-ui/core/Grid';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import NavBar from '../containers/navBar';
import Router from './router'; */

class App extends Component {
  render() {
    return (
      <div class="ct" id="t1">
        <div class="ct" id="t2">
          <div class="ct" id="t3">
            <div class="ct" id="t4">
              <Menu/>
              <Page/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

/* const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
    },
  },
});

const styles = theme => ({
  root: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: '10%',
    padding: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      marginTop: '15%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '12%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '8%',
    },
  },
});

const App = ({ classes }) => (
  <div>
    <MuiThemeProvider theme={theme}>
      <NavBar />
      <div className={classes.root}>
        <Grid container spacing={0} direction="row" align="center" justify="center">
          <Grid item xs={24} sm={9}>
            <Router />
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  </div>
);

App.propTypes = {
  classes: PropTypes.objectOf(String).isRequired,
};

export default withStyles(styles)(App); */


