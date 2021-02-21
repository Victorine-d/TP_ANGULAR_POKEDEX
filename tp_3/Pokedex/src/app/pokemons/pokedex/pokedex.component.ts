import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  private idPokemon=0;
  constructor() { }

  ngOnInit(): void {
  }

  public onChangeSelectedPokemon(idPokemon: number): void {
    this.idPokemon = idPokemon;
	}

}
