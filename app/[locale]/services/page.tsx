import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import TitleServicesDecor from '@/public/images/text/services.png';
import { Description, FontSizes } from '@/components/Description/Description';

export default function Services() {
  return (
    <>
      <Header view={HeaderView.Services} />
      <main>
        <SectionLayout className='container'>
          <Title
            decorText={TitleServicesDecor}
            text='Services'
            lineVariant={LineVariants.VARIANT_SIX}
          />
          <div className={cls.servicesContent}>
            <div className={cls.servicesTextContent}>
              <Description fontSize={FontSizes.M} className={cls.servicesDescr}>
                Осуществляем полный спектр услуг по доставке Вашего груза из
                порта в порт. доверьтесь нашей команде профессионалов и
                отслеживайте груз в реальном времени
              </Description>
              <ul className={cls.numbersList}>
                <li className={cls.numbersListItem}>
                  <p className={cls.numbersListNum}>100+</p>
                  <p className={cls.numbersListText}>счастливых клиентов</p>
                </li>
                <li className={cls.numbersListItem}>
                  <p className={cls.numbersListNum}>143+</p>
                  <p className={cls.numbersListText}>перевезенных груза</p>
                </li>
                <li className={cls.numbersListItem}>
                  <p className={cls.numbersListNum}>450+</p>
                  <p className={cls.numbersListText}>
                    квалифицированных сотрудников, обеспечивающих перевозку
                  </p>
                </li>
                <li className={cls.numbersListItem}>
                  <p className={cls.numbersListNum}>15000+</p>
                  <p className={cls.numbersListText}>
                    кв. метров cкладов в Японии
                  </p>
                </li>
              </ul>
            </div>
            <div className={cls.servicesImage}></div>
          </div>
        </SectionLayout>
        <SectionLayout>
          <Title
            text='Мы предоставляем'
            lineVariant={LineVariants.VARIANT_FIVE}
          />
        </SectionLayout>
      </main>
    </>
  );
}
