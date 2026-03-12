export interface Faction {
  id: string;
  name: string;
  type: string;
  description: string;
}

export const MOCK_FACTIONS: Faction[] = [
  {
    id: 'faction-iron-banner',
    name: 'Iron Banner',
    type: 'Mercenary Company',
    description: 'A disciplined company that sells protection to frontier towns.'
  },
  {
    id: 'faction-ember-circle',
    name: 'Ember Circle',
    type: 'Mage Order',
    description: 'A scholarly order that studies ancient flame and warding rituals.'
  },
  {
    id: 'faction-moon-court',
    name: 'Moon Court',
    type: 'Noble House',
    description: 'An influential aristocratic house with deep political ties.'
  },
  {
    id: 'faction-shadow-syndicate',
    name: 'Shadow Syndicate',
    type: 'Covert Network',
    description: 'A hidden guild of operatives controlling information and covert contracts.'
  },
  {
    id: 'faction-iron-legion',
    name: 'Iron Legion',
    type: 'Military Order',
    description: 'A battle-hardened legion that secures fortress borders and trade roads.'
  },
  {
    id: 'faction-arcane-council',
    name: 'Arcane Council',
    type: 'Mage Council',
    description: 'Senior wizards governing magical policy across the central provinces.'
  },
  {
    id: 'faction-lunar-temple',
    name: 'Lunar Temple',
    type: 'Religious Order',
    description: 'Priests and seers devoted to moon rites and celestial guidance.'
  },
  {
    id: 'faction-order-of-light',
    name: 'Order of Light',
    type: 'Knightly Order',
    description: 'Paladins sworn to protect pilgrims and sacred relic routes.'
  },
  {
    id: 'faction-mountain-clan',
    name: 'Mountain Clan',
    type: 'Craft Guild',
    description: 'Master smiths and artisans renowned for high-forge metalwork.'
  }
];
