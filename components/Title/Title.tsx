import cls from './Title.module.scss';
import { classNames } from '@/utils/classNames/classNames';

interface ITitleProps {
  text: string;
  lineVariant: string;
}

export enum LineVariants {
  VARIANT_ONE = 'variantOne',
  VARIANT_TWO = 'variantTwo',
  VARIANT_THREE = 'variantThree',
  VARIANT_FOUR = 'variantFour',
  VARIANT_FIVE = 'variantFive',
  VARIANT_SIX = 'variantSix',
  VARIANT_SEVEN = 'variantSeven',
}

export const Title = ({ text, lineVariant }: ITitleProps) => {
  return (
    <h2 className={classNames(cls.title, {}, [cls[lineVariant]])}>{text}</h2>
  );
};
