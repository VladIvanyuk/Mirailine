interface IRoutes {
  name: string;
  route: string;
  ru: string;
}

export const Routes: IRoutes[] = [
  {
    name: 'Home',
    route: '/',
    ru: 'Главная',
  },
  {
    name: 'About',
    route: '/about',
    ru: 'О компании',
  },
  {
    name: 'Services',
    route: '/services',
    ru: 'Услуги',
  },
  {
    name: 'Schedule',
    route: '/schedule',
    ru: 'Расписание',
  },
  {
    name: 'Prices',
    route: '/prices',
    ru: 'Цены',
  },
  {
    name: 'Tracking',
    route: '/tracking',
    ru: 'Отслеживание',
  },
  {
    name: 'Contacts',
    route: '/contacts',
    ru: 'Контакты',
  },
];
