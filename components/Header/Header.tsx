import cls from './Header.module.scss';
import Image from 'next/image';
import Logo from '@/public/images/logo.png';
import { classNames } from '@/utils/classNames/classNames';
import { IHeaderProps } from './types';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { LocaleSwitcher } from '../LocaleSwitcher/LocaleSwitcher';
import { SectionLayout } from '../SectionLayout/SectionLayout';

export const Header = ({ view }: IHeaderProps) => {
  const t = useTranslations('Navigations');
  const activeLocale = useLocale();
  return (
    <header className={classNames(cls.header, {}, [cls[view]])}>
      <div className={cls.headerWrapper}>
        <SectionLayout classes={cls.headerNavWrapper}>
          <Image
            src={Logo}
            priority={true}
            alt="Mirai Line Logo"
            className={cls.logo}
          />
          <nav className={cls.nav}>
            <ul className={cls.navList}>
              <li>
                <Link className={cls.navLink} href={`/${activeLocale}`}>
                  {t('Home')}
                </Link>
              </li>
              <li>
                <Link className={cls.navLink} href={`/${activeLocale}/about`}>
                  {t('About')}
                </Link>
              </li>
              <li>
                <Link
                  className={cls.navLink}
                  href={`/${activeLocale}/services`}
                >
                  {t('Services')}
                </Link>
              </li>
              <li>
                <Link
                  className={cls.navLink}
                  href={`/${activeLocale}/schedule`}
                >
                  {t('Schedule')}
                </Link>
              </li>
              <li>
                <Link className={cls.navLink} href={`/${activeLocale}/prices`}>
                  {t('Prices')}
                </Link>
              </li>
              <li>
                <Link
                  className={cls.navLink}
                  href={`/${activeLocale}/tracking`}
                >
                  {t('Tracking')}
                </Link>
              </li>
              <li>
                <Link
                  className={cls.navLink}
                  href={`/${activeLocale}/contacts`}
                >
                  {t('Contacts')}
                </Link>
              </li>
            </ul>
          </nav>
          <LocaleSwitcher />
        </SectionLayout>
      </div>
    </header>
  );
};
