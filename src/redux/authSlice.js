import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import operations from './operations';

const initialState = {
  user: { name: null, email: null, id: '' },
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
      state.user.name = action.payload.user.username;
      state.user.email = action.payload.user.email;
      state.user.id = action.payload.user.id;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      state.isLoggedIn = true;
    },
    [operations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null, id: '' };
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      state.isLoggedIn = false;
    },
    [operations.fetchCurrentUser.pending](state, action) {
      state.isLoading = true;
    },
    [operations.fetchCurrentUser.fulfilled](state, action) {
      state.accessToken = action.payload?.newAccessToken;
      state.refreshToken = action.payload?.newRefreshToken;
      state.sid = action.payload?.sid;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [operations.fetchCurrentUser.rejected](state) {
      state.isLoading = false;
    },
    [operations.userInfo.fulfilled](state, action) {
      state.user.id = action.payload?.id;
      state.user.name = action.payload?.username;
      state.user.email = action.payload?.email;
    },
    [operations.userInfo.rejected](state, action) {},
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
