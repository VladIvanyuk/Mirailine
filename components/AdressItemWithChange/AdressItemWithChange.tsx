'use client';

import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';
import cls from './AdressItemWithChange.module.scss';
import { ReactNode } from 'react';
import { Maps } from '../StockMap/StockMap';

interface IAdressItemProps {
  className?: string;
  children?: ReactNode;
  title: string;
  name: string;
  map: string;
  onClick: (name: Maps) => void;
}

export const AdressItemWithChange = ({
  className,
  children,
  title,
  name,
  map,
  onClick,
}: IAdressItemProps) => {
  const mods = {
    [cls.active]: name === map,
  };
  return (
    <div className={classNames(cls.adressItem, {}, [className])}>
      <p
        onClick={() => onClick(name as Maps)}
        className={classNames(cls.adressItemTitle, mods, [])}
      >
        {title}
      </p>
      <div className={cls.adressItemText}>{children}</div>
    </div>
  );
};
