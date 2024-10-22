'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState, Suspense } from 'react';
import { useTranslations } from '@/i18n/client';
import { PrimaryButton } from '@/src/components/atoms/buttons';
import { FormCard, WaveCard } from '@/src/components/atoms/cards';
import { Toggle } from '@/src/components/atoms/inputs';
import { Google } from '@/src/components/svg';
import { SignInForm, SignUpForm } from './forms';

const SuspenseComponent = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      router.replace('/auth/sign-in');
    }
  }, [error, router]);

  return <SignInForm errorMessage={errorMessage} />;
};

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isSignIn, setIsSignIn] = useState(true);
  const { t } = useTranslations();

  const ToggleComponent = () => {
    return (
      <div className="flex justify-end">
        <span className="mr-4 text-sm text-gray-500">
          {t('buttons.sign-up')}
        </span>
        <Toggle value={isSignIn} onChange={setIsSignIn} />
        <span className="ml-4 text-sm text-gray-500">
          {t('buttons.sign-in')}
        </span>
      </div>
    );
  };

  if (session) {
    router.push('/dashboard');
  }

  return (
    <div className="mt-16">
      <WaveCard type="green">
        <FormCard
          title={isSignIn ? t('pages.sign-in.title') : t('pages.sign-up.title')}
        >
          <ToggleComponent />

          {isSignIn ? (
            <Suspense>
              <SuspenseComponent />{' '}
            </Suspense>
          ) : (
            <SignUpForm />
          )}

          <hr className="border-gray-300" />
          <PrimaryButton
            onClick={() => signIn('google')}
            leftComponent={<Google width={24} height={24} />}
          >
            {t('buttons.sign-in-with-google')}
          </PrimaryButton>
        </FormCard>
      </WaveCard>
    </div>
  );
}
