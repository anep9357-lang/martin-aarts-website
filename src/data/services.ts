// Structured content voor de 6 echte diensten van Martin Aarts.
// Bron: bestaande site (martinaarts.xyz) — geen enkele dienst hier is
// verzonnen. Waar een stap generiek beschreven is (geen specifiek getal
// of interne norm), is dat bewust — verzin geen cijfers.

export interface ServiceStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  num: string;
  icon: 'ruler' | 'total-station' | 'shield' | 'gnss' | 'scanner' | 'field';
  title: string;
  summary: string;
  heroImage?: string;
  sectors: string[];
  steps: ServiceStep[];
}

export const services: Service[] = [
  {
    slug: 'topografische-metingen',
    num: '01',
    icon: 'ruler',
    title: 'Topografische metingen',
    summary:
      'Inmeten van terrein, objecten, hoogtes en bestaande infrastructuur voor ontwerp, volumeberekeningen en revisietekeningen.',
    heroImage: '/images/services/equip-total-station-veld.jpg',
    sectors: ['Ingenieursbureaus', 'GWW', 'Bouw'],
    steps: [
      { title: 'Aanvraag & planning', description: 'U beschrijft het terrein en het doel van de meting; wij bepalen samen de gewenste nauwkeurigheid en scope.' },
      { title: 'Inmeting op locatie', description: 'Terrein, objecten, hoogtes en bestaande infrastructuur worden ingemeten met RTK-GPS en/of Total Station.' },
      { title: 'Verwerking', description: 'De ruwe meetdata wordt gecontroleerd en verwerkt tot een bruikbaar digitaal terreinmodel.' },
      { title: 'Levering', description: 'U ontvangt tekeningen, punten of een model in het formaat dat u nodig heeft voor ontwerp of berekening.' },
    ],
  },
  {
    slug: 'uitzetwerk',
    num: '02',
    icon: 'total-station',
    title: 'Uitzetwerk',
    summary:
      'Precisie-uitzetting van assen, rooilijnen, profielen, hoogtes en funderingspunten voor bouw- en GWW-projecten.',
    heroImage: '/images/services/equip-robot-plotter-actie.jpg',
    sectors: ['Aannemers', 'GWW', 'Bouw'],
    steps: [
      { title: 'Ontwerp ontvangen', description: 'Wij werken vanuit uw ontwerptekening of coördinatenlijst — assen, rooilijnen, profielen of funderingspunten.' },
      { title: 'Uitzetten op locatie', description: 'De punten worden nauwkeurig op het terrein gezet met RTK-GPS en/of robotgestuurde apparatuur.' },
      { title: 'Controle', description: 'Uitgezette punten worden gecontroleerd voordat de uitvoering start, om fouten in een vroeg stadium te vangen.' },
      { title: 'Overdracht', description: 'U krijgt een overzicht van de uitgezette punten, gereed voor de volgende fase van uitvoering.' },
    ],
  },
  {
    slug: 'as-built-metingen',
    num: '03',
    icon: 'shield',
    title: 'As-built metingen',
    summary:
      'Controlemetingen na uitvoering, inclusief toetsing aan ontwerp en opleverdossiers voor opdrachtgevers en toezichthouders.',
    heroImage: '/images/services/equip-robot-plotter-detail.jpg',
    sectors: ['Aannemers', 'Toezichthouders', 'GWW'],
    steps: [
      { title: 'Uitvoering afgerond', description: 'Na afronding van (een fase van) het werk plannen we de controlemeting in.' },
      { title: 'Inmeting werkelijke situatie', description: 'De daadwerkelijk gerealiseerde situatie wordt nauwkeurig ingemeten.' },
      { title: 'Toetsing aan ontwerp', description: 'De resultaten worden vergeleken met de ontwerptekening om afwijkingen op te sporen.' },
      { title: 'Opleverdossier', description: 'U ontvangt een dossier geschikt voor oplevering aan de opdrachtgever of toezichthouder.' },
    ],
  },
  {
    slug: 'gps-total-station',
    num: '04',
    icon: 'gnss',
    title: 'GPS & Total Station',
    summary:
      'Hoge-precisie inmeten en uitzetten met RTK-GPS en Total Station, geschikt voor grote terreinen en technische maatvoering.',
    heroImage: '/images/services/equip-total-station-pad.jpg',
    sectors: ['GWW', 'Bouw', 'Ingenieursbureaus'],
    steps: [
      { title: 'Instrumentkeuze', description: 'Afhankelijk van terrein en gewenste nauwkeurigheid kiezen we RTK-GPS, Total Station, of een combinatie.' },
      { title: 'Referentie opzetten', description: 'Bij gebruik van Total Station wordt eerst een vast referentiepunt bepaald.' },
      { title: 'Meten of uitzetten', description: 'Punten worden ingemeten of uitgezet met millimeterprecisie, ook op grote of lastig bereikbare terreinen.' },
      { title: 'Levering', description: 'De data wordt geleverd in het gewenste coördinatensysteem en formaat.' },
    ],
  },
  {
    slug: '3d-laserscanning',
    num: '05',
    icon: 'scanner',
    title: '3D-laserscanning & puntenwolken',
    summary:
      'Gedetailleerde 3D-opname van bestaande situaties als basis voor BIM, renovatie, clash-detectie en volumebepaling.',
    heroImage: '/images/services/equip-scanner-en-robot-tyker.jpg',
    sectors: ['Ingenieursbureaus', 'Renovatie & BIM', 'GWW'],
    steps: [
      { title: 'Aanvraag & planning', description: 'U beschrijft de situatie, wij bepalen samen de scope en de gewenste nauwkeurigheid.' },
      { title: 'Scan op locatie', description: 'Opname met 3D-laserscanner — meerdere standpunten voor volledige dekking.' },
      { title: 'Verwerking puntenwolk', description: 'Registratie en opschoning van de data tot één samenhangende puntenwolk.' },
      { title: 'Levering', description: 'Puntenwolk, model of tekening in het formaat dat u nodig heeft.' },
    ],
  },
  {
    slug: 'agrarische-metingen',
    num: '06',
    icon: 'field',
    title: 'Agrarische metingen',
    summary:
      'Perceelmetingen, drainageontwerp, hoogtekaarten en bodemprofielen voor modern agrarisch beheer.',
    sectors: ['Agrarisch'],
    steps: [
      { title: 'Perceel in kaart', description: 'Het perceel wordt ingemeten inclusief grenzen, hoogteverschillen en bestaande drainage.' },
      { title: 'Hoogtekaart', description: 'Op basis van de meting wordt een hoogtekaart opgesteld voor waterafvoer en beheer.' },
      { title: 'Drainageontwerp', description: 'Waar gewenst adviseren we over drainage op basis van de gemeten hoogtes.' },
      { title: 'Levering', description: 'U ontvangt de meetdata en kaarten in een bruikbaar formaat voor uw bedrijfsvoering.' },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
