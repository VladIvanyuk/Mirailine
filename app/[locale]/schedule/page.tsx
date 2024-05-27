import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';

export default function Schedule() {
  return (
    <>
      <Header view={HeaderView.Schedule} />
      <main className={cls.main}>
        <section className="container">Schedule PAGE</section>
      </main>
    </>
  );
}
