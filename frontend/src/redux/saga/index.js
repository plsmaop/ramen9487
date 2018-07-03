import { fork } from 'redux-saga/effects';
import {
  loginFlow, registerFlow, userAuth, logout,
} from './globalSaga';
import {
  getRestaurantListFlow, getRestaurantFlow, getRestaurantReviewsFlow,
  postReviewFlow, uploadImageFlow, postNewRestaurantFlow,
} from './ramenSaga';

export default function* rootSaga() {
  yield fork(loginFlow);
  yield fork(registerFlow);
  yield fork(userAuth);
  yield fork(logout);
  yield fork(getRestaurantListFlow);
  yield fork(getRestaurantFlow);
  yield fork(getRestaurantReviewsFlow);
  yield fork(postReviewFlow);
  yield fork(uploadImageFlow);
  yield fork(postNewRestaurantFlow);
}
