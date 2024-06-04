import { classNames } from '@/utils/classNames/classNames';
import cls from './AboutCard.module.scss';
import Link from 'next/link';

export enum AboutBGPic {
  PLANET = 'planet',
  SHIP = 'ship',
  WAREHOUSE = 'warehouse',
}

interface IAboutCardProps {
  img: AboutBGPic;
  title: string;
  page: string;
}

export const AboutCard = ({ img, title, page }: IAboutCardProps) => {
  return (
    <li className={classNames(cls.card, {}, [cls[img]])}>
      <h3 className={cls.cardTitle}>{title}</h3>
      <Link className={cls.cardsLink} href={`/${page}`}>
        подробнее
      </Link>
    </li>
  );
};
