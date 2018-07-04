import { combineReducers } from 'redux';
import global from './globalModule';
import ramen from './ramenModule';
import image from './imageModule';
import diary from './diaryModule';

export default combineReducers({
  global,
  ramen,
  image,
  diary,
});
