import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const initialState = {
    user: {}
}

const rateSlice = createSlice({
    name: 'rate',
    initialState,
    extraReducers: {
        [operations.dailyRate.fulfilled](state, action) {
            state.user = action.payload;
        }
    }
});

export const rateReducer = rateSlice.reducer;