import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ContactTypes, ContactsItem } from '../ContactsItem/ContactsItem';
import cls from './ContactsList.module.scss';
import { classNames } from '@/utils/classNames/classNames';
import Image, { StaticImageData } from 'next/image';

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
  return (
    <div className={cls.contactsTextWrapper}>
      {country ? (
        <div className={cls.contactsContent}>
          <Image src={countryImg as StaticImport} alt={country} />
          <div
            className={classNames(cls.contactsTextBlock, {}, [
              cls.contactsTextCountryBlock,
            ])}
          >
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
          <div className={cls.contactsTextBlock}>
            <p
              className={classNames(cls.contactsTextSecondary, {}, [
                cls.contactsText,
              ])}
            >
              отдел
            </p>
            <p
              className={classNames(cls.contactsTextSecondary, {}, [
                cls.contactsText,
              ])}
            >
              претензий
            </p>
          </div>
        </div>
      )}
      <ul className={cls.contactsList}>
        <ContactsItem type={ContactTypes.PHONE} text={phone} />
        <ContactsItem type={ContactTypes.WA} text={wa} />
        <ContactsItem type={ContactTypes.EMAIL} text={email} />
        {children}
      </ul>
    </div>
  );
};
