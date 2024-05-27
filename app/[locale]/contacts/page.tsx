import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';

export default function Contacts() {
  return (
    <>
      <Header view={HeaderView.Contacts} />
      <main className={cls.main}>
        <section className="container">Contacts PAGE</section>
      </main>
    </>
  );
}
