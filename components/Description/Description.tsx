import { ReactNode } from 'react';
import cls from './Description.module.scss';

export const Description = ({ children }: { children: ReactNode }) => {
  return <p className={cls.description}>{children}</p>;
};
