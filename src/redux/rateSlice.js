import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const initialState = {
    userInfo: {}
}

const rateSlice = createSlice({
    name: 'rate',
    initialState,
    extraReducers: {
        [operations.dailyRate.fulfilled](state, action) {
            state.userInfo = action.payload;
        }
    }
});

export const rateReducer = rateSlice.reducer;