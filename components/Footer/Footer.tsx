import Link from 'next/link';
import { SectionLayout } from '../SectionLayout/SectionLayout';
import cls from './Footer.module.scss';
import { useLocale, useTranslations } from 'next-intl';
import { ContactsList } from '../ContactsList/ContactsList';

export const Footer = () => {
  const activeLocale = useLocale();
  const t = useTranslations('Navigations');
  return (
    <footer className={cls.footer}>
      <SectionLayout classes={cls.footerWrapper}>
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
            <Link className={cls.navLink} href={`/${activeLocale}/services`}>
              {t('Services')}
            </Link>
          </li>
          <li>
            <Link className={cls.navLink} href={`/${activeLocale}/schedule`}>
              {t('Schedule')}
            </Link>
          </li>
          <li>
            <Link className={cls.navLink} href={`/${activeLocale}/prices`}>
              {t('Prices')}
            </Link>
          </li>
          <li>
            <Link className={cls.navLink} href={`/${activeLocale}/tracking`}>
              {t('Tracking')}
            </Link>
          </li>
          <li>
            <Link className={cls.navLink} href={`/${activeLocale}/contacts`}>
              {t('Contacts')}
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <p>Отдел претензий</p>
            <ContactsList
              phone={'+7-994-109-5764'}
              wa={'+7-994-109-5764'}
              email={'claim@mirailine.com'}
            />
          </li>
          <li></li>
          <li></li>
        </ul>
      </SectionLayout>
    </footer>
  );
};
