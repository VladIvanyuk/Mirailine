'use client';

import { classNames } from '@/utils/classNames/classNames';
import cls from './StockMap.module.scss';
import { AdressItem } from '../AdressItem/AdressItem';
import { Map } from '../Map/Map';
import { useState } from 'react';
import { mapLinks } from './MapLinks';

interface IStockMapProps {
  className?: string;
}

export enum Maps {
  FUSHIKI = 'fushiki',
  TOYAMA = 'toyama',
  T1 = 't1',
  T2 = 't2',
}

export const StockMap = ({ className }: IStockMapProps) => {
  const [map, setMap] = useState(Maps.T1);

  const findCurrentMap = (map: Maps) => {
    switch (map) {
      case Maps.FUSHIKI:
        return <Map src={mapLinks[Maps.FUSHIKI]} />;
      case Maps.TOYAMA:
        return <Map src={mapLinks[Maps.TOYAMA]} />;
      case Maps.T1:
        return <Map src={mapLinks[Maps.T1]} />;
      case Maps.T2:
        return <Map src={mapLinks[Maps.T2]} />;
    }
  };

  const onClickHandler = (name: Maps) => {
    setMap(name);
  };

  const currentMap = findCurrentMap(map);
  return (
    <div className={cls.stockContent}>
      <ul className={cls.addressList}>
        <li>
          <AdressItem
            onClick={onClickHandler}
            name='fushiki'
            title='Порт Фусики'
          >
            <p>高岡市伏木万葉ふ頭</p>
            <p>Fushikimanyofuto, Takaoka-shi, Toyama-ken</p>
          </AdressItem>
        </li>
        <li>
          <AdressItem
            onClick={onClickHandler}
            name='toyama'
            title='Порт Тоямашинко'
          >
            <p>Kitafuto, Toyamashinko, Imizu-shi, Toyama-ken</p>
          </AdressItem>
        </li>
        <li>
          <AdressItem onClick={onClickHandler} name='t1' title='Склад Т1'>
            <p>富山県射水市新堀5</p>
            <p>Toyama-ken, Imizu-shi, Shinbori 5</p>
          </AdressItem>
        </li>
        <li>
          <AdressItem onClick={onClickHandler} name='t2' title='Склад Т2'>
            <p>富山県高岡市堀岡又新2-2</p>
            <p>Toyama-ken, Takaoka-shi, Horiokamatashin 2 – 2</p>
          </AdressItem>
        </li>
      </ul>
      <div className={cls.map}>{currentMap}</div>
    </div>
  );
};
