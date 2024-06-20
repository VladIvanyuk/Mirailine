import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import { useTranslations } from 'next-intl';
import TitleContactsDecor from '@/public/images/text/contacts.png';
import { Description } from '@/components/Description/Description';
import Image from 'next/image';
import Clock from '@/public/images/vectors/clock.png';
import { ListHeading } from '@/components/ListHeading/ListHeading';
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
          <div className={cls.contactMapWrapper}>
            <div className={cls.contactsItem}>
              <div className={cls.contactMapItem}>
                <div className={cls.time}>
                  <Image src={Clock} alt={'Иконка календаря'} />
                  <div className={cls.workTime}>
                    <p>{t('Hours')}</p>
                    <p>{`(${t('Time')})`}</p>
                  </div>
                </div>
              </div>
              <div>
                <ListHeading className={cls.contactsHeading}>
                  {t('ContactsRussia')}
                </ListHeading>
                <ul>
                  <ContactsItem
                    type={ContactTypes.PHONE}
                    text={'+7-994-109-2002'}
                  />
                </ul>
              </div>
            </div>
          </div>
        </SectionLayout>
      </main>
    </>
  );
}
