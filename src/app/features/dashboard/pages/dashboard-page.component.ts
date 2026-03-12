import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  template: `
    <section class="space-y-3">
      <p class="text-xs uppercase tracking-[0.08em] text-gray-400">Dashboard</p>
      <h1 class="text-3xl font-semibold text-gray-50">Fantasy Codex</h1>
      <p class="max-w-2xl text-gray-300">
        Welcome to the codex dashboard. Use the navigation to manage characters, factions, and locations.
      </p>
    </section>
  `
})
export class DashboardPageComponent {}
