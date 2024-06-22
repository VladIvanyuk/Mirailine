interface IMapProps {
  className?: string;
  src: string;
}

export enum Maps {
  FUSHIKI = 'fushiki',
  TOYAMA = 'toyama',
  T1 = 't1',
  T2 = 't2',
  OSAKA = 'osaka',
  YOKOHAMA = 'yokohama',
  MIRAIONE = 'MIRAIONE',
}

export const Map = ({ className, src }: IMapProps) => {
  return <iframe src={src} height='100%' width='100%' loading='lazy'></iframe>;
};
