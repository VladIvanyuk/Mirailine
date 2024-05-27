import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Mirai Line | Main page',
  description: 'Generated by create next app',
};

type TProps = {
  children: React.ReactNode;
  params: {
    locale: 'en' | 'ru';
  };
};

export default function RootLayout({ children, params: { locale } }: TProps) {
  return (
    <html lang={locale}>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}