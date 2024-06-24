import Image, { StaticImageData } from 'next/image';
import cls from './Title.module.scss';
import { classNames } from '@/utils/classNames/classNames';

interface ITitleProps {
  text: string;
  lineVariant: string;
  decorText?: StaticImageData;
}

export enum LineVariants {
  VARIANT_ONE = 'variantOne',
  VARIANT_TWO = 'variantTwo',
  VARIANT_THREE = 'variantThree',
  VARIANT_FOUR = 'variantFour',
  VARIANT_FIVE = 'variantFive',
  VARIANT_SIX = 'variantSix',
  VARIANT_SEVEN = 'variantSeven',
  VARIANT_EIGHT = 'variantEight',
}

export const Title = ({ text, lineVariant, decorText }: ITitleProps) => {
  return (
    <h2 className={classNames(cls.title, {}, [])}>
      <p className={classNames(cls.titleText, {}, [cls[lineVariant]])}>
        {text}
      </p>
      {decorText && <Image src={decorText} alt="Иероглифы" />}
    </h2>
  );
};
