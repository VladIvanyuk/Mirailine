import cls from './Header.module.scss';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import { classNames } from '@/utils/classNames/classNames';
import { IHeaderProps } from './types';

export const Header = ({ view }: IHeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [cls[view]])}>
      <section className={cls.headerWrapper}>
        <div className={classNames(cls.headerNavWrapper, {}, ['container'])}>
          <Image src={Logo} alt="Mirai Line Logo" className={cls.logo} />
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
          <select className={cls.langSwitcher} name="lang" id="lang">
            <option value="ru">РУС</option>
            <option value="en">ENG</option>
          </select>
        </div>
      </section>
    </header>
  );
};
