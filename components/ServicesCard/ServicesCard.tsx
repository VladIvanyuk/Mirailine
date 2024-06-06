import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';
import cls from './ServicesCard.module.scss';

interface IServicesCardProps {
   className?: string;
}

export const ServicesCard = ({className}: IServicesCardProps) => {
   const t = useTranslations();

   return (
      <div className={classNames(cls.servicesCard, {}, [className])}>

      </div>
   );
}