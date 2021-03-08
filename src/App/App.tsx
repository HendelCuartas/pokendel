import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Home from 'screens/home';
import PokemonView from 'screens/pokemon';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/pokemon">
          <PokemonView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
