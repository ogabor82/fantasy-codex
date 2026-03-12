import { Component } from '@angular/core';

@Component({
  selector: 'app-locations-page',
  standalone: true,
  template: `
    <section class="space-y-3">
      <p class="text-xs uppercase tracking-[0.08em] text-gray-400">Locations</p>
      <h1 class="text-3xl font-semibold text-gray-50">Location List</h1>
      <p class="text-gray-300">Location feature landing page for upcoming list and detail views.</p>
    </section>
  `
})
export class LocationsPageComponent {}
