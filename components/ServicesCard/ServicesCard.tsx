import { classNames } from '@/utils/classNames/classNames';
import cls from './ServicesCard.module.scss';
import Link from 'next/link';

export enum ServicesBGPic {
  PLANET = 'planet',
  SHIP = 'ship',
  STOCK = 'stock',
}

interface IServicesCardProps {
  img: ServicesBGPic;
  title: string;
  page: string;
}

export const ServicesCard = ({ img, title, page }: IServicesCardProps) => {
  return (
    <li className={classNames(cls.card, {}, [cls[img]])}>
      <h3 className={cls.cardTitle}>{title}</h3>
      <Link className={cls.cardsLink} href={`/${page}`}>
        подробнее
      </Link>
    </li>
  );
};
