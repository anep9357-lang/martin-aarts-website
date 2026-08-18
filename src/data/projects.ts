// Projectdata — gebruikt voor de portfolio-preview op de homepage,
// het Projecten-overzicht en de individuele case-study-pagina's.
// Story-structuur: Uitdaging → Meting → Technologie → Resultaat.
// Alles gemarkeerd "GEGEVEN NOG TE BEVESTIGEN" is een echt open datapunt
// (zie PLAN.md) — geen enkel cijfer of klantnaam hier is verzonnen.
// "RD New / NAP" is geen klantspecifiek gegeven maar het nationale
// coördinaten-/hoogtestelsel dat in Nederland standaard wordt gebruikt.

const TBC = 'GEGEVEN NOG TE BEVESTIGEN';

export interface ProjectBeat {
  label: 'Uitdaging' | 'Meting' | 'Technologie' | 'Resultaat';
  text: string;
}

export interface ProjectDeliverable {
  icon: 'doc' | 'ruler' | 'pointcloud';
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  tags: string[];
  image?: string;
  coverImage?: string;
  meta: {
    opdrachtgever: string;
    locatie: string;
    dienst: string;
    duur: string;
  };
  beats: ProjectBeat[];
  metingPhotos?: string[];
  specs: {
    apparatuur: string;
    coordinatensysteem: string;
    nauwkeurigheid: string;
  };
  result: {
    meetpunten: string;
    dagen: string;
    reviseringen: string;
  };
  deliverables: ProjectDeliverable[];
}

export const projects: Project[] = [
  {
    slug: 'ondergrondse-infrastructuur',
    title: 'Inmeten ondergrondse infrastructuur',
    tags: ['As-built', 'GWW'],
    image: '/images/projects/project-meting-ondergronds.jpg',
    coverImage: '/images/projects/project-meting-ondergronds.jpg',
    meta: { opdrachtgever: TBC, locatie: TBC, dienst: 'As-built · GWW', duur: TBC },
    beats: [
      { label: 'Uitdaging', text: TBC },
      { label: 'Meting', text: 'Inmeten van kabels en leidingen tijdens graafwerkzaamheden, met GNSS-ontvanger en datacollector op locatie.' },
      { label: 'Technologie', text: 'RTK-GPS.' },
      { label: 'Resultaat', text: TBC },
    ],
    metingPhotos: ['/images/gallery/ondergronds-put-meting.jpg', '/images/gallery/ondergronds-putten-overzicht.jpg'],
    specs: { apparatuur: TBC, coordinatensysteem: 'RD New / NAP', nauwkeurigheid: TBC },
    result: { meetpunten: TBC, dagen: TBC, reviseringen: TBC },
    deliverables: [
      { icon: 'doc', label: 'PDF-rapport' },
      { icon: 'ruler', label: 'CAD-tekening' },
    ],
  },
  {
    slug: 'puntenwolk-scan',
    title: '3D-scan van bestaande situatie',
    tags: ['3D-laserscanning'],
    image: '/images/projects/project-scanner-in-context.jpg',
    coverImage: '/images/projects/project-scanner-in-context.jpg',
    meta: { opdrachtgever: TBC, locatie: TBC, dienst: '3D-laserscanning', duur: TBC },
    beats: [
      { label: 'Uitdaging', text: TBC },
      { label: 'Meting', text: '3D-laserscanning van de bestaande situatie vanaf meerdere standpunten.' },
      { label: 'Technologie', text: '3D-laserscanner, verwerkt tot puntenwolk.' },
      { label: 'Resultaat', text: TBC },
    ],
    metingPhotos: ['/images/gallery/scanner-tripod-muur.jpg'],
    specs: { apparatuur: TBC, coordinatensysteem: 'RD New / NAP', nauwkeurigheid: TBC },
    result: { meetpunten: TBC, dagen: TBC, reviseringen: TBC },
    deliverables: [
      { icon: 'pointcloud', label: 'Puntenbestand' },
      { icon: 'doc', label: 'PDF-rapport' },
    ],
  },
  {
    slug: 'sportveld-uitzetwerk',
    title: 'Inmeten en uitzetten sportveld',
    tags: ['Uitzetwerk', 'GWW'],
    image: '/images/gallery/sportveld-uitzetwerk-overzicht.jpg',
    coverImage: '/images/gallery/sportveld-uitzetwerk-overzicht.jpg',
    meta: { opdrachtgever: TBC, locatie: TBC, dienst: 'Uitzetwerk', duur: TBC },
    beats: [
      { label: 'Uitdaging', text: TBC },
      { label: 'Meting', text: 'Inmeten en uitzetten van de belijning en afmetingen van een sportveld met RTK-GPS.' },
      { label: 'Technologie', text: 'RTK-GPS.' },
      { label: 'Resultaat', text: TBC },
    ],
    metingPhotos: ['/images/gallery/sportveld-gnss-actie-1.jpg', '/images/gallery/sportveld-gnss-actie-2.jpg'],
    specs: { apparatuur: TBC, coordinatensysteem: 'RD New / NAP', nauwkeurigheid: TBC },
    result: { meetpunten: TBC, dagen: TBC, reviseringen: TBC },
    deliverables: [
      { icon: 'doc', label: 'PDF-rapport' },
      { icon: 'ruler', label: 'CAD-tekening' },
    ],
  },
  {
    slug: 'agrarisch-perceel',
    title: 'Drainageplanning en perceelmeting',
    tags: ['Agrarisch'],
    meta: { opdrachtgever: TBC, locatie: TBC, dienst: 'Agrarische metingen', duur: TBC },
    beats: [
      { label: 'Uitdaging', text: TBC },
      { label: 'Meting', text: 'Perceelmeting en hoogtekaart van het terrein.' },
      { label: 'Technologie', text: 'RTK-GPS.' },
      { label: 'Resultaat', text: TBC },
    ],
    specs: { apparatuur: TBC, coordinatensysteem: 'RD New / NAP', nauwkeurigheid: TBC },
    result: { meetpunten: TBC, dagen: TBC, reviseringen: TBC },
    deliverables: [
      { icon: 'doc', label: 'PDF-rapport' },
      { icon: 'ruler', label: 'CAD-tekening' },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
