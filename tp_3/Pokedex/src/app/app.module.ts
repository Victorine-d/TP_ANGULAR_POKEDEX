import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PokedexComponent } from './pokemons/pokedex/pokedex.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,  
    PokedexComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatSidenavModule]
})
export class AppModule { }
export class MaterialModule {}
