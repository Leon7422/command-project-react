import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import operations from './operations';

const initialState = {
  user: { name: null, email: null },
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.register.fulfilled](state, action) {},
    [operations.login.fulfilled](state, action) {
      state.user = action.payload;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      state.isLoggedIn = true;
    },
    [operations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      state.isLoggedIn = false;
    },
    [operations.fetchCurrentUser.pending](state, action) {
      state.isLoading = true;
    },
    [operations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.accessToken = action.payload.newAccessToken;
      state.refreshToken = action.payload.newRefreshToken;
      state.sid = action.payload.sid;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [operations.fetchCurrentUser.rejected](state) {
      state.isLoading = false;
    },
  },
});

const persistConfigContacts = {
  key: 'user',
  storage,
  whitelist: ['refreshToken', 'sid'],
};

export const persistedAuthReducer = persistReducer(
  persistConfigContacts,
  authSlice.reducer
);
