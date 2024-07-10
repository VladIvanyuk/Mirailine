import { Header } from '@/components/Header/Header';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import { useTranslations } from 'next-intl';
import TitleTrackingDecor from '@/public/images/text/tracking.png';
import { TrackingSearch } from '@/components/TrackingSearch/TrackingSearch';
import { Description } from '@/components/Description/Description';
import { HeaderView } from '@/components/Header/model/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mirai Line | Tracking',
};

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
      <main className='main'>
        <SectionLayout classes={cls.titleWrapper}>
          <Title
            className={cls.trackingTitle}
            text={t('Tracking')}
            lineVariant={LineVariants.VARIANT_THREE}
            decorText={TitleTrackingDecor}
          />
          <Description className={cls.mobDescr}>
            {t('TrackingSearch')}
          </Description>
        </SectionLayout>
        <SectionLayout classes={cls.searchWrapper}>
          <TrackingSearch translations={searchComponentTranslations} />
        </SectionLayout>
      </main>
    </>
  );
}
