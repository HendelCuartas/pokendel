
import { action, makeObservable, observable, runInAction } from "mobx";
import { Pokemon } from "./appTypes";

export class AppState {
  pokemonList: Array<Pokemon> = [];

  setPokemonsList = (pokemonList: Array<Pokemon>) => {
    this.pokemonList = pokemonList;
  };

  fetchPokemonList = async (url: string) => {
    try {
      let response = await fetch(url);
      let data = await response.json() as any;
      const arrayPokemon: Array<Pokemon> = data.results.map((el: any) => {
        return {
          name: el.name,
          url: el.url,
        }
      })
      runInAction(() => {
        this.setPokemonsList(arrayPokemon);
      });
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  constructor() {
    makeObservable(this, {
      pokemonList: observable,
      setPokemonsList: action,
      fetchPokemonList: action,
    });
  }
}