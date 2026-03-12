export interface Character {
  id: string;
  name: string;
  title: string;
  race: string;
  factionId: string;
  locationId: string;
  shortDescription: string;
  portraitUrl: string;
}

export const MOCK_CHARACTERS: Character[] = [
  {
    id: 'character-lyra-stone',
    name: 'Lyra Stone',
    title: 'Captain of the Watch',
    race: 'Human',
    factionId: 'faction-iron-banner',
    locationId: 'location-ravenfall',
    shortDescription: 'A pragmatic commander known for holding impossible defenses.',
    portraitUrl:
      'https://robohash.org/lyrastone.png?set=set5&size=160x160'
  },
  {
    id: 'character-serik-vale',
    name: 'Serik Vale',
    title: 'Cinder Archivist',
    race: 'Elf',
    factionId: 'faction-ember-circle',
    locationId: 'location-cinder-hollow',
    shortDescription: 'A relentless researcher tracking dangerous pre-cataclysm texts.',
    portraitUrl:
      'https://robohash.org/serikvale.png?set=set5&size=160x160'
  },
  {
    id: 'character-marwen-dane',
    name: 'Marwen Dane',
    title: 'Envoy of the Court',
    race: 'Half-Elf',
    factionId: 'faction-moon-court',
    locationId: 'location-silvermere',
    shortDescription: 'A skilled negotiator balancing fragile alliances across the realm.',
    portraitUrl:
      'https://robohash.org/marwendane.png?set=set5&size=160x160'
  }
];
