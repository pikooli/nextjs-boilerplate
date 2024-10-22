import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || '',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
});

transporter.use(
  'compile',
  hbs({
    viewEngine: {
      extname: '.hbs',
      partialsDir: path.resolve('./src/services/mails/templates/'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./src/services/mails/templates/'),
    extName: '.hbs',
  })
);

export const sendEmail = async ({
  to,
  subject,
  template,
  data,
}: {
  to: string;
  subject: string;
  template: string;
  data: Record<string, string | number>;
}) => {
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to,
    subject,
    template,
    context: {
      appName: process.env.NEXT_PUBLIC_APP_NAME,
      appUrl: process.env.NEXT_PUBLIC_APP_URL,
      emailContact: process.env.NEXT_PUBLIC_EMAIL_CONTACT,
      emailSupport: process.env.NEXT_PUBLIC_EMAIL_SUPPORT,
      ...data,
    },
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
