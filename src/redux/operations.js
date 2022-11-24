import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/auth/register', credentials); // {email, password, username}
    return data;
  } catch (error) {}
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/auth/login', credentials); // {email, password}
    token.set(data.accessToken);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/auth/logout'); //
    token.unset();
    return data;
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    console.log(state);

    const persistedRefreshToken = state.auth.refreshToken;
    const persistedSid = { sid: state.auth.sid };
    console.log(persistedSid);

    if (!persistedRefreshToken) {
      return thunkAPI.rejectWithValue();
    }

    try {
      token.set(persistedRefreshToken);
      console.log(token);
      const { data } = await axios.post('/auth/refresh', persistedSid); // {SID}
      console.log(data);
      token.set(data.newAccessToken);

      console.log(data.newAccessToken);

      return data;
    } catch (error) {}
  }
);

const operations = {
  register,
  login,
  logOut,
  fetchCurrentUser,
};

export default operations;
