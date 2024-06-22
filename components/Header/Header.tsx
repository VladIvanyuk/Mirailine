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
import { useState } from 'react';

export const Header = ({ view }: IHeaderProps) => {
  const activeLocale = useLocale();
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const showSidebarHandler = () => {
    setIsShowSidebar((prev) => !prev);
  };

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
          <div className={cls.navPanel}>
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
          </div>
          <div
            className={classNames(
              cls.navPanelMob,
              { [cls['show']]: isShowSidebar },
              []
            )}
          >
            <nav className={cls.navMob}>
              <LocaleSwitcher className={cls.localeSwitcher} />
              <ul className={cls.navListMob}>
                {Routes.map((route) => (
                  <NavLink
                    className={cls.navLinkMob}
                    locale={activeLocale}
                    route={route.route}
                    key={route.name}
                  >
                    {activeLocale === 'ru' ? route.ru : route.name}
                  </NavLink>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <input
              type="checkbox"
              id="burger-checkbox"
              className={cls.burgerCheckbox}
            />
            <label
              onClick={showSidebarHandler}
              className={cls.burger}
              htmlFor="burger-checkbox"
            ></label>
          </div>
        </SectionLayout>
      </div>
    </header>
  );
};
