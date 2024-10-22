import { useTranslations } from '@/i18n/client';

export const Footer = () => {
  const { t } = useTranslations();
  return (
    <footer className="left-0 right-0 bg-space-color py-4 text-white">
      <div className="container mx-auto text-center">
        <p>
          {t('layout.footer.copyright', {
            year: new Date().getFullYear(),
            name: process.env.NEXT_PUBLIC_APP_NAME,
          })}
        </p>
      </div>
    </footer>
  );
};
