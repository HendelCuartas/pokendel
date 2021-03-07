import { useEffect, useState } from "react";
import "./pokemonCard.styles.scss";
import { PokemonCardState } from "./PokemonCardState";

interface PokemonCardProps {
  pokemonUrl: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemonUrl,
}) => {
  const [state] = useState(new PokemonCardState());

  useEffect(() => {
    const setPokemonData = async () => {
      const pokemonData = await state.fetchPokemonData(pokemonUrl);
      state.setPokemonData(pokemonData);
    }
    setPokemonData();
  });

  return <div className="containerCard">
    <img src={state.getPokemonImageUrl()} alt="a nice pokemon" />
    <h1>
      {`Nombre: ${state.pokemonData?.name}`}
    </h1>
    <h3>
      {`Peso: ${state.pokemonData?.weight}lb`}
    </h3>
    <h4>
      {`Alto : ${state.pokemonData?.height}ft`}
    </h4>
    <h4>
      {`Tipos: ${state.pokemonData?.types.map((el: any, index: number, array: any) =>
        index !== array.length - 1 ? el.type.name + "/" : el.type.name)}`}
    </h4>
  </div>;
}

export default PokemonCard;
