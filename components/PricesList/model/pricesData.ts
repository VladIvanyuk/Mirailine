interface IPricesData {
  [key: string]: IPricesItem[];
}

export interface IPricesItem {
  categoryKey: string;
  priceKey: string;
}

export const pricesData: IPricesData = {
  Osaka: [
    {
      categoryKey: 'Car',
      priceKey: '700All',
    },
    {
      categoryKey: 'Constructor',
      priceKey: '1200',
    },
    {
      categoryKey: 'Motorcycle',
      priceKey: 'ByAgreement',
    },
    {
      categoryKey: 'Machinery',
      priceKey: 'ByAgreement',
    },
  ],
  Yokohama: [
    {
      categoryKey: 'Car',
      priceKey: '700All',
    },
    {
      categoryKey: 'Motorcycle',
      priceKey: 'ByAgreement',
    },
    {
      categoryKey: 'Machinery',
      priceKey: 'ByAgreement',
    },
  ],
  Toyama: [
    {
      categoryKey: 'Car',
      priceKey: '550',
    },
    {
      categoryKey: 'UndriveableCar',
      priceKey: '650',
    },
    {
      categoryKey: 'TruckUnder5Tonnes',
      priceKey: '850+',
    },
    {
      categoryKey: 'UndriveableTruckUnder5Tonnes',
      priceKey: 'ByAgreement',
    },
    {
      categoryKey: 'Constructor',
      priceKey: '1100',
    },
    {
      categoryKey: 'CutNormal',
      priceKey: '1100',
    },
    {
      categoryKey: 'ConstructorEURO',
      priceKey: '1250',
    },
    {
      categoryKey: 'CutEURO',
      priceKey: '1250',
    },
    {
      categoryKey: 'TruckConstructor',
      priceKey: '1250',
    },
    {
      categoryKey: 'TruckConstructor',
      priceKey: '250+',
    },
    {
      categoryKey: 'Tractor',
      priceKey: '600',
    },
    {
      categoryKey: 'Motorcycle',
      priceKey: 'ByAgreement',
    },
    {
      categoryKey: 'Pallet',
      priceKey: '550',
    },
  ],
};
