'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useTranslations } from '@/i18n/client';
import { PrimaryButton } from '@/src/components/atoms/buttons';
import { PrimaryInput } from '@/src/components/atoms/inputs';
import { fetchApi } from '@/src/libs/fetch';
import { signUpSchema } from '@/src/libs/zod';

export const SignUpForm = () => {
  const { t } = useTranslations();
  const [isCreated, setIsCreated] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = useCallback(
    (formData: z.infer<typeof signUpSchema>) => {
      fetchApi.postRequest('/api/users/register', formData).then((response) => {
        if (response) {
          setIsCreated(true);
        }
      });
    },
    [setIsCreated]
  );

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <PrimaryInput
        {...register('email')}
        label={t('pages.sign-up.form.email')}
        type="email"
        autoComplete="email"
        required
        defaultValue="panamepoul@gmail.com"
        placeholder={t('pages.sign-up.form.email')}
      />
      {errors.email?.message && (
        <p className="text-red-500">{t('errors.email-required')}</p>
      )}
      <PrimaryInput
        {...register('password')}
        label={t('pages.sign-up.form.password')}
        type="password"
        autoComplete="current-password"
        required
        defaultValue="testtesttest"
        placeholder={t('pages.sign-up.form.password')}
      />
      {errors.password?.message && (
        <p className="text-red-500">{t('errors.password')}</p>
      )}
      <PrimaryInput
        {...register('confirmPassword')}
        label={t('pages.sign-up.form.confirmPassword')}
        type="password"
        autoComplete="current-password"
        required
        defaultValue="testtesttest"
        placeholder={t('pages.sign-up.form.confirmPassword')}
      />
      {errors.confirmPassword?.message && (
        <p className="text-red-500">{t('errors.password-match')}</p>
      )}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <PrimaryButton className="col-span-2" type="submit">
          {t('buttons.sign-up')}
        </PrimaryButton>
        <div className="col-span-2">
          {isCreated && (
            <p className="text-white">{t('pages.sign-up.email-sent')}</p>
          )}
        </div>
      </div>
    </form>
  );
};
