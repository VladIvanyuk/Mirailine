import cls from './Header.module.scss';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import { classNames } from '@/utils/classNames/classNames';

export const Header = () => {
  return (
    <header className={cls.header}>
      <section className={cls.headerWrapper}>
        <div className={classNames(cls.headerNavWrapper, {}, ['container'])}>
          <Image src={Logo} alt='Vercel Logo' className={cls.logo} />
          <nav className={cls.nav}>
            <ul className={cls.navList}>
              <li>Главная</li>
              <li>О компании</li>
              <li>Услуги</li>
              <li>Расписание</li>
              <li>Цены</li>
              <li>Отслеживание</li>
              <li>Контакты</li>
            </ul>
          </nav>
          <select name='lang' id='lang'>
            <option value='ru'>Русский</option>
            <option value='en'>English</option>
          </select>
        </div>
      </section>
      <section className={classNames('', {}, ['container'])}>
        МОРСКАЯ ПЕРЕВОЗКА ГРУЗОВ
      </section>
    </header>
  );
};
