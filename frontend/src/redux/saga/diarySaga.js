import { put, take, call, select } from 'redux-saga/effects';
import { get, post } from '../../api';
import { actionsTypes as globalActionsTypes } from '../globalModule';
import { actionsTypes as diaryActionsTypes } from '../diaryModule';

export function* commitRamen(id, data) {
  yield put({ type: globalActionsTypes.FETCH_START });
  try {
    return yield call(post, `/diary/${id}/newRamenRecord`, data);
  } catch (error) {
    console.log(error);
    return yield put({ code: 2, message: '網路異常，請稍候重試' });
  } finally {
    yield put({ type: globalActionsTypes.FETCH_END });
  }
}

export function* commitRamenFlow() {
  while (true) {
    const req = yield take(diaryActionsTypes.COMMIT_RAMEN);
    const id = yield select(state => state.global.userInfo.userId);
    if (!id || id.length === 0) {
      yield put({
        type: globalActionsTypes.SET_MESSAGE,
        msgContent: '登入逾期，請重新登入',
        isReqSuccess: false,
        code: 1,
      });
      yield put({ type: globalActionsTypes.CLEAR_USER_INFO });
      yield put({ type: globalActionsTypes.FETCH_END });
      return;
    }
    const res = yield call(commitRamen, id, req.data);
    console.log(res);
    if (res) {
      const isReqSuccess = (res.code === 0);
      yield put({
        type: globalActionsTypes.SET_MESSAGE,
        msgContent: res.message,
        isReqSuccess,
        code: res.code,
      });
      if (res.code === 0) {
        // socket.createSocket();
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

export function* fetchDiary(id) {
  yield put({ type: globalActionsTypes.FETCH_START });
  try {
    return yield call(get, `/diary/${id}`);
  } catch (error) {
    console.log(error);
    return yield put({ code: 2, message: '網路異常，請稍候重試' });
  } finally {
    yield put({ type: globalActionsTypes.FETCH_END });
  }
}

export function* fetchDiaryFlow() {
  while (true) {
    const req = yield take(diaryActionsTypes.FETCH_DIARY);
    const id = yield select(state => state.global.userInfo.userId);
    const res = yield call(fetchDiary, id);
    if (res) {
      const isReqSuccess = (res.code === 0);
      yield put({
        type: globalActionsTypes.SET_MESSAGE,
        msgContent: res.message,
        isReqSuccess,
        code: res.code,
      });
      if (res.code === 0) {
        yield put({ type: diaryActionsTypes.RECIEVE_DIARY, data: res.data });
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

export function* addFavorite() {
  while (true) {
    const req = yield take(diaryActionsTypes.ADD_FAVORITE);
    try {
      yield put({ type: globalActionsTypes.FETCH_START });
      const id = yield select(state => state.global.userInfo.userId);
      if (!id || id.length === 0) {
        yield put({
          type: globalActionsTypes.SET_MESSAGE,
          msgContent: '登入逾期，請重新登入',
          isReqSuccess: false,
          code: 1,
        });
        yield put({ type: globalActionsTypes.CLEAR_USER_INFO });
        yield put({ type: globalActionsTypes.FETCH_END });
        return;
      }
      console.log(req.favoriteRamenId);
      const res = yield call(post, `/diary/${id}/favorite`, req);
      if (res) {
        const isReqSuccess = res.code === 0;
        yield put({
          type: globalActionsTypes.SET_MESSAGE,
          msgContent: res.message,
          isReqSuccess,
          code: res.code,
        });
      } else {
        yield put({
          type: globalActionsTypes.SET_MESSAGE,
          msgContent: '登入逾期，請重新登入',
          isReqSuccess: false,
          code: 1,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      yield put({ type: globalActionsTypes.FETCH_END });
    }
  }
}
