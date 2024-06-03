import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import TitleAboutDecor from '@/public/images/text/about.png';
import TitleStocksDecor from '@/public/images/text/stocks.png';
import { classNames } from '@/utils/classNames/classNames';
import Image from 'next/image';
import RussiaIcon from '@/public/images/countries/russia-wide.png';
import JapanIcon from '@/public/images/countries/japan.png';
import CanadaIcon from '@/public/images/countries/canada.png';
import { Description } from '@/components/Description/Description';
import { AdressItemWithChange } from '@/components/AdressItemWithChange/AdressItemWithChange';
import { StockMap } from '@/components/StockMap/StockMap';
import { AdressItem } from '@/components/AdressItem/AdressItem';
import { Map, Maps } from '@/components/Map/Map';
import { mapLinks } from '@/components/Map/MapLinks';

export default function About() {
  console.log(mapLinks);

  return (
    <>
      <Header view={HeaderView.About} />
      <main>
        <SectionLayout className="container">
          <Title
            lineVariant={LineVariants.VARIANT_FOUR}
            text="About"
            decorText={TitleAboutDecor}
          />
          <div className={cls.aboutWrapper}>
            <div className={cls.aboutText}>
              <p className={cls.aboutBoldText}>
                Mirai Line Co., LTD является аффилированной компанией, созданной
                с целью организации морских перевозок и оказания
                форвардингово-логистических услуг при поддержке крупнейших
                грузоперевозчиков Японии.
              </p>
              <p className={classNames(cls.aboutThinText, {}, [])}>
                Компания организует регулярные морские перевозки техники,
                автомобилей, генерального груза и пр.
              </p>
              <p className={classNames(cls.aboutThinText, {}, [])}>
                Мы осуществляем полный спектр услуг по транспортировке грузов из
                портов Фусики, Тояма Шинко, Осака и Йокогамы в Японии по
                следующим направлениям:
              </p>
              <ul>
                <li
                  className={classNames(cls.aboutThinText, {}, [
                    cls.aboutThinTextWithIcons,
                  ])}
                >
                  <Image src={RussiaIcon} alt="Флаг России" />
                  <span>Владивосток, Россия</span>
                </li>
                <li
                  className={classNames(cls.aboutThinText, {}, [
                    cls.aboutThinTextWithIcons,
                  ])}
                >
                  <Image src={JapanIcon} alt="Флаг США" />
                  <span>Лос-Анджелес, США</span>
                </li>
                <li
                  className={classNames(cls.aboutThinText, {}, [
                    cls.aboutThinTextWithIcons,
                  ])}
                >
                  <Image src={CanadaIcon} alt="Флаг Канады" />
                  <span>Ванкувер, Канада</span>
                </li>
              </ul>
            </div>
            <div className={cls.aboutImg}></div>
          </div>
        </SectionLayout>
        <SectionLayout>
          <Title
            lineVariant={LineVariants.VARIANT_FIVE}
            text="Stocks"
            decorText={TitleStocksDecor}
          />
          <Description className={cls.stocksDescr}>
            В распоряжении компании есть склады, которые могут быть использованы
            для хранения грузов перед отправкой
          </Description>
          <StockMap />
          <div className={cls.stockContent}>
            <div className={cls.addressList}>
              <div>
                <AdressItem title="Порт Осаки">
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
          <div className={cls.stockContent}>
            <div className={cls.addressList}>
              <div>
                <AdressItem title="Порт Иокогама">
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
