import cls from './page.module.scss';
import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import { Description } from '@/components/Description/Description';
import { AboutBGPic, AboutCard } from '@/components/AboutCard/AboutCard';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <>
      <main>
        <div className={classNames(cls.promo, {}, [cls.wrapper])}>
          <SectionLayout classes={cls.promoSection}>
            <h1 className={cls.promoHeading}>{t('Promo')}</h1>
            <p className={cls.hierography}>未来ライン。</p>
          </SectionLayout>
        </div>
        <SectionLayout classes={cls.wrapper}>
          <Title lineVariant={LineVariants.VARIANT_ONE} text={t('About')} />
          <div className={cls.aboutContent}>
            <div className={cls.aboutDescrWrapper}>
              <Description>
                мы оказываем всестороннюю помощь в&nbsp;доставке
                и&nbsp;складировании грузов
              </Description>
            </div>
            <ul className={cls.aboutCards}>
              <AboutCard
                title={'Профессиональные логистические услуги'}
                img={AboutBGPic.PLANET}
                page="services"
              />
              <AboutCard
                title={'Cобственные склады'}
                img={AboutBGPic.STOCK}
                page="about"
              />
              <AboutCard
                title={'Регулярные рейсы во\u00A0Владивосток'}
                img={AboutBGPic.SHIP}
                page="schedule"
              />
            </ul>
          </div>
        </SectionLayout>
        <SectionLayout>
          <Title lineVariant={LineVariants.VARIANT_TWO} text={t('Services')} />
          <div className={cls.servicesContentWrapper}>
            <Description>чем мы можем помочь</Description>
            <div className={cls.servicesContent}>
              <div className={cls.servicesImg}></div>
              <ul className={cls.servicesList}></ul>
            </div>
          </div>
        </SectionLayout>
      </main>
    </>
  );
}
