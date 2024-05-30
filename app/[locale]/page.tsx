import cls from './page.module.scss';
import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import { Description } from '@/components/Description/Description';
import {
  ServicesBGPic,
  ServicesCard,
} from '@/components/ServicesCard/ServicesCard';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <>
      <main className={cls.main}>
        <div className={classNames(cls.promo, {}, [cls.wrapper])}>
          <SectionLayout classes={cls.promoSection}>
            <h1 className={cls.promoHeading}>{t('Promo')}</h1>
            <p className={cls.hierography}>未来ライン。</p>
          </SectionLayout>
        </div>
        <SectionLayout classes={cls.wrapper}>
          <Title lineVariant={LineVariants.VARIANT_ONE} text={t('Services')} />
          <div className={cls.servicesContent}>
            <div className={cls.servicesDescrWrapper}>
              <Description>
                мы оказываем всестороннюю помощь в&nbsp;доставке
                и&nbsp;складировании грузов
              </Description>
            </div>
            <ul className={cls.servicesCards}>
              <ServicesCard
                title={'Профессиональные логистические услуги'}
                img={ServicesBGPic.PLANET}
                page="services"
              />
              <ServicesCard
                title={'Cобственные склады'}
                img={ServicesBGPic.STOCK}
                page="about"
              />
              <ServicesCard
                title={'Регулярные рейсы во\u00A0Владивосток'}
                img={ServicesBGPic.SHIP}
                page="schedule"
              />
            </ul>
          </div>
        </SectionLayout>
      </main>
    </>
  );
}
