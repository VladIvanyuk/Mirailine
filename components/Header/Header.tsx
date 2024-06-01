import cls from './Header.module.scss';
import Image from 'next/image';
import Logo from '@/public/images/logo.png';
import { classNames } from '@/utils/classNames/classNames';
import { IHeaderProps } from './types';
import { useLocale, useTranslations } from 'next-intl';
import { LocaleSwitcher } from '../LocaleSwitcher/LocaleSwitcher';
import { SectionLayout } from '../SectionLayout/SectionLayout';
import { NavLink } from '../NavLink/NavLink';

const Routes = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'About',
    route: '/about',
  },
  {
    name: 'Services',
    route: '/services',
  },
  {
    name: 'Schedule',
    route: '/schedule',
  },
  {
    name: 'Prices',
    route: '/prices',
  },
  {
    name: 'Tracking',
    route: '/tracking',
  },
  {
    name: 'Contacts',
    route: '/contacts',
  },
];

export const Header = ({ view }: IHeaderProps) => {
  const t = useTranslations('Navigations');
  const activeLocale = useLocale();
  return (
    <header className={classNames(cls.header, {}, [cls[view]])}>
      <div className={cls.headerWrapper}>
        <SectionLayout classes={cls.headerNavWrapper}>
          <Image
            src={Logo}
            priority={true}
            alt="Mirai Line Logo"
            className={cls.logo}
          />
          <nav className={cls.nav}>
            <ul className={cls.navList}>
              {Routes.map((route) => (
                <NavLink
                  className={cls.navLink}
                  locale={activeLocale}
                  route={route.route}
                  key={route.name}
                >
                  {t(route.name)}
                </NavLink>
              ))}
            </ul>
          </nav>
          <LocaleSwitcher />
        </SectionLayout>
      </div>
    </header>
  );
};
