import { Component, inject } from '@angular/core';
import { MOCK_FACTIONS } from '../../../../core/models/faction.model';
import { MOCK_LOCATIONS } from '../../../../core/models/location.model';
import { CharactersService } from '../../services/characters.service';

interface CharacterListItem {
  id: string;
  name: string;
  title: string;
  race: string;
  shortDescription: string;
  portraitUrl: string;
  factionName: string;
  locationName: string;
}

@Component({
  selector: 'app-character-list',
  standalone: true,
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {
  private readonly charactersService = inject(CharactersService);
  private readonly factionNameById = new Map(MOCK_FACTIONS.map((faction) => [faction.id, faction.name]));
  private readonly locationNameById = new Map(MOCK_LOCATIONS.map((location) => [location.id, location.name]));

  protected readonly sortBy = 'Recently Added';
  protected readonly characters: CharacterListItem[] = this.charactersService.getCharacters().map((character) => ({
    id: character.id,
    name: character.name,
    title: character.title,
    race: character.race,
    shortDescription: character.shortDescription,
    portraitUrl: character.portraitUrl,
    factionName: this.factionNameById.get(character.factionId) ?? 'Unknown Faction',
    locationName: this.locationNameById.get(character.locationId) ?? 'Unknown Location'
  }));
}
