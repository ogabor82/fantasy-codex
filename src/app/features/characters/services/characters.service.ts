import { Injectable } from '@angular/core';
import { Character, MOCK_CHARACTERS } from '../../../core/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  getCharacters(): Character[] {
    return MOCK_CHARACTERS;
  }

  getCharacterById(id: string): Character | undefined {
    return MOCK_CHARACTERS.find((character) => character.id === id);
  }
}
