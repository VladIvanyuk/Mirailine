'use client';

import { classNames } from '@/utils/classNames/classNames';
import cls from './ScrollTopButton.module.scss';

interface IScrollTopButtonProps {
  className?: string;
}

export const ScrollTopButton = ({ className }: IScrollTopButtonProps) => {
  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className={classNames(cls.scrollTopButton, {}, [className])}
    ></button>
  );
};
