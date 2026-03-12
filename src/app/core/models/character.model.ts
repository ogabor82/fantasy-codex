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
    id: 'character-elara-shadowstep',
    name: 'Elara Shadowstep',
    title: 'Master Rogue',
    race: 'Elf',
    factionId: 'faction-shadow-syndicate',
    locationId: 'location-whispering-woods',
    shortDescription: 'An elusive infiltrator who dismantles threats before they can emerge.',
    portraitUrl:
      'https://picsum.photos/seed/elara-shadowstep/960/540'
  },
  {
    id: 'character-grogmar-the-bold',
    name: 'Grogmar the Bold',
    title: 'Frontline Warrior',
    race: 'Dwarf',
    factionId: 'faction-iron-legion',
    locationId: 'location-iron-citadel',
    shortDescription: 'A decorated shield captain known for unbreakable defensive lines.',
    portraitUrl:
      'https://picsum.photos/seed/grogmar-the-bold/960/540'
  },
  {
    id: 'character-archmage-thalric',
    name: 'Archmage Thalric',
    title: 'High Wizard',
    race: 'Human',
    factionId: 'faction-arcane-council',
    locationId: 'location-sky-reach',
    shortDescription: 'A master of battlefield wards and long-range arcane strategy.',
    portraitUrl:
      'https://picsum.photos/seed/archmage-thalric/960/540'
  },
  {
    id: 'character-selene-moonwhisper',
    name: 'Selene Moonwhisper',
    title: 'Lunar Priestess',
    race: 'Moon Elf',
    factionId: 'faction-lunar-temple',
    locationId: 'location-silver-grove',
    shortDescription: 'A revered oracle who interprets moon cycles for sacred rites.',
    portraitUrl:
      'https://picsum.photos/seed/selene-moonwhisper/960/540'
  },
  {
    id: 'character-kaelen-sunstride',
    name: 'Kaelen Sunstride',
    title: 'Holy Paladin',
    race: 'Human',
    factionId: 'faction-order-of-light',
    locationId: 'location-radiant-city',
    shortDescription: 'A stalwart guardian dedicated to protecting holy relic convoys.',
    portraitUrl:
      'https://picsum.photos/seed/kaelen-sunstride/960/540'
  },
  {
    id: 'character-drogun-ironfist',
    name: 'Drogun Ironfist',
    title: 'Master Smith',
    race: 'Dwarf',
    factionId: 'faction-mountain-clan',
    locationId: 'location-deep-forge',
    shortDescription: 'A legendary forge master shaping ceremonial and war-grade steel.',
    portraitUrl:
      'https://picsum.photos/seed/drogun-ironfist/960/540'
  },
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
