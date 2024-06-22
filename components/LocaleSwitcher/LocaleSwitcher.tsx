'use client';

import { ChangeEvent, useTransition } from 'react';
import cls from './LocaleSwitcher.module.scss';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { usePathname } from '@/navigations';
import { classNames } from '@/utils/classNames/classNames';

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
    <select
      className={classNames(cls.localeSwitcher, {}, [className])}
      onChange={onChangeSelect}
      name="lang"
      id="lang"
      defaultValue={activeLocale}
      disabled={isPending}
    >
      <option value="ru">РУС</option>
      <option value="en">ENG</option>
    </select>
  );
};
