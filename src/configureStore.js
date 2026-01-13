import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import persistedReducer from './reducers';
import rootSaga from './rootSaga';
import { configureStore } from '@reduxjs/toolkit';

const storeConfig = () => {
  const reduxSagaMonitorOptions = {
    effectMiddlewares: [],
  };

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const store = configureStore({
    reducer: persistedReducer,
    preloadedState: {},
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware)
  })
  store.runSaga = sagaMiddleware.run;

  // run saga
  store.runSaga(rootSaga);
  return store;
};

const store = storeConfig();

export default store;
export const persistor = persistStore(store);
