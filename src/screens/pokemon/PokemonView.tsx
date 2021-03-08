import { useParams } from "react-router-dom";

interface PokemonViewParams {
  pokemonUrl: string;
}

const PokemonView: React.FC = () => {
  const { pokemonUrl } = useParams<PokemonViewParams>();

  console.log("is here")
  return (
    <div>
      <h1>POKEMON VIEW</h1>
      <p>
        {pokemonUrl}
      </p>
    </div>
  )
}

export default PokemonView;
