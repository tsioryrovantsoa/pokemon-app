import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit{
  pokemon: Pokemon[];

  constructor(private router:Router,private pokemonService: PokemonService){

  }

  ngOnInit(): void {
      this.pokemonService.getPokemonList().subscribe(pokemonList => this.pokemon = pokemonList);
  }

  goToPokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemon',pokemon.id]);
  }
}
