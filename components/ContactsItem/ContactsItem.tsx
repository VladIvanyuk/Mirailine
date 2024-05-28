import Image from 'next/image';
import cls from './ContactsItem.module.scss';
import Phone from '@/public/vectors/phone.png';
import WA from '@/public/vectors/wa.png';
import Email from '@/public/vectors/email.png';

interface IContactsItemProps {
  type: ContactTypes;
  text: string;
}

export enum ContactTypes {
  PHONE = 'phone',
  WA = 'wa',
  EMAIL = 'email',
}

export const ContactsItem = ({ type, text }: IContactsItemProps) => {
  const getContactType = (type: ContactTypes) => {
    switch (type) {
      case ContactTypes.PHONE:
        return {
          src: Phone,
          alt: 'Иконка телефона',
          hrefType: 'tel',
        };
      case ContactTypes.WA:
        return {
          src: WA,
          alt: 'Иконка Whats App',
          hrefType: 'tel',
        };
      case ContactTypes.EMAIL:
        return {
          src: Email,
          alt: 'Иконка почты',
          hrefType: 'mailto',
        };
    }
  };

  const contactType = getContactType(type);

  return (
    <li className={cls.contactWrapper}>
      <Image src={contactType.src} alt={contactType.alt} />
      <a className={cls.contact} href={`${contactType.hrefType}:${text}`}>
        {text}
      </a>
    </li>
  );
};
