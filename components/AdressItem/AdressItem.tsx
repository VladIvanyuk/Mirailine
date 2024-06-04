import { classNames } from '@/utils/classNames/classNames';
import cls from './AdressItem.module.scss';
import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('About');
  return (
    <div className={classNames(cls.adressItem, {}, [className])}>
      <p className={classNames(cls.adressItemTitle, {}, [])}>{t(title)}</p>
      <div className={cls.adressItemText}>{children}</div>
    </div>
  );
};
