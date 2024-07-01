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
import FadeIntoView from '../FadeIntoView/FadeIntoView';

interface IServicesListProps {
  className?: string;
}

const services = [
  {
    pic: Storage,
    text: 'Storage',
  },
  {
    pic: Transshipment,
    text: 'Transshipment',
  },
  {
    pic: Organizations,
    text: 'Organizations',
  },
  {
    pic: Customs,
    text: 'Customs',
  },
  {
    pic: Photo,
    text: 'Photo',
  },
  {
    pic: Tracking,
    text: 'Tracking',
  },
];

export const ServicesList = ({ className }: IServicesListProps) => {
  const t = useTranslations('Home');

  return (
    <div className={classNames(cls.servicesList, {}, [className])}>
      {services.map(({ pic, text }, index) => (
        <FadeIntoView className={cls.servicesListItem} key={index}>
          <ServicesListItem
            pic={pic}
            text={t(text)}
            number={index + 1}
            key={index}
          />
        </FadeIntoView>
      ))}
    </div>
  );
};
