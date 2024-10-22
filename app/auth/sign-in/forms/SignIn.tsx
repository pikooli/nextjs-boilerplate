'use client';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useTranslations } from '@/i18n/client';
import { PrimaryButton } from '@/src/components/atoms/buttons';
import { PrimaryInput } from '@/src/components/atoms/inputs';
import { signInSchema } from '@/src/libs/zod';

interface Props {
  errorMessage: string;
}

export const SignInForm = ({ errorMessage }: Props) => {
  const { t } = useTranslations();
  const { handleSubmit, register } = useForm<z.infer<typeof signInSchema>>();

  const onSubmit = (formData: z.infer<typeof signInSchema>) => {
    signIn('credentials', {
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <form className="grid grid-rows-1 gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4">
        <PrimaryInput
          {...register('email')}
          label={t('pages.sign-in.form.email')}
          type="email"
          defaultValue="panamepoul@gmail.com"
          autoComplete="email"
          required
          placeholder={t('pages.sign-in.form.email')}
        />
        <PrimaryInput
          {...register('password')}
          label={t('pages.sign-in.form.password')}
          type="password"
          defaultValue="testtesttest"
          autoComplete="current-password"
          required
          placeholder={t('pages.sign-in.form.password')}
        />
      </div>
      <Link
        href="/auth/reset-password"
        className="flex justify-end text-sm text-gray-500 underline"
      >
        {t('pages.sign-in.forgot-password')}
      </Link>
      <div className="grid grid-cols-2 gap-3">
        <PrimaryButton className="col-span-2" type="submit">
          {t('buttons.sign-in')}
        </PrimaryButton>
        <div>
          <p className="text-red-500">{errorMessage}</p>
        </div>
      </div>
    </form>
  );
};
