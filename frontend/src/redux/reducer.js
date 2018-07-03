import { combineReducers } from 'redux';
import global from './globalModule';
import ramen from './ramenModule';
import image from './imageModule';

export default combineReducers({
  global,
  ramen,
  image,
});
