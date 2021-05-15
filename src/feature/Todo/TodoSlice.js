import shortid from 'shortid';
const { createSlice } = require('@reduxjs/toolkit');

const TodoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: shortid.generate(),
        title: action.payload.title,
        status: 'new',
      };

      state.push(newTodo);
    },
    completeTodo: (state, action) => {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload);

      state[todoIndex].status = state[todoIndex].status === 'new' ? 'completed' : 'new';
    },
  },
});
const { reducer, actions } = TodoSlice;
export const { addTodo, completeTodo } = actions;
export default reducer;
