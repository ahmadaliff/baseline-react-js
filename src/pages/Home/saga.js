import { call, put, takeLatest } from 'redux-saga/effects';
// import { apiGetMerchants } from '@domain/api';
import { getData, setData } from './slice';

function* sagaGetData() {
  // yield put(setLoading(true));
  try {
    // const response = yield call(apiGetMerchants, null);
    // yield put(setData(response.data));
    yield put(setData([]));
  } catch (error) {
    console.log(error);
  }
  // yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(getData.type, sagaGetData);
}
