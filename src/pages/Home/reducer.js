import { produce } from 'immer';
import { RESET_DATA, SET_DATA } from './constants';

export const initialState = {
  data: [],
};

export const storedKey = ['data'];

export const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_DATA:
        draft.data = action.data;
        break;
      case RESET_DATA:
        return initialState;
    }
  });

export default homeReducer;
