import { sendEmail } from './nodemailer';

export const sendSigninEmail = async ({
  to,
  confirmationLink,
}: {
  to: string;
  confirmationLink: string;
}) => {
  await sendEmail({
    to,
    subject: 'Signin to OnTheMoons',
    template: 'signin',
    data: {
      confirmationLink,
    },
  });
};

export const sendResetPasswordEmail = async ({
  to,
  resetPasswordLink,
}: {
  to: string;
  resetPasswordLink: string;
}) => {
  await sendEmail({
    to,
    subject: 'Reset Your Password',
    template: 'reset-password',
    data: { resetPasswordLink },
  });
};

export const sendConfirmResetPasswordEmail = async ({ to }: { to: string }) => {
  await sendEmail({
    to,
    subject: 'Password Reset Confirmation',
    template: 'confirm-reset-password',
    data: {},
  });
};
