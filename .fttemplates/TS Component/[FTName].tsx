import { useTranslations } from 'next-intl';
import { classNames } from '@/utils/classNames/classNames';
import cls from './[FTName].module.scss';

interface I[FTName]Props {
   className?: string;
}

export const [FTName] = ({className}: I[FTName]Props) => {
   const t = useTranslations();

   return (
      <div className={classNames(cls.[FTName | camelcase], {}, [className])}>

      </div>
   );
}