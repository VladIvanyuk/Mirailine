import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import TitleServicesDecor from '@/public/images/text/services.png';
import { Description, FontSizes } from '@/components/Description/Description';
import { cards } from '@/components/ServicesCard/cardsData';
import { ServicesCard } from '@/components/ServicesCard/ServicesCard';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('Services');
  return (
    <>
      <Header view={HeaderView.Services} />
      <main>
        <SectionLayout className="container">
          <Title
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
                <li className={cls.numbersListItem}>
                  <p className={cls.numbersListNum}>100+</p>
                  <p className={cls.numbersListText}>{t('HappyClients')}</p>
                </li>
                <li className={cls.numbersListItem}>
                  <p className={cls.numbersListNum}>143+</p>
                  <p className={cls.numbersListText}>{t('TransportedCargo')}</p>
                </li>
                <li className={cls.numbersListItem}>
                  <p className={cls.numbersListNum}>450+</p>
                  <p className={cls.numbersListText}>{t('Employees')}</p>
                </li>
                <li className={cls.numbersListItem}>
                  <p className={cls.numbersListNum}>15000+</p>
                  <p className={cls.numbersListText}>{t('Warehouses')}</p>
                </li>
              </ul>
            </div>
            <div className={cls.servicesImage}></div>
          </div>
        </SectionLayout>
        <SectionLayout>
          <Title text={t('WeCan')} lineVariant={LineVariants.VARIANT_FIVE} />
          <ul className={cls.servicesCardsList}>
            {cards.map((card) => (
              <ServicesCard
                key={card.id}
                number={card.id}
                textKey={card.textKey}
                src={card.src}
              />
            ))}
          </ul>
        </SectionLayout>
      </main>
    </>
  );
}
