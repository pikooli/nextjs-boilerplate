'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useTranslations } from '@/i18n/client';
import { PrimaryButton } from '@/src/components/atoms/buttons';
import { PrimaryInput } from '@/src/components/atoms/inputs';
import { fetchApi } from '@/src/libs/fetch';
import { newPasswordSchema } from '@/src/libs/zod';

interface Props {
  token: string | null;
  email: string | null;
}

export const NewPasswordForm = ({ token, email }: Props) => {
  const { t } = useTranslations();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
  });

  const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);

  const onSubmit = async (formData: z.infer<typeof newPasswordSchema>) => {
    const response = await fetchApi.putRequest('/api/users/new-password', {
      token,
      email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    });
    if (response) {
      setIsPasswordUpdated(true);
    }
  };

  return (
    <form className="grid grid-rows-1 gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-3">
        <PrimaryInput
          {...register('password')}
          label={t('pages.new-password.form.password')}
          type="password"
          defaultValue="testtesttest"
          autoComplete="current-password"
          required
          placeholder={t('pages.new-password.form.password')}
        />
        {errors.password?.message && (
          <p className="text-red-500">{t('errors.password')}</p>
        )}
        <PrimaryInput
          {...register('confirmPassword')}
          label={t('pages.new-password.form.confirmPassword')}
          type="password"
          defaultValue="testtesttest"
          autoComplete="current-password"
          required
          placeholder={t('pages.new-password.form.confirmPassword')}
        />
        {errors.confirmPassword?.message && (
          <p className="text-red-500">{t('errors.password-match')}</p>
        )}
      </div>
      {isPasswordUpdated && (
        <p className="text-green-500">
          {t('pages.new-password.form.password-updated')}
        </p>
      )}
      <PrimaryButton className="mt-4" type="submit">
        {t('buttons.update-password')}
      </PrimaryButton>
    </form>
  );
};
