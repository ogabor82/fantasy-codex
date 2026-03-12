import { Component, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {
  private readonly charactersService = inject(CharactersService);

  protected readonly characters = this.charactersService.getCharacters();
}
