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
  }
];
