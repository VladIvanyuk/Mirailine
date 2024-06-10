import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';
import cls from './PricesList.module.scss';

interface IPricesListProps {
  className?: string;
  title: string;
}

export const PricesList = ({ className, title }: IPricesListProps) => {
  const t = useTranslations();

  return (
    <div className={classNames(cls.pricesListWrapper, {}, [className])}>
      <div className={cls.pricesList}>
        <h5 className={cls.listTitle}>{title}</h5>
        <div className={cls.textRow}>
          <p className={classNames(cls.textPart, {}, [cls.textPartHeading])}>
            Категория груза
          </p>
          <p className={classNames(cls.textPart, {}, [cls.textPartHeading])}>
            Цена
          </p>
        </div>
        <div className={classNames(cls.textRowValues, {}, [])}>
          <p className={classNames(cls.textPart, {}, [])}>Категория груза</p>
          <p className={classNames(cls.textPart, {}, [])}>Цена</p>
        </div>
      </div>
    </div>
  );
};
