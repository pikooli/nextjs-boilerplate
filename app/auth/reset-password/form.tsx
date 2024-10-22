'use client';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { useTranslations } from '@/i18n/client';
import { PrimaryButton } from '@/src/components/atoms/buttons';
import { PrimaryInput } from '@/src/components/atoms/inputs';
import { fetchApi } from '@/src/libs/fetch';
import { resetPasswordSchema } from '@/src/libs/zod';

export const ResetPasswordForm = () => {
  const { t } = useTranslations();
  const { register, handleSubmit } =
    useForm<z.infer<typeof resetPasswordSchema>>();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const onSubmit: SubmitHandler<z.infer<typeof resetPasswordSchema>> = async (
    data
  ) => {
    const response = await fetchApi.postRequest('/api/users/reset-password', {
      email: data.email,
    });
    if (response) {
      setIsEmailSent(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 text-white">
      <PrimaryInput
        {...register('email')}
        label={t('pages.reset-password.form.email')}
        type="email"
        autoComplete="email"
        required
      />
      {isEmailSent && (
        <p className="text-green-500">{t('pages.reset-password.email-sent')}</p>
      )}
      <PrimaryButton type="submit">{t('buttons.reset-password')}</PrimaryButton>
    </form>
  );
};
