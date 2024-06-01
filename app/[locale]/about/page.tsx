import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import TitleAboutDecor from '@/public/images/text/about.png';
import { classNames } from '@/utils/classNames/classNames';
import Image from 'next/image';
import RussiaIcon from '@/public/images/countries/russia-wide.png';
import JapanIcon from '@/public/images/countries/japan.png';
import CanadaIcon from '@/public/images/countries/canada.png';

export default function About() {
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
      </main>
    </>
  );
}
