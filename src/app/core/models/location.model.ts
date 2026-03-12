export interface Location {
  id: string;
  name: string;
  region: string;
  description: string;
}

export const MOCK_LOCATIONS: Location[] = [
  {
    id: 'location-ravenfall',
    name: 'Ravenfall',
    region: 'Northern Marches',
    description: 'A fortified border city guarding mountain passes.'
  },
  {
    id: 'location-cinder-hollow',
    name: 'Cinder Hollow',
    region: 'Ashen Plains',
    description: 'A volcanic basin known for ancient ruins and unstable magic.'
  },
  {
    id: 'location-silvermere',
    name: 'Silvermere',
    region: 'Lake Kingdoms',
    description: 'A wealthy trade city built around canals and mirror-bright waters.'
  },
  {
    id: 'location-whispering-woods',
    name: 'Whispering Woods',
    region: 'Emerald Frontier',
    description: 'Dense moonlit forests known for hidden trails and silent sentries.'
  },
  {
    id: 'location-iron-citadel',
    name: 'Iron Citadel',
    region: 'Stone March',
    description: 'A heavily fortified bastion overlooking strategic mountain gates.'
  },
  {
    id: 'location-sky-reach',
    name: 'Sky Reach',
    region: 'Highspire Peaks',
    description: 'A towering city of scholars built on cliffs above cloud level.'
  },
  {
    id: 'location-silver-grove',
    name: 'Silver Grove',
    region: 'Moonvale',
    description: 'A serene sanctuary where lunar rites are held beneath ancient trees.'
  },
  {
    id: 'location-radiant-city',
    name: 'Radiant City',
    region: 'Suncrest Dominion',
    description: 'A luminous capital known for great cathedrals and ceremonial avenues.'
  },
  {
    id: 'location-deep-forge',
    name: 'Deep Forge',
    region: 'Underpeak Holds',
    description: 'A subterranean industrial district powered by magma-fed furnaces.'
  }
];
