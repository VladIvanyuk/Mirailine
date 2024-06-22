'use client';

import cls from './Header.module.scss';
import Image from 'next/image';
import Logo from '@/public/images/logo.png';
import { classNames } from '@/utils/classNames/classNames';
import { IHeaderProps } from './types';
import { useLocale } from 'next-intl';
import { LocaleSwitcher } from '../LocaleSwitcher/LocaleSwitcher';
import { SectionLayout } from '../SectionLayout/SectionLayout';
import { NavLink } from '../NavLink/NavLink';
import { Routes } from './Routes';

export const Header = ({ view }: IHeaderProps) => {
  const activeLocale = useLocale();
  return (
    <header className={classNames('', {}, [cls[view]])}>
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
                  {activeLocale === 'ru' ? route.ru : route.name}
                </NavLink>
              ))}
            </ul>
          </nav>
          <LocaleSwitcher className={cls.localeSwitcher} />
        </SectionLayout>
      </div>
    </header>
  );
};
