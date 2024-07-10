import { Header } from '@/components/Header/Header';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title, TitleAnimations } from '@/components/Title/Title';
import TitleServicesDecor from '@/public/images/text/services.png';
import { Description, FontSizes } from '@/components/Description/Description';
import { ServicesCard } from '@/components/ServicesCard/ServicesCard';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { HeaderView } from '@/components/Header/model/types';
import { cards } from '@/components/ServicesCard/model/cardsData';
import { classNames } from '@/utils/classNames/classNames';

export default function Services() {
  const t = useTranslations('Services');
  return (
    <>
      <Header view={HeaderView.Services} />
      <main className='main'>
        <SectionLayout classes={cls.servicesContainer}>
          <Title
            animation={TitleAnimations.RIGHT}
            decorText={TitleServicesDecor}
            text={t('Services')}
            lineVariant={LineVariants.VARIANT_SIX}
          />
          <div className={cls.servicesContent}>
            <div className={cls.servicesTextContent}>
              <Description fontSize={FontSizes.M} className={cls.servicesDescr}>
                {t('Description')}
              </Description>
              <ul className={cls.numbersList}>
                <li
                  className={classNames(cls.numbersListItem, {}, [
                    cls.numbersFirstListItem,
                  ])}
                >
                  <p className={cls.numbersListNum}>12000+</p>
                  <p className={cls.numbersListText}>{t('HappyClients')}</p>
                </li>
                <li
                  className={classNames(cls.numbersListItem, {}, [
                    cls.numbersSecondListItem,
                  ])}
                >
                  <p className={cls.numbersListNum}>38840+</p>
                  <p className={cls.numbersListText}>{t('TransportedCargo')}</p>
                </li>
                <li
                  className={classNames(cls.numbersListItem, {}, [
                    cls.numbersThirdListItem,
                  ])}
                >
                  <p className={cls.numbersListNum}>450+</p>
                  <p className={cls.numbersListText}>{t('Employees')}</p>
                </li>
                <li
                  className={classNames(cls.numbersListItem, {}, [
                    cls.numbersFourthListItem,
                  ])}
                >
                  <p className={cls.numbersListNum}>15000+</p>
                  <p className={cls.numbersListText}>{t('Warehouses')}</p>
                </li>
              </ul>
            </div>
            <Image
              className={cls.servicesImgDecor}
              src={TitleServicesDecor}
              alt='Иероглифы'
            />
            <div className={cls.servicesImage}></div>
          </div>
        </SectionLayout>
        <SectionLayout>
          <Title
            animation={TitleAnimations.LEFT}
            text={t('WeCan')}
            lineVariant={LineVariants.VARIANT_FIVE}
          />
          <div className={cls.servicesCardsList}>
            {cards.map((card) => (
              <ServicesCard
                key={card.id}
                number={card.id}
                textKey={card.textKey}
                src={card.src}
              />
            ))}
          </div>
        </SectionLayout>
      </main>
    </>
  );
}
