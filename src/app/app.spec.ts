import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the shell title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.brand-title')?.textContent).toContain('Fantasy Codex');
  });

  it('should include navigation links for all top-level routes', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const links = [...fixture.nativeElement.querySelectorAll('nav a')] as HTMLAnchorElement[];
    const hrefs = links.map((link) => link.getAttribute('href'));

    expect(hrefs).toEqual(['/', '/characters', '/factions', '/locations']);
  });

  it('should render the dashboard route by default', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl('/');
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('World Overview');
  });
});
