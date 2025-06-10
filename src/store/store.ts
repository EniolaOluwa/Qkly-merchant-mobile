import {configureStore} from '@reduxjs/toolkit';

import {persistStore} from 'redux-persist';

import {rootReducer} from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: __DEV__,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    });

    return middlewares.concat([]);
  },
});

export const persistor = persistStore(store);
