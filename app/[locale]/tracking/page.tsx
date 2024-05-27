import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';

export default function Tracking() {
  return (
    <>
      <Header view={HeaderView.Tracking} />
      <main className={cls.main}>
        <section className="container">Tracking PAGE</section>
      </main>
    </>
  );
}
