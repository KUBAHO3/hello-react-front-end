import { createSlice } from '@reduxjs/toolkit';
import { fetchGreeting } from './api';

const initialState = {
  greeting: {},
  isLoading: false,
  error: undefined,
};

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    setGreeting: (state, action) => {
      state.greeting = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setGreeting } = greetingSlice.actions;
