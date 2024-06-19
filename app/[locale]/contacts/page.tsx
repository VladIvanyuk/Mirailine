import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import { useTranslations } from 'next-intl';
import TitleContactsDecor from '@/public/images/text/contacts.png';
import { Description } from '@/components/Description/Description';
import {
  ContactTypes,
  ContactsItem,
} from '@/components/ContactsItem/ContactsItem';

export default function Contacts() {
  const t = useTranslations('Contacts');
  return (
    <>
      <Header view={HeaderView.Contacts} />
      <main>
        <SectionLayout>
          <Title
            lineVariant={LineVariants.VARIANT_EIGHT}
            decorText={TitleContactsDecor}
            text={t('Contacts')}
          />
          <Description className={cls.servicesDescr}>
            {t('Description')}
          </Description>
          <ContactsItem
            type={ContactTypes.PHONE}
            text='ПН - ПТ 9:00 - 18:00 время местное)'
          />
        </SectionLayout>
      </main>
    </>
  );
}
