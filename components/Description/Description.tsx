import { ReactNode } from 'react';
import cls from './Description.module.scss';
import { classNames } from '@/utils/classNames/classNames';

interface IDescription {
  children: ReactNode;
  className?: string;
}

export const Description = ({ children, className }: IDescription) => {
  return (
    <p className={classNames(cls.description, {}, [className])}>{children}</p>
  );
};
