// Structured content voor de 6 echte diensten van Martin Aarts.
// Bron: bestaande site (martinaarts.xyz) — geen enkele dienst hier is
// verzonnen. Fase 2 bouwt de volledige dienstpagina's op basis hiervan.

export interface Service {
  slug: string;
  num: string;
  icon: 'ruler' | 'total-station' | 'shield' | 'gnss' | 'scanner' | 'field';
  title: string;
  summary: string;
}

export const services: Service[] = [
  {
    slug: 'topografische-metingen',
    num: '01',
    icon: 'ruler',
    title: 'Topografische metingen',
    summary:
      'Inmeten van terrein, objecten, hoogtes en bestaande infrastructuur voor ontwerp, volumeberekeningen en revisietekeningen.',
  },
  {
    slug: 'uitzetwerk',
    num: '02',
    icon: 'total-station',
    title: 'Uitzetwerk',
    summary:
      'Precisie-uitzetting van assen, rooilijnen, profielen, hoogtes en funderingspunten voor bouw- en GWW-projecten.',
  },
  {
    slug: 'as-built-metingen',
    num: '03',
    icon: 'shield',
    title: 'As-built metingen',
    summary:
      'Controlemetingen na uitvoering, inclusief toetsing aan ontwerp en opleverdossiers voor opdrachtgevers.',
  },
  {
    slug: 'gps-total-station',
    num: '04',
    icon: 'gnss',
    title: 'GPS & Total Station',
    summary:
      'Hoge-precisie inmeten en uitzetten met RTK-GPS en Total Station, geschikt voor grote terreinen.',
  },
  {
    slug: '3d-laserscanning',
    num: '05',
    icon: 'scanner',
    title: '3D-laserscanning & puntenwolken',
    summary:
      'Gedetailleerde 3D-opname van bestaande situaties als basis voor BIM, renovatie en clash-detectie.',
  },
  {
    slug: 'agrarische-metingen',
    num: '06',
    icon: 'field',
    title: 'Agrarische metingen',
    summary:
      'Perceelmetingen, drainageontwerp, hoogtekaarten en bodemprofielen voor modern agrarisch beheer.',
  },
];
