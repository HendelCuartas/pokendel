import { action, makeObservable, observable } from "mobx";
import { PokemonData } from "screens/home/homeData";


export class PokemonCardState {
  pokemonData?: PokemonData;

  setPokemonData = (pokemonData: PokemonData) => {
    this.pokemonData = pokemonData;
  };

  fetchPokemonData = async (url: string) => {
    try {
      let response = await fetch(url);
      let data = await response.json() as any;

      const arrayPokemonData: PokemonData = {
        name: data.name,
        id: data.id,
        weight: data.weight,
        height: data.height,
        types: data.types,
      }

      return arrayPokemonData;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  getPokemonImageUrl = () => {
    return `https://pokeres.bastionbot.org/images/pokemon/${this.pokemonData?.id}.png`;
  }

  constructor() {
    makeObservable(this, {
      pokemonData: observable,
      setPokemonData: action,
      fetchPokemonData: action,
    });
  }
}