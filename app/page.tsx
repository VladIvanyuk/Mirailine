import { Header } from '@/components/Header/Header';
import cls from './page.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <main className={cls.main}>
        <section className="container">HELLO</section>
      </main>
    </>
  );
}
