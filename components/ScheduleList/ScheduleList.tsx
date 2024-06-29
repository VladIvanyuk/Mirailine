'use client';

import { classNames } from '@/utils/classNames/classNames';
import cls from './ScheduleList.module.scss';
import { getTranslations } from 'next-intl/server';
import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import LoaderRu from '@/public/loaders/loaderRu.gif';
import LoaderEng from '@/public/loaders/loaderEng.gif';
import Image from 'next/image';

interface IScheduleListProps {
  className?: string;
  translations: Record<string, string>;
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

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const ScheduleList = ({
  className,
  translations,
}: IScheduleListProps) => {
  const [scheduleData, setScheduleData] = useState<IScheduleItems[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const activeLocale = useLocale();

  useEffect(() => {
    getScheduleData()
      .then((data) => {
        setScheduleData(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isError) {
    return (
      <>
        <div className={classNames(cls.scheduleList, {}, [cls.error])}>
          <p>{translations.Error}</p>
        </div>
      </>
    );
  }

  return isLoading ? (
    <div className={classNames(cls.scheduleList, {}, [cls.loader])}>
      {activeLocale === 'ru' ? (
        <Image src={LoaderRu} alt="Анимация загрузки" />
      ) : (
        <Image src={LoaderEng} alt="Анимация загрузки" />
      )}
    </div>
  ) : (
    <div className={classNames(cls.scheduleList, {}, [className])}>
      <ul className={cls.tableHead}>
        <li className={cls.tableHeadingTitle}>{translations.Vessel}</li>
        <li className={cls.tableHeadingTitle}>{translations.Voyage}</li>
        <li className={cls.tableHeadingTitle}>{translations.Date}</li>
        <li className={cls.tableHeadingTitle}>{translations.Port}</li>
      </ul>
      <div>
        {scheduleData.map((el, index) => {
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
