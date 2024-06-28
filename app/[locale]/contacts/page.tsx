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
import { classNames } from '@/utils/classNames/classNames';
import { Map, Maps } from '@/components/Map/Map';
import { mapLinks } from '@/components/Map/MapLinks';

export default function Contacts() {
  const t = useTranslations('Contacts');
  return (
    <>
      <Header view={HeaderView.Contacts} />
      <main className="main">
        <SectionLayout classes={cls.section}>
          <Title
            className={cls.contactsTitle}
            lineVariant={LineVariants.VARIANT_EIGHT}
            decorText={TitleContactsDecor}
            text={t('Contacts')}
          />
          <Description className={cls.servicesDescr}>
            {t('Description')}
          </Description>
          <div className={cls.contactMapWrapper}>
            <div className={cls.contactsItem}>
              <div className={cls.contactMapItemWrapper}>
                <div className={cls.time}>
                  <Image
                    className={cls.clockPic}
                    src={Clock}
                    alt={'Иконка календаря'}
                  />
                  <div className={cls.timeBlock}>
                    <p>{t('Hours')}</p>
                    <p>{`(${t('Time')})`}</p>
                  </div>
                </div>
              </div>
              <div className={cls.contactMapItemWrapper}>
                <div className={cls.contactsMapItemBlock}>
                  <div>
                    <div className={cls.contactMapItem}>
                      <ListHeading
                        className={classNames(cls.contactsHeading, {}, [
                          cls.russiaHeadingPic,
                        ])}
                      >
                        {t('ContactsRussia')}
                      </ListHeading>
                      <ul className={cls.mapItemList}>
                        <ContactsItem
                          className={cls.contactsItem}
                          type={ContactTypes.PHONE}
                          text={'+7-994-109-2002'}
                        />
                        <ContactsItem
                          className={cls.contactsItem}
                          type={ContactTypes.WA}
                          text={'+7-994-109-2002'}
                        />
                        <ContactsItem
                          className={cls.contactsItem}
                          type={ContactTypes.EMAIL}
                          text={'vladivostok@mirailine.com'}
                        />
                      </ul>
                    </div>
                    <div className={cls.contactMapItem}>
                      <ListHeading className={cls.contactsHeading}>
                        {t('Claims')}
                      </ListHeading>
                      <ul className={cls.mapItemList}>
                        <ContactsItem
                          className={cls.contactsItem}
                          type={ContactTypes.PHONE}
                          text={'+7-994-109-5764'}
                        />
                        <ContactsItem
                          className={cls.contactsItem}
                          type={ContactTypes.WA}
                          text={'+7-994-109-5764'}
                        />
                        <ContactsItem
                          className={cls.contactsItem}
                          type={ContactTypes.EMAIL}
                          text={'claim@mirailine.com'}
                        />
                        <ContactsItem
                          className={classNames(cls.contactsItem, {}, [
                            cls.contactsAddressItem,
                          ])}
                          type={ContactTypes.ADDRESS}
                          text={t('Place')}
                        />
                      </ul>
                    </div>
                  </div>
                  <div className={cls.miraiJPMap}>
                    <Map src={mapLinks[Maps.MIRAIVDK]} />
                  </div>
                </div>
              </div>
              <div className={cls.contactMapItemWrapper}>
                <div className={cls.contactsMapItemBlock}>
                  <div className="">
                    <div className={cls.contactMapItem}>
                      <ListHeading
                        className={classNames(cls.contactsHeading, {}, [
                          cls.japanHeadingPic,
                        ])}
                      >
                        {t('ContactsJapan')}
                      </ListHeading>
                      <ul className={cls.mapItemList}>
                        <ContactsItem
                          className={cls.contactsItem}
                          type={ContactTypes.PHONE}
                          text={'+81-766-86-0772'}
                        />
                        <ContactsItem
                          className={cls.contactsItem}
                          type={ContactTypes.WA}
                          text={'+81-90-7357-8470'}
                        />
                        <ContactsItem
                          className={cls.contactsItem}
                          type={ContactTypes.FAX}
                          text={'+81-766-86-1114'}
                        />
                        <ContactsItem
                          className={cls.contactsItem}
                          type={ContactTypes.EMAIL}
                          text={'claim@mirailine.com'}
                        />
                        <ContactsItem
                          className={classNames(cls.contactsItem, {}, [
                            cls.contactsJapanAddressItem,
                          ])}
                          type={ContactTypes.ADDRESS}
                          text={`〒934-0035 富山県射水市新堀５番地5, Shinbori, Imizu city, Toyama${'\u00A0'}prefecture 934-0035, Japan`}
                        />
                      </ul>
                    </div>
                  </div>
                  <div className={cls.miraiRUMap}>
                    <Map src={mapLinks[Maps.T1]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionLayout>
      </main>
    </>
  );
}
