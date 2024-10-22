'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useTranslations } from '@/i18n/client';
import { FormCard, WaveCard } from '@/src/components/atoms/cards';
import { NewPasswordForm } from './Form';

const SuspenseComponent = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const email = searchParams.get('email');
  return <NewPasswordForm token={token} email={email} />;
};

export default function NewPasswordPage() {
  const { t } = useTranslations();

  return (
    <Suspense>
      <div className="mt-16">
        <WaveCard type="green">
          <FormCard title={t('pages.new-password.title')}>
            <SuspenseComponent />
          </FormCard>
        </WaveCard>
      </div>
    </Suspense>
  );
}
