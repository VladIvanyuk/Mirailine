import cls from './Header.module.scss';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import { classNames } from '@/utils/classNames/classNames';
import { IHeaderProps } from './types';
import Link from 'next/link';

export const Header = ({ view }: IHeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [cls[view]])}>
      <section className={cls.headerWrapper}>
        <div className={classNames(cls.headerNavWrapper, {}, ['container'])}>
          <Image src={Logo} alt="Mirai Line Logo" className={cls.logo} />
          <nav className={cls.nav}>
            <ul className={cls.navList}>
              <li>
                <Link className={cls.navLink} href="/">
                  Главная
                </Link>
              </li>
              <li>
                <Link className={cls.navLink} href="/about">
                  О компании
                </Link>
              </li>
              <li>
                <Link className={cls.navLink} href="/services">
                  Услуги
                </Link>
              </li>
              <li>
                <Link className={cls.navLink} href="/schedule">
                  Расписание
                </Link>
              </li>
              <li>
                <Link className={cls.navLink} href="/prices">
                  Цены
                </Link>
              </li>
              <li>
                <Link className={cls.navLink} href="/tracking">
                  Отслеживание
                </Link>
              </li>
              <li>
                <Link className={cls.navLink} href="/contacts">
                  Контакты
                </Link>
              </li>
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
