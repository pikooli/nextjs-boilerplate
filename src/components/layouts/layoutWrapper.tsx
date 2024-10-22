'use client';
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useTranslations } from '@/i18n/client';
import { cookieName } from '@/i18n/settings';
import { Alert } from '@/src/components/atoms/Alert';
import { Modal } from '@/src/components/displays';
import { Footer } from '@/src/components/layouts/Footer';
import { Header } from '@/src/components/layouts/Header';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [cookies] = useCookies([cookieName]);
  const lng = cookies.i18next;

  const { i18n } = useTranslations();

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [i18n, lng]);

  return (
    <SessionProvider>
      <Modal />
      <Header />
      <Alert />
      <main className="flex-grow">{children}</main>
      <Footer />
    </SessionProvider>
  );
}
