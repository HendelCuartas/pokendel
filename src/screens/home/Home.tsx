import PokemonContainer from 'components/PokemonContainer';
import './home.styles.css';
import PokemonCard from 'components/PokemonCard';
import { useEffect, useState } from 'react';
import { HomeState } from './HomeState';
import { observer } from 'mobx-react-lite';
import { homeStrings, POKEMONS_URL } from 'screens/home/homeData';
import { Link } from 'react-router-dom';

const Home: React.FC = observer(() => {
  const [state] = useState(new HomeState());

  useEffect(() => {
    const fetchData = async () => {
      await state.fetchPokemonList(POKEMONS_URL);
    }
    fetchData();
  }, [state]);

  return (
    <div className="home">
      <h1 className="homeTitle">{homeStrings.title}</h1>
      <PokemonContainer>
        {
          state.pokemonList.map((el, idx) => (
            <Link to={`/pokemon/${encodeURIComponent(el.url)}`} className="homeLink" key={`PokemonCard-${idx}`}>
              <PokemonCard pokemonUrl={el.url} />
            </Link>
          ))
        }
      </PokemonContainer>
    </div>
  );
});

export default Home;
