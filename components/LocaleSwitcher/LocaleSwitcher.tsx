'use client';

import { ChangeEvent, useTransition } from 'react';
import cls from './LocaleSwitcher.module.scss';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const activeLocale = useLocale();
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    startTransition(() => {
      router.replace(`/${value}`);
    });
  };
  return (
    <select
      className={cls.localeSwitcher}
      onChange={onChangeSelect}
      name="lang"
      id="lang"
      defaultValue={activeLocale}
    >
      <option value="ru">РУС</option>
      <option value="en">ENG</option>
    </select>
  );
};
