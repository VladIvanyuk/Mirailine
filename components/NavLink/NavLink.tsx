'use client';

import { classNames } from '@/utils/classNames/classNames';
import cls from './NavLink.module.scss';
import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface INavLinkProps {
  className?: string;
  locale: string;
  children: ReactNode;
  route: string;
}

export const NavLink = ({
  className,
  locale,
  children,
  route,
}: INavLinkProps) => {
  const pathname = usePathname();
  const isCurrentRoute = pathname === `/${locale}${route}`;
  const mods = {
    [cls.active]: isCurrentRoute,
    [cls.isHome]: (pathname === '/ru' || pathname === '/en') && route === '/',
  };
  return (
    <li>
      <Link
        className={classNames(cls.navLink, mods, [className])}
        href={`/${locale}${route}`}
      >
        {children}
      </Link>
    </li>
  );
};
