import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';
import cls from './ListHeading.module.scss';
import { ReactNode } from 'react';

interface IListHeadingProps {
  className?: string;
  children: ReactNode;
}

export const ListHeading = ({ className, children }: IListHeadingProps) => {
  const t = useTranslations();
  console.log(className);

  return (
    <div className={classNames(cls.listHeading, {}, [className])}>
      {children}
    </div>
  );
};
