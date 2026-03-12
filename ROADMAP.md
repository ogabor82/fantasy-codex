# Fantasy Codex — Development Roadmap

This roadmap describes the **incremental learning path** used to build the Fantasy Codex Angular application. The goal is not only to produce a working application but also to **systematically relearn modern Angular concepts**.

Each step is intentionally small and builds on the previous one.

---

# Phase 1 — Foundations

## Step 1 — Project Definition

Goals:

* Define the project scope
* Define entities (Character, Faction, Location)
* Define routes and screens
* Establish project documentation

Deliverables:

* PROJECT_CONTEXT.md
* ARCHITECTURE.md
* ROADMAP.md

---

## Step 2 — Domain Models

Goals:

Create the core TypeScript models for the domain.

Entities:

* Character
* Faction
* Location

Tasks:

* create model interfaces
* define relationships
* create mock data examples

Deliverables:

* character.model.ts
* faction.model.ts
* location.model.ts

---

## Step 3 — Angular Project Initialization

Goals:

Create the Angular application using **standalone components**.

Tasks:

* initialize Angular project
* clean default template
* confirm development environment works

Deliverables:

Working Angular dev server.

---

# Phase 2 — Application Skeleton

## Step 4 — Application Layout

Goals:

Build the base UI layout.

Tasks:

* create main navigation
* create layout container
* add router outlet

Deliverables:

Basic application shell with navigation.

---

## Step 5 — Routing Setup

Goals:

Configure Angular Router.

Routes:

```
/
/characters
/factions
/locations
```

Tasks:

* create route configuration
* connect navigation links
* test routing

Deliverables:

Navigation between pages works.

---

# Phase 3 — Characters Feature

## Step 6 — Character List

Goals:

Display a list of characters using mock data.

Tasks:

* create CharactersService
* return mock character list
* build CharacterListComponent
* display character cards or rows

Deliverables:

Working character list page.

---

## Step 7 — Character Detail Page

Goals:

Display a single character using route parameters.

Tasks:

* configure `/characters/:id` route
* fetch character by id
* build CharacterDetailComponent

Deliverables:

Character detail screen.

---

## Step 8 — Character Creation Form

Goals:

Implement character creation using **Reactive Forms**.

Tasks:

* create CharacterFormComponent
* build form controls
* validate input
* submit new character

Deliverables:

New characters can be created.

---

## Step 9 — Character Editing

Goals:

Allow editing of existing characters.

Tasks:

* prefill form
* update character data

Deliverables:

Character edit flow works.

---

# Phase 4 — Additional Features

## Step 10 — Factions Feature

Goals:

Repeat the same pattern for factions.

Tasks:

* faction list
* faction detail
* faction form

Deliverables:

Working factions feature.

---

## Step 11 — Locations Feature

Goals:

Implement locations with the same architecture.

Tasks:

* location list
* location detail
* location form

Deliverables:

Working locations feature.

---

# Phase 5 — Improvements

## Step 12 — Search and Filtering

Goals:

Add search functionality to character list.

Tasks:

* add search input
* filter characters

Deliverables:

Dynamic search functionality.

---

## Step 13 — Angular Signals

Goals:

Introduce Angular signals for state management.

Tasks:

* convert service state to signals
* implement computed filters

Deliverables:

Reactive state with signals.

---

# Phase 6 — Persistence

## Step 14 — Local Storage Persistence

Goals:

Persist application data locally.

Tasks:

* save entities to localStorage
* restore state on load

Deliverables:

Data persists across page refresh.

---

# Optional Advanced Steps

These steps are not required for the learning goal but may be added later.

Possible additions:

* lazy loaded routes
* backend REST API
* NestJS backend
* image support
* markdown descriptions
* relationship graph

---

# Learning Outcome

By completing this roadmap the developer will have practiced:

* Angular standalone components
* routing and route parameters
* dependency injection
* services
* reactive forms
* feature-based architecture
* Angular signals

The finished project should be a **clean, understandable Angular codebase suitable for experimentation and further extension**.
