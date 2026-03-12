import { Injectable } from '@angular/core';
import { Character, MOCK_CHARACTERS } from '../../../core/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  getCharacters(): Character[] {
    return MOCK_CHARACTERS;
  }
}
