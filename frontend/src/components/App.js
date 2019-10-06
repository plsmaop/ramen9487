import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faStore, faMapMarkerAlt, faPhone, faPaperclip,
  faUtensils, faDollarSign, faImages,
} from '@fortawesome/free-solid-svg-icons';
import Menu from './menu';
import Page from './page';
import Router from './router';
import './style.css';
/* import Grid from '@material-ui/core/Grid';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import NavBar from '../containers/navBar';
// import Router from './router'; */

library.add(faStore, faMapMarkerAlt, faPhone, faPaperclip, faUtensils, faDollarSign, faImages);

const App = () => (
  <div className="ct" id="t1">
    <div className="ct" id="t2">
      <div className="ct" id="t3">
        <div className="ct" id="t4">
          <Menu />
          <Router />
        </div>
      </div>
    </div>
  </div>
);

export default App;
