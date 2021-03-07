import PokemonContainer from 'components/PokemonContainer';
import './App.styles.css';
import PokemonCard from 'components/PokemonCard';
import { useEffect, useState } from 'react';
import { AppState } from './AppState';
import { observer } from 'mobx-react-lite';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=9';

const App: React.FC = observer(() => {
  const [state] = useState(new AppState());

  useEffect(() => {
    state.fetchPokemonList(url);
  });

  return (
    <div className="App">
      <PokemonContainer>
        {
          state.pokemonList.map((el, idx) => <PokemonCard pokemonUrl={el.url} key={`PokemonCard-${idx}`} />)
        }
      </PokemonContainer>
    </div>
  );
});

export default App;