import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import TitlePricesDecor from '@/public/images/text/prices.png';
import { useTranslations } from 'next-intl';
import { PricesList } from '@/components/PricesList/PricesList';

export default function Prices() {
  const t = useTranslations('Prices');
  return (
    <>
      <Header view={HeaderView.Prices} />
      <main>
        <SectionLayout>
          <Title
            text={t('Title')}
            decorText={TitlePricesDecor}
            lineVariant={LineVariants.VARIANT_EIGHT}
          />
          <p className={cls.note}>{t('Note')}</p>
          <PricesList title={t('OskVdk')} />
        </SectionLayout>
      </main>
    </>
  );
}
