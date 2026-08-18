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
    image: '/images/gallery/kabelput-klinkers-overzicht.jpg',
    coverImage: '/images/gallery/kabelput-klinkers-overzicht.jpg',
    meta: { opdrachtgever: TBC, locatie: TBC, dienst: 'As-built · GWW', duur: TBC },
    beats: [
      { label: 'Uitdaging', text: TBC },
      { label: 'Meting', text: 'Inmeten van kabels en leidingen tijdens graafwerkzaamheden, met GNSS-ontvanger en datacollector op locatie.' },
      { label: 'Technologie', text: 'RTK-GPS.' },
      { label: 'Resultaat', text: TBC },
    ],
    metingPhotos: ['/images/gallery/ondergronds-put-meting.jpg', '/images/gallery/kabelput-klinkers-detail.jpg'],
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
    metingPhotos: ['/images/gallery/sportveld-gnss-actie-1.jpg', '/images/gallery/sportveld-gnss-actie-2.jpg', '/images/gallery/sportveld-extra-1.jpg'],
    specs: { apparatuur: TBC, coordinatensysteem: 'RD New / NAP', nauwkeurigheid: TBC },
    result: { meetpunten: TBC, dagen: TBC, reviseringen: TBC },
    deliverables: [
      { icon: 'doc', label: 'PDF-rapport' },
      { icon: 'ruler', label: 'CAD-tekening' },
    ],
  },
  {
    slug: 'nieuwbouwwijk-inmeting',
    title: 'Topografische inmeting bij nieuwbouwlocatie',
    tags: ['Topografische metingen', 'GWW'],
    image: '/images/gallery/veld-gnss-wandelpad-1.jpg',
    coverImage: '/images/gallery/veld-gnss-wandelpad-1.jpg',
    meta: { opdrachtgever: TBC, locatie: TBC, dienst: 'Topografische metingen', duur: TBC },
    beats: [
      { label: 'Uitdaging', text: TBC },
      { label: 'Meting', text: 'Topografische inmeting langs een wandelpad bij een nieuwbouwlocatie, met RTK-GPS.' },
      { label: 'Technologie', text: 'RTK-GPS.' },
      { label: 'Resultaat', text: TBC },
    ],
    metingPhotos: ['/images/gallery/veld-gnss-wandelpad-2.jpg', '/images/gallery/veld-gnss-hek.jpg', '/images/gallery/nieuwbouwwijk-extra-1.jpg'],
    specs: { apparatuur: TBC, coordinatensysteem: 'RD New / NAP', nauwkeurigheid: TBC },
    result: { meetpunten: TBC, dagen: TBC, reviseringen: TBC },
    deliverables: [
      { icon: 'doc', label: 'PDF-rapport' },
      { icon: 'ruler', label: 'CAD-tekening' },
    ],
  },
  {
    slug: 'techniek-fundering',
    title: 'Uitzetwerk fundering technische cabine',
    tags: ['Uitzetwerk', 'GWW'],
    image: '/images/gallery/techniek-haventerrein-overzicht.jpg',
    coverImage: '/images/gallery/techniek-haventerrein-overzicht.jpg',
    meta: { opdrachtgever: TBC, locatie: TBC, dienst: 'Uitzetwerk', duur: TBC },
    beats: [
      { label: 'Uitdaging', text: TBC },
      { label: 'Meting', text: 'Uitzetten en hoogtecontrole van de funderingspunten voor een technische cabine op een havenlocatie.' },
      { label: 'Technologie', text: TBC },
      { label: 'Resultaat', text: TBC },
    ],
    metingPhotos: ['/images/gallery/techniek-fundering-detail.jpg', '/images/gallery/techniek-fundering-detail-2.jpg'],
    specs: { apparatuur: TBC, coordinatensysteem: 'RD New / NAP', nauwkeurigheid: TBC },
    result: { meetpunten: TBC, dagen: TBC, reviseringen: TBC },
    deliverables: [
      { icon: 'doc', label: 'PDF-rapport' },
      { icon: 'ruler', label: 'CAD-tekening' },
    ],
  },
  {
    slug: 'bedrijventerrein-inmeting',
    title: 'Topografische inmeting bedrijventerrein',
    tags: ['Topografische metingen', 'GWW'],
    image: '/images/gallery/gnss-bedrijventerrein-1.jpg',
    coverImage: '/images/gallery/gnss-bedrijventerrein-1.jpg',
    meta: { opdrachtgever: TBC, locatie: TBC, dienst: 'Topografische metingen', duur: TBC },
    beats: [
      { label: 'Uitdaging', text: TBC },
      { label: 'Meting', text: 'Topografische inmeting op een bedrijventerrein, met RTK-GPS.' },
      { label: 'Technologie', text: 'RTK-GPS.' },
      { label: 'Resultaat', text: TBC },
    ],
    metingPhotos: ['/images/gallery/gnss-bedrijventerrein-2.jpg'],
    specs: { apparatuur: TBC, coordinatensysteem: 'RD New / NAP', nauwkeurigheid: TBC },
    result: { meetpunten: TBC, dagen: TBC, reviseringen: TBC },
    deliverables: [
      { icon: 'doc', label: 'PDF-rapport' },
      { icon: 'ruler', label: 'CAD-tekening' },
    ],
  },
  {
    slug: 'fietspad-inmeting',
    title: 'Topografische inmeting langs fietspad',
    tags: ['Topografische metingen', 'GWW'],
    image: '/images/gallery/gnss-fietspad-1.jpg',
    coverImage: '/images/gallery/gnss-fietspad-1.jpg',
    meta: { opdrachtgever: TBC, locatie: TBC, dienst: 'Topografische metingen', duur: TBC },
    beats: [
      { label: 'Uitdaging', text: TBC },
      { label: 'Meting', text: 'Topografische inmeting langs een fietspad, met RTK-GPS.' },
      { label: 'Technologie', text: 'RTK-GPS.' },
      { label: 'Resultaat', text: TBC },
    ],
    metingPhotos: ['/images/gallery/gnss-fietspad-2.jpg', '/images/gallery/gnss-fietspad-3.jpg'],
    specs: { apparatuur: TBC, coordinatensysteem: 'RD New / NAP', nauwkeurigheid: TBC },
    result: { meetpunten: TBC, dagen: TBC, reviseringen: TBC },
    deliverables: [
      { icon: 'doc', label: 'PDF-rapport' },
      { icon: 'ruler', label: 'CAD-tekening' },
    ],
  },
  {
    slug: 'terreinafzetting-inmeting',
    title: 'Topografische inmeting terreinafzetting',
    tags: ['Topografische metingen', 'GWW'],
    image: '/images/gallery/gnss-terrein-hek-1.jpg',
    coverImage: '/images/gallery/gnss-terrein-hek-1.jpg',
    meta: { opdrachtgever: TBC, locatie: TBC, dienst: 'Topografische metingen', duur: TBC },
    beats: [
      { label: 'Uitdaging', text: TBC },
      { label: 'Meting', text: 'Topografische inmeting van een terrein met tijdelijke afzetting, met RTK-GPS.' },
      { label: 'Technologie', text: 'RTK-GPS.' },
      { label: 'Resultaat', text: TBC },
    ],
    metingPhotos: ['/images/gallery/gnss-terrein-hek-2.jpg'],
    specs: { apparatuur: TBC, coordinatensysteem: 'RD New / NAP', nauwkeurigheid: TBC },
    result: { meetpunten: TBC, dagen: TBC, reviseringen: TBC },
    deliverables: [
      { icon: 'doc', label: 'PDF-rapport' },
      { icon: 'ruler', label: 'CAD-tekening' },
    ],
  },
  {
    slug: 'kruispunt-herinrichting',
    title: 'Herinrichting kruispunt',
    tags: ['GWW'],
    image: '/images/gallery/luchtfoto-kruispunt-1.jpg',
    coverImage: '/images/gallery/luchtfoto-kruispunt-1.jpg',
    meta: { opdrachtgever: TBC, locatie: TBC, dienst: 'GWW', duur: TBC },
    beats: [
      { label: 'Uitdaging', text: TBC },
      { label: 'Meting', text: 'Overzicht van de herinrichting van een kruispunt.' },
      { label: 'Technologie', text: TBC },
      { label: 'Resultaat', text: TBC },
    ],
    metingPhotos: ['/images/gallery/luchtfoto-kruispunt-2.jpg'],
    specs: { apparatuur: TBC, coordinatensysteem: 'RD New / NAP', nauwkeurigheid: TBC },
    result: { meetpunten: TBC, dagen: TBC, reviseringen: TBC },
    deliverables: [
      { icon: 'doc', label: 'PDF-rapport' },
    ],
  },
  {
    slug: 'wegverharding-profielcontrole',
    title: 'Wegverharding — asfaltering en profielcontrole',
    tags: ['Uitzetwerk', 'GWW'],
    image: '/images/gallery/wegverharding-brug-skyline.jpg',
    coverImage: '/images/gallery/wegverharding-brug-skyline.jpg',
    meta: { opdrachtgever: TBC, locatie: TBC, dienst: 'Uitzetwerk', duur: TBC },
    beats: [
      { label: 'Uitdaging', text: TBC },
      { label: 'Meting', text: 'Profiel- en hoogtecontrole tijdens de asfaltering van meerdere wegvakken, met de robotgestuurde plotter en RTK-GPS.' },
      { label: 'Technologie', text: 'RTK-GPS.' },
      { label: 'Resultaat', text: TBC },
    ],
    metingPhotos: ['/images/gallery/wegverharding-asfalt-nat.jpg', '/images/gallery/wegverharding-profiel-detail.jpg'],
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
