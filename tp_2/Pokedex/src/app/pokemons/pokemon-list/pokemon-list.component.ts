import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

const POKEMON_NB = 50;

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {
  pokemonList:[] = [];
  private limit = POKEMON_NB;

  constructor(private PokemonService : PokemonService) { }

  ngOnInit(): void {
    this.PokemonService.getPokemons(POKEMON_NB).subscribe(pokemonList => {
			this.pokemonList = pokemonList.data});
  }
  
  onScroll() {
    this.limit += POKEMON_NB;
    this.PokemonService.getPokemons(this.limit).subscribe(pokemonList => {
			this.pokemonList = pokemonList.data});
  }

}
