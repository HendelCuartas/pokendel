export const POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=9';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonData {
  name: string;
  id: string;
  weight: number;
  height: number;
  types: Array<string>;
}


export const homeStrings = {
  title: "Pokedex",
  inputLabel: "Busca tu pokemon",
  inputPlaceholder: "Pikachu",
};

