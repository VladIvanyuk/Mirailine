import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';

export default function About() {
  return (
    <>
      <Header view={HeaderView.About} />
      <main className={cls.main}>
        <section className="container">ABOUT PAGE</section>
      </main>
    </>
  );
}
