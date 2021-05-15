import ListPage from 'feature/Product/pages/ListPage';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      ProductFeature
      <Switch>
        <Route path={match.url} exact component={ListPage} />
      </Switch>
    </div>
  );
}

export default ProductFeature;
