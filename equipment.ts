// Apparatuurdata — gedeeld tussen de homepage-strip en de volledige
// Apparatuur-pagina. Alle meetapparatuur is van Trimble (bevestigd door
// de klant) — zie PLAN.md.

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
      'Het rondtrekkende Trimble-systeem waarmee dagelijks wordt gemeten en uitgezet — de basis voor vrijwel elke meting op locatie.',
    useCases: ['Dagelijkse maatvoering', 'Uitzetwerk', 'Controlemetingen'],
    image: '/images/equipment/equip-landmeetsysteem.jpg',
  },
  {
    slug: 'gps-basisstation',
    icon: 'gnss',
    title: 'GPS-basisstation',
    description: 'Vast referentiepunt op het project',
    longDescription:
      'Een vast opgesteld Trimble GNSS-basisstation dat als referentiepunt dient, zodat alle metingen op het project herleidbaar zijn tot hetzelfde coördinatensysteem.',
    useCases: ['RTK-correctie op locatie', 'Referentiepunt voor het hele project', 'Herhaalbare metingen'],
    image: '/images/equipment/equip-gps-basisstation.jpg',
  },
  {
    slug: '3d-laserscanner',
    icon: 'scanner',
    title: '3D-laserscanner',
    description: 'Miljoenen meetpunten X, Y, Z',
    longDescription:
      'De Trimble 3D-laserscanner legt een bestaande situatie vast als dichte puntenwolk — miljoenen meetpunten per scan, bruikbaar als basis voor BIM, renovatie of volumeberekening.',
    useCases: ['Puntenwolken van bestaande situaties', 'Clash-detectie', 'Volumebepaling'],
    image: '/images/equipment/equip-3d-scanner-detail.jpg',
  },
  {
    slug: 'robotgestuurd-uitzetten',
    icon: 'total-station',
    title: 'Robotgestuurd uitzetten',
    description: '12–16× sneller dan handmatig',
    longDescription:
      'Een robotgestuurde Trimble total station die automatisch de prisma volgt, waardoor één persoon zelfstandig en aanzienlijk sneller kan uitzetten dan met een handmatig systeem.',
    useCases: ['Uitzetten van assen en rooilijnen', 'Funderingspunten', 'Grote terreinen'],
    image: '/images/equipment/equip-robot-plotter-pad.jpg',
  },
  {
    slug: 'digitale-waterpas',
    icon: 'shield',
    title: 'Digitale waterpas',
    description: 'Nauwkeurige hoogtemetingen',
    longDescription:
      'Een digitale Trimble waterpas voor hoogtemetingen waar net iets meer nauwkeurigheid nodig is dan GNSS alleen kan bieden — digitaal afgelezen, minder foutgevoelig dan een optisch waterpasinstrument.',
    useCases: ['Hoogtemetingen', 'Waterpassen van funderingen', 'Drainage- en afschotcontrole'],
    image: '/images/equipment/equip-digitale-waterpas.jpg',
  },
];
