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
      priceKey: '400All',
    },
  ],
  Yokohama: [
    {
      categoryKey: 'Car',
      priceKey: '400All',
    },
  ],
  Toyama: [
    {
      categoryKey: 'Car',
      priceKey: '300All',
    },
    {
      categoryKey: 'Motorcycle',
      priceKey: '250',
    },
    {
      categoryKey: 'Tractor',
      priceKey: '550',
    },
    {
      categoryKey: 'Pallet',
      priceKey: '600',
    },
    {
      categoryKey: 'Constructor',
      priceKey: '800',
    },
    {
      categoryKey: 'CutNormal',
      priceKey: '900',
    },
  ],
};
