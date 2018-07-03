import { take, call, put, select } from 'redux-saga/effects';
import { get, post, del, patch, upload } from '../../api';
import { actionsTypes as globalActionsTypes } from '../globalModule';
import { actionsTypes as ramenActionsTypes } from '../ramenModule';
import { actionsTypes as imageActionsTypes } from '../imageModule';

export function* postReview(id, content) {
  yield put({ type: globalActionsTypes.FETCH_START });
  try {
    /* const title = yield select(state => state.article.articleDraft.title);
    const content = yield select(state => state.article.articleDraft.content);
    const id = yield select(state => state.article.articleDraft.id);
    const partialContent = yield select(state => state.article.articleDraft.partialContent);
    const dateTime = Date.now();
    const timestamp = Math.floor(dateTime / 1000); */
    const data = {
      ...content,
      time: new Date(),
      timestamp: Math.floor(Date.now() / 1000),
    };
    /* if (id) {
      return yield call(post, '/article/updateArticle', data);
    } else {
      return yield call(post, '/article/addArticle', data);
    } */
    return yield call(post, `/ramen/restaurant/${id}/review`, data);
  } catch (err) {
    console.log(err);
    return yield put({ code: 2, message: '網路異常，請稍候重試' });
  } finally {
    yield put({ type: globalActionsTypes.FETCH_END });
  }
}

export function* postReviewFlow() {
  while (true) {
    const req = yield take(ramenActionsTypes.POST_REVIEW);
    if (1) {
      const res = yield call(postReview, req.id, req.content);
      if (res) {
        if (res.code === 0) {
          yield put({
            type: globalActionsTypes.SET_MESSAGE,
            msgContent: res.message,
            isReqSuccess: true,
            code: res.code,
          });
          yield put({
            type: ramenActionsTypes.RECIEVE_REVIEW,
            data: res.data,
          });
          // yield put({ type: ArticleActionsTypes.CLEAR_DRAFT });
        } else if (res.code === 1) {
          // 請重新登入
          yield put({ type: globalActionsTypes.CLEAR_USER_INFO });
          yield put({
            type: globalActionsTypes.SET_MESSAGE,
            msgContent: res.message,
            isReqSuccess: false,
            code: res.code,
          });
        } else {
          yield put({
            type: globalActionsTypes.SET_MESSAGE,
            msgContent: res.message,
            isReqSuccess: false,
            code: res.code,
          });
        }
      }
    }
  }
}

export function* getRestaurantList(page, number, searchConditions) {
  yield put({ type: globalActionsTypes.FETCH_START });
  try {
    return yield call(get, '/ramen/restaurant/ramenRestaurantList', { page, number, searchConditions });
  } catch (err) {
    return yield put({ code: 2, message: '網路異常，請稍候重試' });
  } finally {
    yield put({ type: globalActionsTypes.FETCH_END });
  }
}

export function* getRestaurantListFlow() {
  while (true) {
    const req = yield take(ramenActionsTypes.GET_RESTAURANT_LIST);
    const res = yield call(getRestaurantList, req.page, req.number, req.searchConditions);
    if (res) {
      if (res.code === 0) {
        yield put({ type: ramenActionsTypes.RECIEVE_RESTAURANT_LIST, data: res.data });
        yield put({
          type: globalActionsTypes.SET_MESSAGE,
          msgContent: res.message,
          isReqSuccess: true,
          code: res.code,
        });
      } else {
        yield put({
          type: globalActionsTypes.SET_MESSAGE,
          msgContent: res.message,
          isReqSuccess: false,
          code: res.code,
        });
      }
    }
  }
}

export function* delArticle(id) {
  yield put({ type: globalActionsTypes.FETCH_START });
  try {
    return yield call(del, `/article/${id}`);
  } catch (err) {
    return yield put({ code: 2, message: '網路異常，請稍候重試' });
  } finally {
    yield put({ type: globalActionsTypes.FETCH_END });
  }
}

export function* getRestaurant(id) {
  yield put({ type: globalActionsTypes.FETCH_START });
  try {
    return yield call(get, `/ramen/restaurant/${id}`);
  } catch (err) {
    return yield put({ code: 2, message: '網路異常，請稍候重試' });
  } finally {
    yield put({ type: globalActionsTypes.FETCH_END });
  }
}

export function* getRestaurantFlow() {
  while (true) {
    const req = yield take(ramenActionsTypes.GET_RESTAURANT);
    const res = yield call(getRestaurant, req.id);
    if (res) {
      if (res.code === 0) {
        yield put({ type: ramenActionsTypes.RECIEVE_RESTAURANT, data: res.data });
        yield put({
          type: globalActionsTypes.SET_MESSAGE,
          msgContent: res.message,
          isReqSuccess: true,
          code: res.code,
        });
      } else {
        yield put({
          type: globalActionsTypes.SET_MESSAGE,
          msgContent: res.message,
          isReqSuccess: false,
          code: res.code,
        });
      }
    } else {
      yield put({
        type: globalActionsTypes.SET_MESSAGE,
        msgContent: '網路異常，請稍候重試',
        isReqSuccess: false,
        code: 2,
      });
    }
  }
}

export function* getRestaurantReviews(id) {
  yield put({ type: globalActionsTypes.FETCH_START });
  try {
    return yield call(get, `/ramen/restaurant/${id}/reviews`);
  } catch (err) {
    return yield put({ code: 2, message: '網路異常，請稍候重試' });
  } finally {
    yield put({ type: globalActionsTypes.FETCH_END });
  }
}

export function* getRestaurantReviewsFlow() {
  while (true) {
    const req = yield take(ramenActionsTypes.GET_RESTAURANT_REVIEWS);
    const res = yield call(getRestaurantReviews, req.id);
    if (res) {
      if (res.code === 0) {
        yield put({ type: ramenActionsTypes.RECIEVE_RESTAURANT_REVIEWS, data: res.data });
        yield put({
          type: globalActionsTypes.SET_MESSAGE,
          msgContent: res.message,
          isReqSuccess: true,
          code: res.code,
        });
      } else {
        yield put({
          type: globalActionsTypes.SET_MESSAGE,
          msgContent: res.message,
          isReqSuccess: false,
          code: res.code,
        });
      }
    } else {
      yield put({
        type: globalActionsTypes.SET_MESSAGE,
        msgContent: '網路異常，請稍候重試',
        isReqSuccess: false,
        code: 2,
      });
    }
  }
}

export function* uploadImage(id, data) {
  yield put({ type: globalActionsTypes.FETCH_START });
  try {
    return yield call(upload, `/image/${id}/newImage`, data);
  } catch (err) {
    return yield put({ code: 2, message: '網路異常，請稍候重試' });
  } finally {
    yield put({ type: globalActionsTypes.FETCH_END });
  }
}

export function* uploadImageFlow() {
  while (true) {
    const req = yield take(imageActionsTypes.UPLOAD_IMAGE);
    const data = yield select(state => state.image.uploadedData);
    const id = yield select(state => state.global.userInfo.userId);
    const res = yield call(uploadImage, id, data);
    if (res) {
      if (res.code === 0) {
        yield put({ type: imageActionsTypes.RECIEVE_IMAGE, data: res.data });
        yield put({
          type: globalActionsTypes.SET_MESSAGE,
          msgContent: res.message,
          isReqSuccess: true,
          code: res.code,
        });
      } else {
        yield put({
          type: globalActionsTypes.SET_MESSAGE,
          msgContent: res.message,
          isReqSuccess: false,
          code: res.code,
        });
      }
    } else {
      yield put({
        type: globalActionsTypes.SET_MESSAGE,
        msgContent: '網路異常，請稍候重試',
        isReqSuccess: false,
        code: 2,
      });
    }
  }
}