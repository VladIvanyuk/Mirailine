import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';

export default function Prices() {
  return (
    <>
      <Header view={HeaderView.Prices} />
      <main className={cls.main}>
        <section className="container">Prices PAGE</section>
      </main>
    </>
  );
}
