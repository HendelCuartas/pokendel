import { Link, useParams } from "react-router-dom";

interface PokemonViewParams {
  pokemonUrl: string;
}

const PokemonView: React.FC = () => {
  const { pokemonUrl } = useParams<PokemonViewParams>();

  return (
    <div>
      <h1>POKEMON VIEW</h1>
      <p>
        {pokemonUrl}
      </p>
      <Link to="/">
        VOLVER
      </Link>
    </div>
  )
}

export default PokemonView;
