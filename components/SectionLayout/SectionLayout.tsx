import { classNames } from '@/utils/classNames/classNames';

export const SectionLayout = ({ children, classes }: any) => {
  return (
    <section className={classNames('container', {}, [classes])}>
      {children}
    </section>
  );
};
