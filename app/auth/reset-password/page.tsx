'use client';
import { useTranslations } from '@/i18n/client';
import { FormCard, WaveCard } from '@/src/components/atoms/cards';
import { ResetPasswordForm } from './form';

export default function ResetPasswordPage() {
  const { t } = useTranslations();
  return (
    <div className="mt-16">
      <WaveCard type="green">
        <FormCard title={t('pages.reset-password.title')}>
          <ResetPasswordForm />
        </FormCard>
      </WaveCard>
    </div>
  );
}
