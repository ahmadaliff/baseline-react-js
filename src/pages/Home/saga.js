import { call, put, takeLatest } from 'redux-saga/effects';
// import { setLoading } from '@containers/App/actions';
import { apiGetMerchants } from '@domain/api';
import { GET_DATA } from './constants';
import { actionSetData } from './actions';

function* sagaGetData() {
  // yield put(setLoading(true));
  try {
    const response = yield call(apiGetMerchants, null);
    yield put(actionSetData(response.data));
  } catch (error) {
    console.log(error);
  }
  // yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(GET_DATA, sagaGetData);
}
