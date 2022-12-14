import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistedAuthReducer } from './authSlice';
import { rateReducer } from './rateSlice';

const testPersistConfig = {
  key: 'test',
  storage,
};

export const store = configureStore({
  reducer: {
    test: persistReducer(testPersistConfig, () => {
      return null;
    }),
    auth: persistedAuthReducer,
    rate: rateReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
