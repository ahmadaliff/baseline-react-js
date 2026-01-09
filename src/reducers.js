import { combineReducers } from 'redux';

import homeReducer, { storedKey as storedhomeState } from '@pages/Home/reducer';
import storage from 'redux-persist/lib/storage';
import { mapWithPersistor } from './persistence';

import languageReducer from '@containers/Language/reducer';
import { persistReducer } from 'redux-persist';

const storedReducers = {
  home: { reducer: homeReducer, whitelist: storedhomeState },
};

const rootPeristConfig = {
  key: 'root',
  storage,
  whitelist: Object.keys(storedReducers),
};

const temporaryReducers = {
  language: languageReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default persistReducer(rootPeristConfig, createReducer());
