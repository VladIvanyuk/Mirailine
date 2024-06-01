import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';
import cls from './ServicesList.module.scss';
import Storage from '@/public/images/icons/storage.png';
import Transshipment from '@/public/images/icons/transshipment.png';
import Organizations from '@/public/images/icons/organization.png';
import Customs from '@/public/images/icons/customs.png';
import Photo from '@/public/images/icons/photo.png';
import Tracking from '@/public/images/icons/tracking.png';
import { ServicesListItem } from '../ServicesListItem/ServicesListItem';

interface IServicesListProps {
  className?: string;
}

const services = [
  {
    pic: Storage,
    text: 'Хранение груза на наших складах',
  },
  {
    pic: Transshipment,
    text: 'Перевалка груза в порту Тояма',
  },
  {
    pic: Organizations,
    text: 'Организация морской перевозки',
  },
  {
    pic: Customs,
    text: 'Таможенное оформление и сопровождение',
  },
  {
    pic: Photo,
    text: 'Фотоопись автомобиля',
  },
  {
    pic: Tracking,
    text: 'Отслеживание движение груза',
  },
];

export const ServicesList = ({ className }: IServicesListProps) => {
  const t = useTranslations();

  return (
    <div className={classNames(cls.servicesList, {}, [className])}>
      {services.map(({ pic, text }, index) => (
        <ServicesListItem
          pic={pic}
          text={text}
          number={index + 1}
          key={index}
        />
      ))}
    </div>
  );
};
