import { classNames } from '@/utils/classNames/classNames';
import cls from './ScheduleList.module.scss';
import { getTranslations } from 'next-intl/server';

interface IScheduleListProps {
  className?: string;
}

export interface IScheduleItems {
  NAMEOFVESSEL: string;
  PORTOFDESTINATION: string;
  PORTOFSHIPMENT: string;
  SAILINGONORABOUT: string;
  SHIPPER?: null;
  Флаг?: null;
  НомерРейса: string;
  Судовладелец?: null;
  LoadingDate: string;
  ArrivalDate: string;
}

async function getScheduleData() {
  const res = await fetch(
    'https://www.vl1c.ru/mirayunfhttp/hs/vassal/product_json_vassal'
  );

  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     throw new Error('Failed to fetch data');
  //   }

  return res.json();
}

export const ScheduleList = async ({ className }: IScheduleListProps) => {
  const data: IScheduleItems[] = await getScheduleData();
  const t = await getTranslations('Schedule');

  return (
    <div className={classNames(cls.scheduleList, {}, [className])}>
      <ul className={cls.tableHead}>
        <li className={cls.tableHeadingTitle}>{t('Vessel')}</li>
        <li className={cls.tableHeadingTitle}>{t('Voyage')}</li>
        <li className={cls.tableHeadingTitle}>{t('Port')}</li>
        <li className={cls.tableHeadingTitle}>{t('Date')}</li>
      </ul>
      <div className={cls.tableBody}>
        {data.map((el, index) => {
          const date =
            el['SAILINGONORABOUT'] && el['SAILINGONORABOUT'].substring(0, 10);
          return (
            <ul className={cls.tableTextRow} key={index}>
              <li className={cls.text}>{el['NAMEOFVESSEL']}</li>
              <li className={cls.text}>{el['НомерРейса']}</li>
              <li className={cls.text}>{date}</li>
              <li className={cls.text}>{el['PORTOFSHIPMENT']}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
