import { Header } from '@/components/Header/Header';
import cls from './page.module.scss';
import { HeaderView } from '@/components/Header/types';
import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <>
      <Header view={HeaderView.Home} />
      <main className={cls.main}>
        <div className={cls.promo}>
          <section className={classNames('container', {}, [cls.promoSection])}>
            <p className={cls.promoHeading}>{t('Promo')}</p>
            <p className={cls.hierography}>未来ライン。</p>
          </section>
        </div>
      </main>
    </>
  );
}
