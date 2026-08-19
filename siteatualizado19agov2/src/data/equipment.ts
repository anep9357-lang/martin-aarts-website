// Apparatuurdata — gedeeld tussen de homepage-strip en de volledige
// Apparatuur-pagina. Merken/modelnummers zijn hier bewust weggelaten
// tenzij expliciet bevestigd door de klant — zie PLAN.md.

export interface Equipment {
  slug: string;
  icon: 'ruler' | 'gnss' | 'scanner' | 'total-station' | 'shield';
  title: string;
  description: string;
  longDescription: string;
  useCases: string[];
  image?: string;
}

export const equipment: Equipment[] = [
  {
    slug: 'landmeetsysteem',
    icon: 'ruler',
    title: 'Landmeetsysteem',
    description: 'Positionering & dagelijkse maatvoering',
    longDescription:
      'Modern landmeetsysteem voor nauwkeurige inmetingen en uitzetwerk in GWW-, bouw- en agrarische projecten — geschikt voor positionering, controlemetingen en dagelijkse maatvoering, met stabiele resultaten dankzij RTK en geavanceerde sensoren.',
    useCases: ['Positionering', 'Controlemetingen', 'Dagelijkse maatvoering'],
    image: '/images/equipment/equip-landmeetsysteem.jpg',
  },
  {
    slug: 'gps-basisstation',
    icon: 'gnss',
    title: 'GPS-basisstation',
    description: 'Vast referentiepunt op het project',
    longDescription:
      'Lokaal GPS-basisstation als vast referentiepunt op het project — verhoogt de nauwkeurigheid van rovers en RTK-ontvangers, vooral in de hoogtebepaling, en levert een stabiel en consistent correctiesignaal binnen het werkgebied.',
    useCases: ['Referentiepunt op het project', 'Nauwkeurige hoogtebepaling', 'Stabiel correctiesignaal'],
    image: '/images/equipment/equip-gps-basisstation.jpg',
  },
  {
    slug: '3d-laserscanner',
    icon: 'scanner',
    title: '3D-laserscanner',
    description: 'Miljoenen meetpunten X, Y, Z',
    longDescription:
      '3D-laserscanning legt objecten en omgevingen vast in miljoenen meetpunten (X, Y, Z). De puntenwolk vormt een digitale kopie van de werkelijkheid en is de basis voor 2D-tekeningen, 3D-modellen, BIM, clash-detectie en volumeberekeningen.',
    useCases: ['2D-tekeningen en 3D-modellen', 'BIM en clash-detectie', 'Volumeberekeningen'],
    image: '/images/equipment/equip-3d-scanner-detail.jpg',
  },
  {
    slug: 'robotgestuurd-uitzetten',
    icon: 'total-station',
    title: 'Robotgestuurd uitzetten',
    description: '12–16× sneller dan handmatig',
    longDescription:
      'Robotgestuurd uitzetten is 12–16 keer sneller dan handmatig — één operator stuurt het instrument aan, in plaats van een volledige ploeg. Ideaal voor stuurlijnen, heipaalpunten en maatvoering van constructies en infrastructurele werken.',
    useCases: ['Stuurlijnen en heipaalpunten', 'Maatvoering van constructies', 'Infrastructurele werken'],
    image: '/images/equipment/equip-robot-plotter-pad.jpg',
  },
  {
    slug: 'digitale-waterpas',
    icon: 'shield',
    title: 'Digitale waterpas',
    description: 'Nauwkeurige hoogtemetingen',
    longDescription:
      'Digitale waterpassing voor zeer nauwkeurige hoogtemetingen in bouw- en infrastructuurprojecten. Ideaal voor nivelleerwerk, zettingsmetingen, referentiehoogtes en kwaliteitscontrole van funderingen en verhardingen.',
    useCases: ['Nivelleerwerk en zettingsmetingen', 'Referentiehoogtes', 'Kwaliteitscontrole funderingen en verhardingen'],
    image: '/images/equipment/equip-digitale-waterpas.jpg',
  },
];
