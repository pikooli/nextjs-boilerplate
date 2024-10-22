'use client';
import { useEffect } from 'react';
import { useTranslations } from '@/i18n/client';
import { RemoveItem } from '@/src/components/atoms/buttons';
import { useAlertStore } from '@/src/libs/zustand';
import { cn } from '@/src/utils/cn';

export const Alert = () => {
  const { alertContent, setAlertContent } = useAlertStore();
  const { t } = useTranslations();
  let style = 'bg-gray-500 p-4 text-white';
  let message;

  useEffect(() => {
    if (alertContent) {
      const timeout = setTimeout(() => {
        setAlertContent(null);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [setAlertContent, alertContent]);

  if (!alertContent) return null;

  if (alertContent.type === 'error') {
    style = 'bg-red-500 p-4 text-white';
    message = alertContent.code
      ? t(`errors.api.${alertContent.code}`)
      : alertContent.message;
  }
  if (alertContent.type === 'success') {
    style = 'bg-green-600 p-4 text-white';
    message = alertContent.message;
  }

  return (
    <div className="relative">
      <div className="absolute bottom-[-50px] w-full">
        <div className={cn(style, 'flex justify-between')}>
          {message}
          <RemoveItem onClick={() => setAlertContent(null)} />
        </div>
      </div>
    </div>
  );
};
