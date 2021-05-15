const { createSlice } = require('@reduxjs/toolkit');

const counterSlice = createSlice({
  name: 'counter',
  initialState: 1,
  reducers: {
    increment: (state) => {
      return (state += 1);
    },
    decrement: (state) => {
      return (state -= 1);
    },
  },
});

const { reducer, actions } = counterSlice;
export const { increment, decrement } = actions;
export default reducer;
