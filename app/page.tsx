import { Header } from '@/components/Header/Header';
import cls from './page.module.scss';
import { HeaderView } from '@/components/Header/types';

export default function Home() {
  return (
    <>
      <Header view={HeaderView.Home} />
      <main className={cls.main}>
        <section className="container">MAIN PAGE</section>
      </main>
    </>
  );
}
