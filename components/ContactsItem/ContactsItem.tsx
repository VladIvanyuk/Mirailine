import Image from 'next/image';
import cls from './ContactsItem.module.scss';
import Phone from '@/public/images/vectors/phone.png';
import WA from '@/public/images/vectors/wa.png';
import Email from '@/public/images/vectors/email.png';
import Address from '@/public/images/vectors/address.png';
import Fax from '@/public/images/vectors/fax.png';
import { classNames } from '@/utils/classNames/classNames';

interface IContactsItemProps {
  type: ContactTypes;
  text: string;
  className?: string;
}

export enum ContactTypes {
  PHONE = 'phone',
  WA = 'wa',
  EMAIL = 'email',
  ADDRESS = 'address',
  FAX = 'fax',
}

export const ContactsItem = ({ type, text, className }: IContactsItemProps) => {
  const getContactType = (type: ContactTypes) => {
    switch (type) {
      case ContactTypes.PHONE:
        return {
          src: Phone,
          alt: 'Иконка телефона',
          hrefType: 'tel:',
        };
      case ContactTypes.WA:
        return {
          src: WA,
          alt: 'Иконка Whats App',
          hrefType: 'tel:',
        };
      case ContactTypes.EMAIL:
        return {
          src: Email,
          alt: 'Иконка почты',
          hrefType: 'mailto:',
        };
      case ContactTypes.ADDRESS:
        return {
          src: Address,
          alt: 'Адресс',
          hrefType: '',
        };
      case ContactTypes.FAX:
        return {
          src: Fax,
          alt: 'Факс',
          hrefType: 'tel:',
        };
    }
  };

  const contactType = getContactType(type);

  return (
    <li className={cls.contactWrapper}>
      <Image className={cls.img} src={contactType.src} alt={contactType.alt} />
      <a
        className={classNames(cls.contact, {}, [className])}
        href={`${contactType.hrefType}${text}`}
      >
        {text}
      </a>
    </li>
  );
};
