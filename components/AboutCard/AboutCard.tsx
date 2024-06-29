import { classNames } from '@/utils/classNames/classNames';
import cls from './AboutCard.module.scss';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';

export enum AboutBGPic {
  PLANET = 'planet',
  SHIP = 'ship',
  WAREHOUSE = 'warehouse',
}

interface IAboutCardProps {
  img: AboutBGPic;
  title: string;
  page: string;
  locale: string;
}

export const AboutCard = ({ img, title, page, locale }: IAboutCardProps) => {
  return (
    <li className={classNames(cls.card, {}, [cls[img]])}>
      <h3 className={cls.cardTitle}>{title}</h3>
      <Link className={cls.cardsLink} href={`/${locale}/${page}`}>
        подробнее
      </Link>
    </li>
  );
};
