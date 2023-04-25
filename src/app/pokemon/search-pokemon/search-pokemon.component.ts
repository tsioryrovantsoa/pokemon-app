import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from "rxjs";
import { Router } from "@angular/router";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-search-pokemon",
  templateUrl: "./search-pokemon.component.html",
  styles: [],
})
export class SearchPokemonComponent implements OnInit {
  //{...."a"...."ab"..."abz"..."ab"..."abc"...}
  searchTerms = new Subject<string>();
  //{...pokemonList(a)...pokemonList(ab)}
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    //this.pokemon.subscribe
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.pokemonService.searchPokemonList(term))
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ["/pokemon", pokemon.id];
    this.router.navigate(link);
  }
}
