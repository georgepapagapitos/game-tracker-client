import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import MyGames from './pages/MyGames/MyGames';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/games'>
          <MyGames />
        </Route>
      </Switch>
    </Router>
  );
}