import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: {},
};

export const getGreetings = createAsyncThunk(

  'greeting/getGreetings',
  async () => {
    const data = await fetch('http://localhost:3000/api/v1/greetings/random').then((response) => response.json());
    return data;
  },
);

export const greetings = createSlice(
  {
    name: 'greetings',
    initialState,
    reducers: {
      STOREGREETING(state, action) {
        const gstate = state;
        gstate.message = action.payload;
      },
    },
    extraReducers: {
      [getGreetings.fulfilled]: (state, action) => {
        const details = action.payload;
        const gstate = state;
        gstate.message = details;
      },
    },
  },
);

export const { STOREGREETING } = greetings.actions;

export default greetings.reducer;
