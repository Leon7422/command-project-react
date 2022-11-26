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

    const persistedRefreshToken = state.auth.refreshToken;
    const persistedSid = { sid: state.auth.sid };

    if (!persistedRefreshToken) {
      return thunkAPI.rejectWithValue();
    }

    try {
      token.set(persistedRefreshToken);
      const { data } = await axios.post('/auth/refresh', persistedSid); // {SID}

      token.set(data.newAccessToken);

      return data;
    } catch (error) {}
  }
);

const productFinder = createAsyncThunk(
  'products/search',
  async (querry, thunkAPI) => {
    try {
      if (querry.length < 2) {
        return thunkAPI.rejectWithValue();
      }
      const { data } = await axios.get(`/product?search=${querry}`); //
      return data;
    } catch (error) {}
  }
);

const productAddToList = createAsyncThunk(
  'products/add',
  async (productInfo, thunkAPI) => {
    try {
      const { data } = await axios.post('/day', productInfo);
      return data;
    } catch (error) {}
  }
);

const fetchCurrentDateInfo = createAsyncThunk(
  'productsDate/info',
  async (currentDate, thunkAPI) => {
    try {
      const { data } = await axios.post('/day/info', currentDate);
      return data;
    } catch (error) {}
  }
);

const deleteProduct = createAsyncThunk(
  'product/delete',
  async (productInfo, thunkAPI) => {
    try {
      const { data } = await axios.delete('/day', productInfo);
      return data;
    } catch (error) {}
  }
);

const operations = {
  register,
  login,
  logOut,
  fetchCurrentUser,
  productFinder,
  productAddToList,
  fetchCurrentDateInfo,
  deleteProduct,
};

export default operations;
