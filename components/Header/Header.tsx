import cls from './Header.module.scss';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import { classNames } from '@/utils/classNames/classNames';
import { IHeaderProps } from './types';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from '../LocaleSwitcher/LocaleSwitcher';

export const Header = ({ view }: IHeaderProps) => {
  const t = useTranslations('Header');
  return (
    <header className={classNames(cls.header, {}, [cls[view]])}>
      <section className={cls.headerWrapper}>
        <div className={classNames(cls.headerNavWrapper, {}, ['container'])}>
          <Image src={Logo} alt="Mirai Line Logo" className={cls.logo} />
          <nav className={cls.nav}>
            <ul className={cls.navList}>
              <li>
                <Link className={cls.navLink} href="/">
                  {t('Home')}
                </Link>
              </li>
              <li>
                <Link className={cls.navLink} href="/about">
                  {t('About')}
                </Link>
              </li>
              <li>
                <Link className={cls.navLink} href="/services">
                  {t('Services')}
                </Link>
              </li>
              <li>
                <Link className={cls.navLink} href="/schedule">
                  {t('Schedule')}
                </Link>
              </li>
              <li>
                <Link className={cls.navLink} href="/prices">
                  {t('Prices')}
                </Link>
              </li>
              <li>
                <Link className={cls.navLink} href="/tracking">
                  {t('Tracking')}
                </Link>
              </li>
              <li>
                <Link className={cls.navLink} href="/contacts">
                  {t('Contacts')}
                </Link>
              </li>
            </ul>
          </nav>
          <LocaleSwitcher />
        </div>
      </section>
    </header>
  );
};
