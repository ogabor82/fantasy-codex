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
  }
];
