import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_CHARACTERS } from '../../../core/models/character.model';
import { MOCK_FACTIONS } from '../../../core/models/faction.model';
import { MOCK_LOCATIONS } from '../../../core/models/location.model';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: 'dashboard-page.component.html'
})
export class DashboardPageComponent {
  protected readonly stats = [
    {
      label: 'Total Characters',
      value: MOCK_CHARACTERS.length,
      meta: `+${MOCK_CHARACTERS.length} active entries`,
      icon: 'users'
    },
    {
      label: 'Total Factions',
      value: MOCK_FACTIONS.length,
      meta: `${MOCK_FACTIONS[0]?.name} and allies`,
      icon: 'castle'
    },
    {
      label: 'Total Locations',
      value: MOCK_LOCATIONS.length,
      meta: `${MOCK_LOCATIONS[0]?.region} highlighted`,
      icon: 'compass'
    }
  ];

  protected readonly recentCharacters = MOCK_CHARACTERS.map((character, index) => ({
    ...character,
    updatedLabel: ['Updated 2 hours ago', 'Updated 5 hours ago', 'Updated 1 day ago'][index] ?? 'Updated recently'
  }));

  protected readonly activeRegion = MOCK_LOCATIONS[0];
  protected readonly activeFaction = MOCK_FACTIONS[0];

  protected readonly popularTags = [
    MOCK_FACTIONS[1]?.type.toUpperCase(),
    MOCK_FACTIONS[2]?.name.toUpperCase(),
    MOCK_LOCATIONS[0]?.region.toUpperCase(),
    MOCK_LOCATIONS[1]?.name.toUpperCase(),
    MOCK_CHARACTERS[0]?.race.toUpperCase()
  ].filter(Boolean);
}
