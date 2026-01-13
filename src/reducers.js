
import languageReducer from '@containers/Language/slice';

import { mapWithPersistor } from './persistence';
import { combineReducers } from '@reduxjs/toolkit';

import homeReducer, { storedKey as storedhomeState } from '@pages/Home/slice';
const storedReducers = {
  home: { reducer: homeReducer, whitelist: storedhomeState },
};

const temporaryReducers = {
  language: languageReducer,
};

const rootReducer = combineReducers({
  ...mapWithPersistor(storedReducers),
  ...temporaryReducers,
});

export default rootReducer;
