import { Header } from '@/components/Header/Header';
import { HeaderView } from '@/components/Header/types';
import cls from './page.module.scss';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { LineVariants, Title } from '@/components/Title/Title';
import TitleServicesDecor from '@/public/images/text/services.png';
import { Description } from '@/components/Description/Description';

export default function Services() {
  return (
    <>
      <Header view={HeaderView.Services} />
      <main>
        <SectionLayout className="container">
          <Title
            decorText={TitleServicesDecor}
            text="Services"
            lineVariant={LineVariants.VARIANT_SIX}
          />
          <div>
            <div>
              <Description className={cls.servicesDescr}>
                Осуществляем полный спектр услуг по доставке Вашего груза из
                порта в порт. доверьтесь нашей команде профессионалов и
                отслеживайте груз в реальном времени
              </Description>
            </div>
            <div></div>
          </div>
        </SectionLayout>
      </main>
    </>
  );
}
