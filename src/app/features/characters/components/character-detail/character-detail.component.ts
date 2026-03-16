import { computed, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { MOCK_FACTIONS } from '../../../../core/models/faction.model';
import { MOCK_LOCATIONS } from '../../../../core/models/location.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './character-detail.component.html'
})
export class CharacterDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly charactersService = inject(CharactersService);
  private readonly factionNameById = new Map(MOCK_FACTIONS.map((faction) => [faction.id, faction.name]));
  private readonly locationNameById = new Map(MOCK_LOCATIONS.map((location) => [location.id, location.name]));

  private readonly characterId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' }
  );

  protected readonly character = computed(() => this.charactersService.getCharacterById(this.characterId()));
  protected readonly factionName = computed(() => {
    const currentCharacter = this.character();
    if (!currentCharacter) {
      return 'Unknown Faction';
    }

    return this.factionNameById.get(currentCharacter.factionId) ?? 'Unknown Faction';
  });

  protected readonly locationName = computed(() => {
    const currentCharacter = this.character();
    if (!currentCharacter) {
      return 'Unknown Location';
    }

    return this.locationNameById.get(currentCharacter.locationId) ?? 'Unknown Location';
  });
}
