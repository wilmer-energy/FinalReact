import { createSlice } from '@reduxjs/toolkit';

export const isLoading = createSlice({
    name: 'isLoading',
    initialState: true,
    reducers: {

    }
})

export const {  } = isLoading.actions;

export default isLoading.reducer;
