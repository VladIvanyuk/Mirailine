'use client';

import cls from './WarehouseMaps.module.scss';
import { AdressItemWithChange } from '../AdressItemWithChange/AdressItemWithChange';
import { Map, Maps } from '../Map/Map';
import { useState } from 'react';
import { mapLinks } from '../Map/MapLinks';

interface IWarehouseMapsProps {
  className?: string;
  titles: Record<string, string>;
}

export const WarehouseMaps = ({ className, titles }: IWarehouseMapsProps) => {
  const [map, setMap] = useState(Maps.FUSHIKI);

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

  console.log(titles);
  return (
    <div className={cls.warehouseContent}>
      <ul className={cls.addressList}>
        <li>
          <AdressItemWithChange
            onClick={onClickHandler}
            map={map}
            name='fushiki'
            title={titles['Fushiki']}
          >
            <p>高岡市伏木万葉ふ頭</p>
            <p>Fushikimanyofuto, Takaoka-shi, Toyama-ken</p>
          </AdressItemWithChange>
        </li>
        <li>
          <AdressItemWithChange
            onClick={onClickHandler}
            map={map}
            name='toyama'
            title={titles['Toyamashinko']}
          >
            <p>Kitafuto, Toyamashinko, Imizu-shi, Toyama-ken</p>
          </AdressItemWithChange>
        </li>
        <li>
          <AdressItemWithChange
            onClick={onClickHandler}
            map={map}
            name='t1'
            title={titles['T1']}
          >
            <p>富山県射水市新堀5</p>
            <p>Toyama-ken, Imizu-shi, Shinbori 5</p>
          </AdressItemWithChange>
        </li>
        <li>
          <AdressItemWithChange
            onClick={onClickHandler}
            map={map}
            name='t2'
            title={titles['T2']}
          >
            <p>富山県高岡市堀岡又新2-2</p>
            <p>Toyama-ken, Takaoka-shi, Horiokamatashin 2 – 2</p>
          </AdressItemWithChange>
        </li>
      </ul>
      <div className={cls.map}>{currentMap}</div>
    </div>
  );
};
