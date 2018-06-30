import { combineReducers } from 'redux';
import global from './globalModule';
import ramen from './ramenModule';

export default combineReducers({
  global,
  ramen,
});
