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
        <Route path="/pokemon/:pokemonUrl">
          <PokemonView />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
