import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';
import cls from './ServicesCard.module.scss';
import Image, { StaticImageData } from 'next/image';

interface IServicesCardProps {
  className?: string;
  textKey: string;
  src: StaticImageData;
  number: number;
}

export const ServicesCard = ({
  className,
  src,
  textKey,
  number,
}: IServicesCardProps) => {
  const t = useTranslations('Services');

  return (
    <li className={classNames(cls.servicesCard, {}, [className])}>
      <Image src={src} alt={t(textKey)} />
      <p className={cls.servicesCardText}>{t(textKey)}</p>
      <span className={cls.cardNumber}>{number}</span>
    </li>
  );
};
