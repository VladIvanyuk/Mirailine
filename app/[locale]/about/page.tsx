import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import TitleAboutDecor from '@/public/images/text/about.png';
import TitleWarehouseDecor from '@/public/images/text/warehouse.png';
import { classNames } from '@/utils/classNames/classNames';
import Image from 'next/image';
import RussiaIcon from '@/public/images/countries/russia-wide.png';
import JapanIcon from '@/public/images/countries/japan.png';
import CanadaIcon from '@/public/images/countries/canada.png';
import { Description } from '@/components/Description/Description';
import { WarehouseMaps } from '@/components/WarehouseMaps/WarehouseMaps';
import { AdressItem } from '@/components/AdressItem/AdressItem';
import { Map, Maps } from '@/components/Map/Map';
import { mapLinks } from '@/components/Map/MapLinks';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  const AdressTitles: Record<string, string> = {
    Fushiki: t('Fushiki'),
    Toyamashinko: t('Toyamashinko'),
    T1: t('T1'),
    T2: t('T2'),
  };
  return (
    <>
      <Header view={HeaderView.About} />
      <main>
        <SectionLayout className='container'>
          <Title
            lineVariant={LineVariants.VARIANT_FOUR}
            text={t('About')}
            decorText={TitleAboutDecor}
          />
          <div className={cls.aboutWrapper}>
            <div className={cls.aboutText}>
              <p className={cls.aboutBoldText}>
                {t('AboutCompanyInfoFirstParagraph')}
              </p>
              <p className={classNames(cls.aboutThinText, {}, [])}>
                {t('AboutCompanyInfoSecondParagraph')}
              </p>
              <p className={classNames(cls.aboutThinText, {}, [])}>
                {t('AboutCompanyInfoThirdParagraph')}
              </p>
              <ul>
                <li
                  className={classNames(cls.aboutThinText, {}, [
                    cls.aboutThinTextWithIcons,
                  ])}
                >
                  <Image src={RussiaIcon} alt='Флаг России' />
                  <span>{t('Russia')}</span>
                </li>
                <li
                  className={classNames(cls.aboutThinText, {}, [
                    cls.aboutThinTextWithIcons,
                  ])}
                >
                  <Image src={JapanIcon} alt='Флаг США' />
                  <span>{t('USA')}</span>
                </li>
                <li
                  className={classNames(cls.aboutThinText, {}, [
                    cls.aboutThinTextWithIcons,
                  ])}
                >
                  <Image src={CanadaIcon} alt='Флаг Канады' />
                  <span>{t('Canada')}</span>
                </li>
              </ul>
            </div>
            <div className={cls.aboutImg}></div>
          </div>
        </SectionLayout>
        <SectionLayout>
          <Title
            lineVariant={LineVariants.VARIANT_FIVE}
            text={t('Warehouses')}
            decorText={TitleWarehouseDecor}
          />
          <Description className={cls.warehouseDescr}>
            {t('WarehouseDescr')}
          </Description>
          <WarehouseMaps titles={AdressTitles} />
          <div className={cls.warehouseContent}>
            <div className={cls.addressList}>
              <div>
                <AdressItem title='Osaka'>
                  <p>HS-3 大阪港ターミナル</p>
                  <p className={cls.addressItemTop}>
                    〒554-0041 大阪府大阪港此花区北港白津1-9-25
                  </p>
                  <p>HS-3 terminal of Osaka Port</p>
                  <p>
                    〒554-0041 Osaka-fu, Osaka-shi, Konohana Ward,
                    Hokkoshiratsu, 1-chōme-9-25
                  </p>
                </AdressItem>
              </div>
            </div>
            <div className={cls.map}>
              <Map src={mapLinks[Maps.OSAKA]} />
            </div>
          </div>
          <div className={cls.warehouseContent}>
            <div className={cls.addressList}>
              <div>
                <AdressItem title='Yokohama'>
                  <p className={cls.addressItemTop}>
                    京浜港大黒埠頭地区指定保税地域大黒埠頭 K号荷捌地〒230-0054
                    神奈川県横浜市鶴見区大黒ふ頭20
                  </p>
                  <p>Cargo handling area K</p>
                  <p>
                    20 Daikokufuto, Tsurumi Ward, Yokohama, Kanagawa 230-0054
                  </p>
                </AdressItem>
              </div>
            </div>
            <div className={cls.map}>
              <Map src={mapLinks[Maps.YOKOHAMA]} />
            </div>
          </div>
        </SectionLayout>
      </main>
    </>
  );
}
