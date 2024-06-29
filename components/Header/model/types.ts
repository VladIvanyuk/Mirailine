export enum HeaderView {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Schedule = 'schedule',
  Prices = 'prices',
  Tracking = 'tracking',
  Contacts = 'contacts',
}

export interface IHeaderProps {
  view: HeaderView;
}
