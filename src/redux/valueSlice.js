const { createSlice } = require('@reduxjs/toolkit');

export const valueSlice = createSlice({
  name: 'value',
  initialState: 0,
  reducers: {
    increment: state => {
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

export const { increment, decrement, update } = valueSlice.actions;

export default valueSlice.reducer;
