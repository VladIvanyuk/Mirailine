import { CSSProperties, FC } from 'react';
import cls from './Skeleton.module.scss';
import { classNames } from '@/utils/classNames/classNames';

interface ISkeletonProps {
  className?: string;
  height: string | number;
  width: string | number;
  border?: string;
  marginB?: number;
}

export const Skeleton: FC<ISkeletonProps> = ({
  className,
  width,
  height,
  border,
  marginB,
}) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
    marginBottom: marginB,
  };
  return (
    <div
      style={styles}
      className={classNames(cls.skeleton, {}, [className])}
    ></div>
  );
};
