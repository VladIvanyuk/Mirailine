import cls from './Header.module.scss';
import Image from 'next/image';
import Logo from '@/public/logo.png';

export const Header = () => {
  return (
    <header className={cls.header}>
      <nav className="container">
        <Image src={Logo} alt="Vercel Logo" className={cls.vercelLogo} />
        <ul className={cls.nav}>
          <li>Главная</li>
          <li>О компании</li>
          <li>Услуги</li>
          <li>Расписание</li>
          <li>Цены</li>
          <li>Отслеживание</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </header>
  );
};
