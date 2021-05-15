import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import Selector from '../../components/Selectors';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import { addTodo, completeTodo } from '../../TodoSlice';

function ListPage() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  const handleTodoClick = (id) => {
    dispatch(completeTodo(id));
  };

  const renderedTodo = todos.filter(
    (todo) => filteredStatus === 'all' || filteredStatus === todo.status
  );

  const handleSelectorClick = (status) => {
    const queryParams = { status: status };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoFormSubmit = (value) => {
    dispatch(addTodo(value));
  };

  (() => {
    console.log(location.search.slice(location.search.indexOf('=') + 1));
  })();

  return (
    <div>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={renderedTodo} onTodoClick={handleTodoClick} />
      <Selector onSelectorClick={handleSelectorClick} location={location.search} />
    </div>
  );
}

export default ListPage;
