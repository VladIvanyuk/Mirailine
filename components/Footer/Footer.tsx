import Link from 'next/link';
import { SectionLayout } from '../SectionLayout/SectionLayout';
import cls from './Footer.module.scss';
import { useLocale, useTranslations } from 'next-intl';
import { ContactsList } from '../ContactsList/ContactsList';
import Image from 'next/image';
import Date from '@/public/images/vectors/date.png';
import JapanImg from '@/public/images/countries/japan.png';
import RussiaImg from '@/public/images/countries/russia.png';

export enum ContactNumbers {
  PRETENSION_CONTACT = '+7-994-109-5764',
  PRETENSION_EMAIL = 'claim@mirailine.com',
  JAPAN_TEL_CONTACT = '+81-766-86-0772',
  JAPAN_WA_CONTACT = '+81-90-7357-8470',
  JAPAN_EMAIL_CONTACT = 'shipping@mirailine.com',
  RUSSIA_CONTACT = '+7-994-109-2002',
  RUSSIA_EMAIL_CONTACT = 'vladivostok@mirailine.com',
}

export const Footer = () => {
  const activeLocale = useLocale();
  const t = useTranslations('Navigations');
  const t1 = useTranslations('Footer');
  return (
    <footer className={cls.footer}>
      <SectionLayout classes={cls.footerWrapper}>
        <div className={cls.footerListsWrapper}>
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
          <ul className={cls.contactsList}>
            <li>
              <ContactsList
                phone={ContactNumbers.PRETENSION_CONTACT}
                wa={ContactNumbers.PRETENSION_CONTACT}
                email={ContactNumbers.PRETENSION_EMAIL}
              >
                <li className={cls.contactWrapper}>
                  <Image src={Date} alt={'Иконка календаря'} />
                  <div className={cls.workTime}>
                    <p>{`(${t1('Days')})`}</p>
                    <p>9:00 - 18:00</p>
                    <p>{`(${t1('Text')})`}</p>
                  </div>
                </li>
              </ContactsList>
            </li>
            <li>
              <ContactsList
                phone={ContactNumbers.JAPAN_TEL_CONTACT}
                wa={ContactNumbers.JAPAN_WA_CONTACT}
                email={ContactNumbers.JAPAN_EMAIL_CONTACT}
                country={t1('Japan')}
                countrySubtext={t1('ContactsIn')}
                countryImg={JapanImg}
              />
            </li>
            <li>
              <ContactsList
                phone={ContactNumbers.RUSSIA_CONTACT}
                wa={ContactNumbers.RUSSIA_CONTACT}
                email={ContactNumbers.RUSSIA_EMAIL_CONTACT}
                country={t1('Russia')}
                countrySubtext={t1('ContactsIn')}
                countryImg={RussiaImg}
              />
            </li>
          </ul>
        </div>
      </SectionLayout>
      <div className={cls.footerBottom}>
        <SectionLayout classes={cls.footerBottomWrapper}>
          <p className={cls.footerBottomText}>{t1('Copyright')}</p>
        </SectionLayout>
      </div>
    </footer>
  );
};
