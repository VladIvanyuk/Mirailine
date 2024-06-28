import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import { useTranslations } from 'next-intl';
import TitleScheduleDecor from '@/public/images/text/schedule.png';
import { ScheduleList } from '@/components/ScheduleList/ScheduleList';
import Image from 'next/image';

export default function Schedule() {
  const t = useTranslations('Schedule');
  return (
    <>
      <Header view={HeaderView.Schedule} />
      <main className="main">
        <SectionLayout classes={cls.scheduleContainer}>
          <Title
            lineVariant={LineVariants.VARIANT_THREE}
            text={t('Schedule')}
            decorText={TitleScheduleDecor}
            className={cls.scheduleTitle}
          />
          <ScheduleList />
        </SectionLayout>
        <Image
          src={TitleScheduleDecor}
          alt="Иероглифы"
          className={cls.bottomDecor}
        />
        <div className={cls.bottomImg}></div>
      </main>
    </>
  );
}
