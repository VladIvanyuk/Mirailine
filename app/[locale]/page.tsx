import { Header } from '@/components/Header/Header';
import cls from './page.module.scss';
import { HeaderView } from '@/components/Header/types';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Header');
  return (
    <>
      <Header view={HeaderView.Home} />
      <main className={cls.main}>
        <section className="container">{t('Home')}</section>
      </main>
    </>
  );
}
