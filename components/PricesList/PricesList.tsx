import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';
import cls from './PricesList.module.scss';
import { IPricesItem } from './model/pricesData';
import { ListHeading } from '../ListHeading/ListHeading';
import FadeIntoView from '../FadeIntoView/FadeIntoView';

interface IPricesListProps {
  className?: string;
  title: string;
  list: IPricesItem[];
}

export const PricesList = ({ className, title, list }: IPricesListProps) => {
  const t = useTranslations('PricesList');

  return (
    <div className={classNames(cls.pricesListWrapper, {}, [className])}>
      <div className={cls.pricesList}>
        <ListHeading className={cls.listHeading}>{title}</ListHeading>
        <div className={cls.textRow}>
          <p className={classNames(cls.textPart, {}, [cls.textPartHeading])}>
            Категория груза
          </p>
          <p className={classNames(cls.textPart, {}, [cls.textPartHeading])}>
            Цена
          </p>
        </div>
        {list.map((item, index) => (
          <FadeIntoView key={index}>
            <div className={classNames(cls.textRowValues, {}, [])}>
              <p className={classNames(cls.textPart, {}, [])}>
                {t(item.categoryKey)}
              </p>
              <p className={classNames(cls.textPart, {}, [])}>
                {t(item.priceKey)}
              </p>
            </div>
          </FadeIntoView>
        ))}
        <FadeIntoView>
          <p className={cls.listNote}>{t('Details')}</p>
        </FadeIntoView>
      </div>
    </div>
  );
};
