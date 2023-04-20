import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemon: Pokemon[] = POKEMONS;

  constructor(private router:Router){

  }

  goToPokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemon',pokemon.id]);
  }
}
