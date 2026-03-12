import { Component, computed, inject, signal } from '@angular/core';
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

type SortOption = 'Recently Added' | 'Name (A-Z)' | 'Faction';

@Component({
  selector: 'app-character-list',
  standalone: true,
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {
  private readonly charactersService = inject(CharactersService);
  private readonly factionNameById = new Map(MOCK_FACTIONS.map((faction) => [faction.id, faction.name]));
  private readonly locationNameById = new Map(MOCK_LOCATIONS.map((location) => [location.id, location.name]));
  private readonly allCharacters: CharacterListItem[] = this.charactersService.getCharacters().map((character) => ({
    id: character.id,
    name: character.name,
    title: character.title,
    race: character.race,
    shortDescription: character.shortDescription,
    portraitUrl: character.portraitUrl,
    factionName: this.factionNameById.get(character.factionId) ?? 'Unknown Faction',
    locationName: this.locationNameById.get(character.locationId) ?? 'Unknown Location'
  }));

  protected readonly sortOptions: SortOption[] = ['Recently Added', 'Name (A-Z)', 'Faction'];
  protected readonly pageSize = 6;

  protected readonly searchQuery = signal('');
  protected readonly sortBy = signal<SortOption>('Recently Added');
  protected readonly currentPage = signal(1);

  protected readonly filteredCharacters = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const sort = this.sortBy();

    const visible = this.allCharacters.filter((character) => {
      if (!query) {
        return true;
      }

      return (
        character.name.toLowerCase().includes(query) ||
        character.title.toLowerCase().includes(query) ||
        character.race.toLowerCase().includes(query) ||
        character.factionName.toLowerCase().includes(query) ||
        character.locationName.toLowerCase().includes(query)
      );
    });

    if (sort === 'Name (A-Z)') {
      return [...visible].sort((left, right) => left.name.localeCompare(right.name));
    }

    if (sort === 'Faction') {
      return [...visible].sort((left, right) => left.factionName.localeCompare(right.factionName));
    }

    return visible;
  });

  protected readonly totalPages = computed(() => Math.max(1, Math.ceil(this.filteredCharacters().length / this.pageSize)));
  protected readonly pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, index) => index + 1));

  protected readonly pagedCharacters = computed(() => {
    const page = Math.min(this.currentPage(), this.totalPages());
    const startIndex = (page - 1) * this.pageSize;
    return this.filteredCharacters().slice(startIndex, startIndex + this.pageSize);
  });

  protected onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.searchQuery.set(query);
    this.currentPage.set(1);
  }

  protected onSortChange(event: Event): void {
    const nextSort = (event.target as HTMLSelectElement).value as SortOption;
    if (!this.sortOptions.includes(nextSort)) {
      return;
    }

    this.sortBy.set(nextSort);
    this.currentPage.set(1);
  }

  protected goToPage(page: number): void {
    if (page < 1 || page > this.totalPages()) {
      return;
    }

    this.currentPage.set(page);
  }

  protected goToPreviousPage(): void {
    this.goToPage(this.currentPage() - 1);
  }

  protected goToNextPage(): void {
    this.goToPage(this.currentPage() + 1);
  }
}
