# Fantasy Codex — Project Context

## Project Overview

Fantasy Codex is a small Angular learning project built to practice modern Angular architecture using standalone components, routing, services, reactive forms, and later signals.

The application is a lightweight worldbuilding codex where users can manage three core fantasy entities:

* Characters
* Factions
* Locations

The app should feel like a small admin-style CRUD application with a simple fantasy skin, not a game UI.

This project is intentionally small, educational, and built in baby steps.

## Primary Learning Goals

The purpose of the project is to relearn modern Angular by building something interesting but still manageable.

Core goals:

1. Practice standalone components
2. Practice Angular routing and route parameters
3. Practice service-based data access with dependency injection
4. Practice reactive forms
5. Practice feature-based project structure
6. Introduce Angular signals later for local state and derived state
7. Build a clean, maintainable codebase that AI tools can understand easily

## Product Goal

Build a minimal Fantasy Codex app where a user can:

* view lists of characters, factions, and locations
* open detail pages
* create new entries
* edit existing entries
* search entries, starting with characters

This is not a public content site, not a wiki engine, and not a multiplayer editor.
It is a small single-user admin-style Angular app for learning.

## Scope: Version 1

### Included in V1

#### Dashboard

* simple landing page
* app title and short description
* quick navigation cards or links
* stats: number of characters, factions, locations

#### Characters

* list page
* search by name
* detail page
* create page
* edit page

#### Factions

* list page
* detail page
* create page
* edit page

#### Locations

* list page
* detail page
* create page
* edit page

### Explicitly Excluded from V1

* authentication
* backend API
* database
* drag and drop
* map editor
* timeline
* rich text editor
* image upload
* advanced relationship graphs
* comments or collaboration
* game mechanics

## Core Domain Model

### Character

```ts
export interface Character {
  id: string;
  name: string;
  title: string;
  race: string;
  factionId: string;
  locationId: string;
  shortDescription: string;
}
```

### Faction

```ts
export interface Faction {
  id: string;
  name: string;
  type: string;
  description: string;
}
```

### Location

```ts
export interface Location {
  id: string;
  name: string;
  region: string;
  description: string;
}
```

## App Flow

The app should follow a simple pattern:

list → detail → create/edit

This flow is intentionally chosen because it is ideal for learning Angular fundamentals.

## Routing Plan

```text
/                      -> Dashboard
/characters            -> Character list
/characters/new        -> Create character
/characters/:id        -> Character detail
/characters/:id/edit   -> Edit character

/factions              -> Faction list
/factions/new          -> Create faction
/factions/:id          -> Faction detail
/factions/:id/edit     -> Edit faction

/locations             -> Location list
/locations/new         -> Create location
/locations/:id         -> Location detail
/locations/:id/edit    -> Edit location
```

## Technical Direction

### Framework and Language

* Angular
* TypeScript
* Angular CLI

### Angular Concepts to Practice

* standalone components
* Angular Router
* route params
* dependency injection
* services
* reactive forms
* built-in control flow
* later: signals, computed values, effects

### Data Source Strategy

Initial version:

* mock data
* in-memory services

Possible later improvements:

* localStorage persistence
* fake REST API
* NestJS backend

## Architecture Principles

### 1. Feature-Based Folder Structure

Prefer organizing by feature, not by file type.

Target structure:

```text
src/
  app/
    core/
    shared/
    features/
      dashboard/
      characters/
      factions/
      locations/
    app.routes.ts
    app.component.ts
```

### 2. Standalone First

Use standalone components everywhere unless there is a very strong reason not to.

### 3. Simple Service Layer

Each main feature can have its own service, or the project can start with a single codex data service and split later if needed.

Examples:

* CharactersService
* FactionsService
* LocationsService

or initially:

* CodexDataService

### 4. Keep UI Simple

Do not overinvest in visual complexity early.

Preferred style:

* clean layout
* card-based lists
* simple forms
* subtle fantasy flavor
* functional over decorative

## UX / UI Direction

The UI should feel like:

* a clean admin panel
* slightly fantasy-themed
* easy to navigate
* focused on readability

Avoid:

* overdesigned medieval UI
* game inventory style layout
* heavy ornamentation that slows development

## Development Method

This project is built in small baby steps.
Each step should be small, testable, and easy to understand.

Planned learning flow:

1. define scope
2. define models and mock data
3. initialize Angular app
4. create layout and navigation
5. configure routing
6. build character list page
7. build character detail page
8. add forms for create/edit
9. repeat pattern for factions and locations
10. add search/filtering
11. introduce signals
12. polish and persistence

## AI Collaboration Notes

This repository should stay easy for Cursor, Codex, and similar coding assistants to understand.

Guidelines for AI-generated code:

* prefer clarity over cleverness
* do not introduce unnecessary abstraction too early
* keep components small and focused
* keep file names predictable
* follow the agreed folder structure
* prefer incremental changes over large rewrites
* explain major architectural choices in markdown files when needed

## Project Identity

Project name: Fantasy Codex

Short description:
A small Angular learning project for managing fantasy characters, factions, and locations.

## Definition of Success

The project is successful if it helps the developer:

* regain confidence with Angular
* understand modern Angular structure
* build a working CRUD-style app with routing and forms
* have a project that is interesting enough to stay motivated

## Summary

Fantasy Codex is a small, focused Angular learning project.
It is intentionally scoped to teach:

* standalone components
* routing
* services and DI
* reactive forms
* clean feature-based structure
* later signals

It should remain simple, readable, and motivating throughout development.
