import { Routes } from '@angular/router';
import { CharacterDetailComponent } from './features/characters/components/character-detail/character-detail.component';
import { CharactersPageComponent } from './features/characters/pages/characters-page.component';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page.component';
import { FactionsPageComponent } from './features/factions/pages/factions-page.component';
import { LocationsPageComponent } from './features/locations/pages/locations-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent
  },
  {
    path: 'characters',
    component: CharactersPageComponent
  },
  {
    path: 'characters/:id',
    component: CharacterDetailComponent
  },
  {
    path: 'factions',
    component: FactionsPageComponent
  },
  {
    path: 'locations',
    component: LocationsPageComponent
  }
];
