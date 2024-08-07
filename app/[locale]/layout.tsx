import { Footer } from '@/components/Footer/Footer';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';

export const metadata: Metadata = {
  title: 'Mirai Line | Home',
  description: 'Mirai Line Forwarding Agency',
  icons: {
    shortcut: '/favicon.ico',
  },
};

type TProps = {
  children: React.ReactNode;
  params: {
    locale: 'en' | 'ru';
  };
};

export default function RootLayout({ children, params: { locale } }: TProps) {
  return (
    <ViewTransitions>
      <html lang={locale}>
        <body>
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
