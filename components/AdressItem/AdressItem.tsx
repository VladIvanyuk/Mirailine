'use client';

import { classNames } from '@/utils/classNames/classNames';
import cls from './AdressItem.module.scss';
import { ReactNode } from 'react';

interface IAdressItemProps {
  className?: string;
  children?: ReactNode;
  title: string;
}

export const AdressItem = ({
  className,
  children,
  title,
}: IAdressItemProps) => {
  return (
    <div className={classNames(cls.adressItem, {}, [className])}>
      <p className={classNames(cls.adressItemTitle, {}, [])}>{title}</p>
      <div className={cls.adressItemText}>{children}</div>
    </div>
  );
};
