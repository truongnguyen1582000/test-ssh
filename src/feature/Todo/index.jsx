import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

function TodoFeature() {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
