import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() idPokemon: number =0;
  private pokemon= {};
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private location: Location) { }

  ngOnInit(): void {
    
  }

  getPokemon(): void {
    this.pokemonService.getPokemon(this.idPokemon).subscribe(pokemon => this.pokemon = pokemon);
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
  ngOnChanges(changes : SimpleChanges):void{
    this.getPokemon();
  }

}
