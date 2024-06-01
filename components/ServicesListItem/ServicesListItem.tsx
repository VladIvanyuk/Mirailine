import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';
import cls from './ServicesListItem.module.scss';
import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

interface IServicesListItemProps {
  className?: string;
  number: number;
  pic: StaticImageData;
  text: string;
}

export const ServicesListItem = ({
  className,
  pic,
  text,
  number,
}: IServicesListItemProps) => {
  const t = useTranslations();

  return (
    <li className={classNames(cls.servicesListItem, {}, [className])}>
      <p className={cls.itemNumber}>{number}</p>
      <Image className={cls.itemImage} src={pic} alt="pic" />
      <p className={cls.itemText}>{text}</p>
    </li>
  );
};
