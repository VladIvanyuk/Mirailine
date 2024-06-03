'use client';

import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';
import cls from './AdressItem.module.scss';
import { ReactNode } from 'react';
import { Maps } from '../StockMap/StockMap';

interface IAdressItemProps {
  className?: string;
  children?: ReactNode;
  title: string;
  name?: string;
  onClick?: (name: string) => void;
}

export const AdressItem = ({
  className,
  children,
  title,
  name,
  onClick,
}: IAdressItemProps) => {
  return (
    <div className={classNames(cls.adressItem, {}, [className])}>
      <p
        onClick={(e) => onClick('toyama')}
        data-name={name}
        className={cls.adressItemTitle}
      >
        {title}
      </p>
      <div className={cls.adressItemText}>{children}</div>
    </div>
  );
};
