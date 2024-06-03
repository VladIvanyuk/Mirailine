import { classNames } from '@/utils/classNames/classNames';
import cls from './Map.module.scss';

interface IMapProps {
  className?: string;
  src: string;
}

export const Map = ({ className, src }: IMapProps) => {
  return <iframe src={src} height='100%' width='100%' loading='lazy'></iframe>;
};
