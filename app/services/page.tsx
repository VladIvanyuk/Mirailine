import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';

export default function Services() {
  return (
    <>
      <Header view={HeaderView.Services} />
      <main className={cls.main}>
        <section className="container">SERVICES PAGE</section>
      </main>
    </>
  );
}
