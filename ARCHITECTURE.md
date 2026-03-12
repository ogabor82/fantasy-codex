# Fantasy Codex — Architecture

## Architecture Overview

Fantasy Codex follows a **simple feature‑based Angular architecture** designed for learning and clarity.

The application is intentionally structured so that:

* each domain concept is isolated in a feature folder
* components remain small and focused
* services handle data access
* routing defines application navigation

The architecture prioritizes **readability and incremental learning** over abstraction.

---

# High Level Architecture

The app is divided into four main layers:

1. Core
2. Features
3. Shared
4. Application Shell

```
src/app

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

---

# Application Shell

The **Application Shell** defines the global layout.

Responsibilities:

* main navigation
* router outlet
* global layout

Example structure:

```
app.component
  ├─ navigation bar
  ├─ main layout container
  └─ router-outlet
```

The shell should remain minimal and avoid business logic.

---

# Core Layer

The `core` folder contains singleton services and application‑wide utilities.

Example responsibilities:

* global data services
* configuration
* app‑wide helpers

Possible files:

```
core/
  services/
    codex-data.service.ts
  models/
```

The core layer should **not depend on feature modules**.

---

# Shared Layer

The `shared` folder contains reusable UI elements and utilities.

Examples:

```
shared/
  components/
    page-header/
    card/
    form-field/

  pipes/
  directives/
```

Rules:

* shared components must remain generic
* they should not contain domain logic

---

# Feature Modules

Each domain concept has its own feature folder.

```
features/
  characters/
  factions/
  locations/
```

A feature folder contains:

* components
* services
* models
* routing if needed

Example:

```
features/characters

  components/
    character-list/
    character-detail/
    character-form/

  services/
    characters.service.ts

  models/
    character.model.ts
```

---

# Component Hierarchy

## App Level

```
AppComponent

 ├─ Navigation
 └─ RouterOutlet
       ├─ Dashboard
       ├─ CharacterList
       ├─ CharacterDetail
       ├─ CharacterForm
       ├─ FactionList
       ├─ FactionDetail
       ├─ FactionForm
       ├─ LocationList
       ├─ LocationDetail
       └─ LocationForm
```

Components should remain small and focused.

Guideline:

* container components manage data
* presentational components handle UI

---

# Routing Architecture

Routing is centralized in `app.routes.ts`.

Example structure:

```
/
/characters
/characters/new
/characters/:id
/characters/:id/edit

/factions
/factions/new
/factions/:id
/factions/:id/edit

/locations
/locations/new
/locations/:id
/locations/:id/edit
```

Each route loads a standalone component.

---

# Data Flow

The application uses a simple flow:

```
Component
   ↓
Service
   ↓
Data Source
```

Initial data source:

* in‑memory mock data

Future options:

* localStorage
* REST API

---

# Service Layer

Services are responsible for:

* retrieving data
* updating data
* exposing observable or signal state

Example services:

```
CharactersService
FactionsService
LocationsService
```

Services should not depend on components.

---

# State Strategy

Initial implementation:

* service managed state
* simple arrays

Later improvement:

* Angular signals
* computed state

Example future pattern:

```
characters = signal<Character[]>([])

filteredCharacters = computed(() => {
  return characters().filter(...)
})
```

---

# Form Architecture

Create and edit screens will use **Reactive Forms**.

Example form components:

```
CharacterFormComponent
FactionFormComponent
LocationFormComponent
```

Forms should:

* validate input
* emit submit events
* delegate persistence to services

---

# UI Composition

Pages follow a consistent layout pattern.

Example page structure:

```
PageHeader

SearchBar (optional)

List OR Form OR Detail
```

Consistency keeps the UI predictable and easy to maintain.

---

# Coding Principles

Preferred practices:

* small components
* explicit typing
* simple services
* predictable folder structure
* minimal magic

Avoid:

* premature abstraction
* overly generic utilities
* complex inheritance

---

# Future Architectural Extensions

Possible later additions:

* lazy loaded feature routes
* global state signals
* backend API integration
* persistence layer
* caching strategies

These should be introduced only after the core architecture is stable.

---

# CSS styling

Use Tailwind css

# Summary

The architecture of Fantasy Codex emphasizes:

* feature‑based structure
* standalone Angular components
* service‑driven data access
* simple routing
* incremental development

The goal is to maintain a **clean, understandable Angular project** that is ideal for learning and experimentation.
