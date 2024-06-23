'use client';

import { ChangeEvent, useTransition } from 'react';
import cls from './LocaleSwitcher.module.scss';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { usePathname } from '@/navigations';
import { classNames } from '@/utils/classNames/classNames';
import Image from 'next/image';
import Planet from '@/public/images/vectors/planet.png';

export const LocaleSwitcher = ({ className }: { className?: string }) => {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const activeLocale = useLocale();
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    startTransition(() => {
      router.replace(`/${value}/${pathname}`);
    });
  };
  return (
    <div className={classNames(cls.localeSwitcherWrapper, {}, [className])}>
      <Image alt="Иконка" src={Planet} />
      <select
        className={classNames(cls.localeSwitcher, {}, [])}
        onChange={onChangeSelect}
        name="lang"
        id="lang"
        defaultValue={activeLocale}
        disabled={isPending}
      >
        <option value="ru">{activeLocale === 'ru' ? 'РУС' : 'RUS'}</option>
        <option value="en">{activeLocale === 'ru' ? 'АНГ' : 'ENG'}</option>
      </select>
    </div>
  );
};
