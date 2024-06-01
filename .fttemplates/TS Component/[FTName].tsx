import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';
import cls from './[FTName].module.scss';

interface I[FTName]Props {
   className?: string;
}

export const [FTName] = (props: I[FTName]Props) => {
   const { className } = props;
   const t = useTranslations()

   return (
      <div className={classNames(cls.[FTName | camelcase], {}, [className])}>

      </div>
   );
}