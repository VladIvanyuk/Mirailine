import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import { useTranslations } from 'next-intl';
import TitleTrackingDecor from '@/public/images/text/tracking.png';
import { TrackingSearch } from '@/components/TrackingSearch/TrackingSearch';

export default function Tracking() {
  const t = useTranslations('Tracking');
  return (
    <>
      <Header view={HeaderView.Tracking} />
      <main>
        <SectionLayout>
          <Title
            text={t('Tracking')}
            lineVariant={LineVariants.VARIANT_THREE}
            decorText={TitleTrackingDecor}
          />
          <TrackingSearch
            placeholder={t('TrackingSearchPlaceholder')}
            button={t('TrackingSearchButton')}
            title={t('TrackingSearch')}
          />
        </SectionLayout>
      </main>
    </>
  );
}
