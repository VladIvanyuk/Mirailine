'use-client';

import cls from './page.module.scss';
import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import { Description } from '@/components/Description/Description';
import { AboutBGPic, AboutCard } from '@/components/AboutCard/AboutCard';
import { ServicesList } from '@/components/ServicesList/ServicesList';
import Slider from '@/components/Slider/Slider';
import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';

const Home = () => {
  const t = useTranslations('Home');
  return (
    <>
      <Header view={HeaderView.Home} />

      <main>
        <div className={classNames(cls.promo, {}, [cls.wrapper])}>
          <SectionLayout classes={cls.promoSection}>
            <h1 className={cls.promoHeading}>{t('Promo')}</h1>
            <p className={cls.hierography}>未来ライン。</p>
          </SectionLayout>
        </div>
        {/* <SectionLayout classes={cls.wrapper}>
          <Title lineVariant={LineVariants.VARIANT_ONE} text={t('About')} />
          <div className={cls.aboutContent}>
            <div className={cls.aboutDescrWrapper}>
              <Description>{t('AboutDescr')}</Description>
            </div>
            <ul className={cls.aboutCards}>
              <AboutCard
                title={t('Logistic')}
                img={AboutBGPic.PLANET}
                page="services"
              />
              <AboutCard
                title={t('Warehouses')}
                img={AboutBGPic.WAREHOUSE}
                page="about"
              />
              <AboutCard
                title={t('Ships')}
                img={AboutBGPic.SHIP}
                page="schedule"
              />
            </ul>
          </div>
        </SectionLayout> */}
        {/* <SectionLayout classes={cls.wrapper}>
          <Title lineVariant={LineVariants.VARIANT_TWO} text={t('Services')} />
          <Description>{t('HelpDescr')}</Description>
          <div className={cls.servicesContent}>
            <div className={cls.servicesImg}></div>
            <ServicesList className={cls.servicesList} />
          </div>
        </SectionLayout>
        <SectionLayout classes={cls.wrapper}>
          <Title
            lineVariant={LineVariants.VARIANT_THREE}
            text={t('Partners')}
          />
          <Slider />
        </SectionLayout> */}
      </main>
    </>
  );
};

export default Home;
