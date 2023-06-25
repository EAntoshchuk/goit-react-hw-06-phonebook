import { persistStore, persistReducer } from 'redux-persist';
import { storage } from 'redux-persist/lib/storage';

const { createSlice } = require('@reduxjs/toolkit');

export const valueSlice = createSlice({
  name: 'value',
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    update(state) {
      state.value += 1;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const valueReducer = persistReducer(persistConfig, valueSlice.reducer);

export const { increment, decrement, update } = valueSlice.actions;
