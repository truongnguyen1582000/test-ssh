import './style.css';
import TodoItem from '../TodoItem';

function TodoList({ todos, onTodoClick }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li className="todo-item" key={todo.id} onClick={() => onTodoClick(todo.id)}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
