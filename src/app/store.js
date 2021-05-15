import CounterReducer from '../feature/Counter/CounterSlice';
import TodoReducer from '../feature/Todo/TodoSlice';
import UserSlice from '../feature/Auth/userSlice';
const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    todos: TodoReducer,
    counter: CounterReducer,
    user: UserSlice,
  },
});

export default store;
