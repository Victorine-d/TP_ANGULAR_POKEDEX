import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  pokemonURL ="http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons";
  private pokemonCount = 151;

  constructor(private http : HttpClient) { }

  getPokemons(limit: any){
    let params = new HttpParams();

    if(limit){
      params = params.set('limit', limit);
    }
    return this.http.get<{data:[]}>(this.pokemonURL,{params});
  }
  getPokemon(id : number) {
    return this.http.get(this.pokemonURL + '/'+ id, {
      'responseType': "json"
    });
  }
  searchPokemon (value : any, limit: any){
    let params = new HttpParams();
    if(limit){
      params = params.set('limit', limit);
    }

    if(value){
      params=params.set('search',value)
    }
    return this.http.get<{data:[]}>(this.pokemonURL,{params});
  }
}