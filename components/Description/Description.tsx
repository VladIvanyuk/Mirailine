import { ReactNode } from 'react';
import cls from './Description.module.scss';
import { classNames } from '@/utils/classNames/classNames';

interface IDescription {
  children: ReactNode;
  className?: string;
  fontSize?: any;
}

export enum FontSizes {
  L = 'large',
  M = 'medium',
}

export const Description = ({
  children,
  className,
  fontSize = 'large',
}: IDescription) => {
  return (
    <p className={classNames(cls.description, {}, [className, cls[fontSize]])}>
      {children}
    </p>
  );
};
