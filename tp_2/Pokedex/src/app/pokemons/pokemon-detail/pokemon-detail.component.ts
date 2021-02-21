import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  private pokemon= {};
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private location: Location) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.pokemonService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack(): void {
    this.location.back();
  }
  play(id: number){
    let audio = new Audio();
    audio.src= '../../assets/audio/'+ id + '.mp3';
    audio.load();
    audio.play();
  }

}
