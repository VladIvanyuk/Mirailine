import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import { useTranslations } from 'next-intl';
import TitleScheduleDecor from '@/public/images/text/schedule.png';
import { ScheduleList } from '@/components/ScheduleList/ScheduleList';

export default function Schedule() {
  const t = useTranslations('Schedule');
  return (
    <>
      <Header view={HeaderView.Schedule} />
      <main className="main">
        <SectionLayout>
          <Title
            lineVariant={LineVariants.VARIANT_THREE}
            text={t('Schedule')}
            decorText={TitleScheduleDecor}
          />
          <ScheduleList />
        </SectionLayout>
        <div className={cls.bottomImg}></div>
      </main>
    </>
  );
}
