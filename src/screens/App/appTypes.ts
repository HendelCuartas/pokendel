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
