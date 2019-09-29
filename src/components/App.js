import React from 'react';
import Router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faSubway, faTag, faUser, faTimes, faSortUp, faSortDown, faAddressBook,faDatabase,faSpinner,faBars} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faSubway, faTag, faUser, faTimes, faSortUp, faSortDown, faAddressBook,faDatabase,faSpinner,faBars);

const App = () => (
  //<div>
    <Router />
  //</div>
);

export default App;
