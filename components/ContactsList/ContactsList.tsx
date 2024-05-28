import { ContactTypes, ContactsItem } from '../ContactsItem/ContactsItem';
import cls from './ContactsList.module.scss';

interface IContactsListProps {
  phone: string;
  wa: string;
  email: string;
}

export const ContactsList = ({ phone, wa, email }: IContactsListProps) => {
  return (
    <ul className={cls.contactsList}>
      <ContactsItem type={ContactTypes.PHONE} text={phone} />
      <ContactsItem type={ContactTypes.WA} text={wa} />
      <ContactsItem type={ContactTypes.EMAIL} text={email} />
    </ul>
  );
};
