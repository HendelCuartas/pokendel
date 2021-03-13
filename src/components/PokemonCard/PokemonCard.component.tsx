import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import "./pokemonCard.styles.scss";
import { PokemonCardState } from "./PokemonCardState";

interface PokemonCardProps {
  pokemonUrl: string;
}

const PokemonCard: React.FC<PokemonCardProps> = observer(({ pokemonUrl }) => {
  const [state] = useState(new PokemonCardState());

  useEffect(() => {
    const setPokemonData = async () => {
      await state.fetchPokemonData(pokemonUrl);
    };
    setPokemonData();
  }, [state, pokemonUrl]);

  return (
    <div className="containerCard">
      <img src={state.getPokemonImageUrl()} alt="a nice pokemon" />
      <h1>{`${state.pokemonData?.name}`}</h1>
      <h4>{`Peso: ${state.pokemonData?.weight}lb`}</h4>
      <h4>{`Alto : ${state.pokemonData?.height}ft`}</h4>
      <h4>
        {`Tipos: ${state.pokemonData?.types.map((el: any) => el.type.name)}`}
      </h4>
    </div>
  );
});

export default PokemonCard;
