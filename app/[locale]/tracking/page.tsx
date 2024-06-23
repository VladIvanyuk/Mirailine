import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import { useTranslations } from 'next-intl';
import TitleTrackingDecor from '@/public/images/text/tracking.png';
import { TrackingSearch } from '@/components/TrackingSearch/TrackingSearch';

export interface ITranslationsTypes {
  placeholder: string;
  button: string;
  title: string;
  frameNumber: string;
  frameName: string;
  sailingDate: string;
  status: string;
  waiting: string;
  onTheWay: string;
  download: string;
}

export default function Tracking() {
  const t = useTranslations('Tracking');

  const searchComponentTranslations: ITranslationsTypes = {
    placeholder: t('TrackingSearchPlaceholder'),
    button: t('TrackingSearchButton'),
    title: t('TrackingSearch'),
    frameNumber: t('FrameNumber'),
    frameName: t('FrameName'),
    sailingDate: t('SailingDate'),
    status: t('Status'),
    waiting: t('Waiting'),
    onTheWay: t('OnTheWay'),
    download: t('Download'),
  };

  return (
    <>
      <Header view={HeaderView.Tracking} />
      <main className="main">
        <SectionLayout>
          <Title
            text={t('Tracking')}
            lineVariant={LineVariants.VARIANT_THREE}
            decorText={TitleTrackingDecor}
          />
          <TrackingSearch translations={searchComponentTranslations} />
        </SectionLayout>
      </main>
    </>
  );
}
