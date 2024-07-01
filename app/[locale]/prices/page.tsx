import { Header } from '@/components/Header/Header';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import TitlePricesDecor from '@/public/images/text/prices.png';
import { useTranslations } from 'next-intl';
import { PricesList } from '@/components/PricesList/PricesList';
import { pricesData } from '@/components/PricesList/model/pricesData';
import { HeaderView } from '@/components/Header/model/types';
import FadeIntoView from '@/components/FadeIntoView/FadeIntoView';

export default function Prices() {
  const t = useTranslations('Prices');
  return (
    <>
      <Header view={HeaderView.Prices} />
      <main className="main">
        <SectionLayout classes={cls.titleWrapper}>
          <Title
            className={cls.scheduleTitle}
            text={t('Title')}
            decorText={TitlePricesDecor}
            lineVariant={LineVariants.VARIANT_EIGHT}
          />
          <p className={cls.note}>{t('Note')}</p>
        </SectionLayout>
        <SectionLayout classes={cls.listWrapper}>
          <PricesList title={t('OskVdk')} list={pricesData.Osaka} />
          <FadeIntoView>
            <PricesList title={t('YokVdk')} list={pricesData.Yokohama} />
          </FadeIntoView>
          <FadeIntoView>
            <PricesList title={t('ToyaVdk')} list={pricesData.Toyama} />
          </FadeIntoView>
        </SectionLayout>
      </main>
    </>
  );
}
