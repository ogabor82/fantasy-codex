import { Component } from '@angular/core';
import { CharacterListComponent } from '../components/character-list/character-list.component';

@Component({
  selector: 'app-characters-page',
  standalone: true,
  imports: [CharacterListComponent],
  template: `
    <app-character-list></app-character-list>
  `
})
export class CharactersPageComponent {}
