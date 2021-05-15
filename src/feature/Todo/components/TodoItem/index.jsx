import './style.css';

function TodoItem({ todo }) {
  return <span className={todo.status === 'completed' ? 'active-item' : ''}>{todo.title}</span>;
}

export default TodoItem;
