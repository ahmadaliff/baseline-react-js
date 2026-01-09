import { GET_DATA, RESET_DATA, SET_DATA } from './constants';

export const actionGetData = () => ({
  type: GET_DATA,
});

export const actionSetData = (data) => ({
  type: SET_DATA,
  data,
});

export const actionResetData = () => ({
  type: RESET_DATA,
});
