import Counter from 'feature/Counter';
import ProductFeature from 'feature/Product';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import AlbumFeature from './feature/Album';
import TodoFeature from './feature/Todo';

export default function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />
        <Route path="/counter" component={Counter} />
        <Route path="/counter" component={Counter} />
        <Route path="/products" component={ProductFeature} />

        <Redirect from="/" to="/home" exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
