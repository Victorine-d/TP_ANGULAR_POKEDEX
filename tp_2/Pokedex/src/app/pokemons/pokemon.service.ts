import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private pokemonURL ="http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons";
  private pokemonCount = 151;

  constructor(private http : HttpClient) { }

  getPokemons(limit: number){
    return this.http.get<{data:[]}>(this.pokemonURL+ "?limit="+ limit, {
      'responseType': "json"
    });
  }
  getPokemon(id : number) {
    return this.http.get(this.pokemonURL + '/'+ id, {
      'responseType': "json"
    });

  }
}
