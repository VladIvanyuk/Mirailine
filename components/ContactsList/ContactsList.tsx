import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ContactTypes, ContactsItem } from '../ContactsItem/ContactsItem';
import cls from './ContactsList.module.scss';
import { classNames } from '@/utils/classNames/classNames';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';

interface IContactsListProps {
  phone: string;
  wa: string;
  email: string;
  children?: React.ReactNode;
  country?: string;
  countrySubtext?: string;
  countryImg?: StaticImport;
}

export const ContactsList = ({
  phone,
  wa,
  email,
  children,
  country = '',
  countrySubtext = '',
  countryImg,
}: IContactsListProps) => {
  const t = useTranslations('Footer');
  return (
    <>
      {country ? (
        <div className={cls.contactsContent}>
          <Image
            className={cls.countryImg}
            src={countryImg as StaticImport}
            alt={country}
          />
          <div>
            <p
              className={classNames(cls.contactsTextTop, {}, [
                cls.contactsTextCountry,
                cls.contactsText,
              ])}
            >
              {countrySubtext}
            </p>
            <p
              className={classNames(cls.contactsTextBottom, {}, [
                cls.contactsTextCountry,
                cls.contactsText,
              ])}
            >
              {country}
            </p>
          </div>
        </div>
      ) : (
        <div className={cls.contactsContent}>
          <p className={classNames(cls.contactsText, {}, [cls.claims])}>
            {t('Claims')}
          </p>
        </div>
      )}
      <ul className={cls.contactsList}>
        <ContactsItem type={ContactTypes.PHONE} text={phone} />
        <ContactsItem type={ContactTypes.WA} text={wa} />
        <ContactsItem type={ContactTypes.EMAIL} text={email} />
        {children}
      </ul>
    </>
  );
};
