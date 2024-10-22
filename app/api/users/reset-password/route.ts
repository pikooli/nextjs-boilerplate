import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getUserByEmail, updateUserById } from '@/src/services/database/user';
import { sendResetPasswordEmail } from '@/src/services/mails';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;
    const user = await getUserByEmail(email);

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const resetPasswordToken = uuidv4();
    await updateUserById(user.id, {
      resetPasswordToken,
      resetPasswordTokenExpiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
    });

    const resetPasswordLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/new-password?token=${resetPasswordToken}&email=${email}`;

    await sendResetPasswordEmail({ to: email, resetPasswordLink });

    return NextResponse.json({ message: 'Reset password token sent' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error resetting password' },
      { status: 500 }
    );
  }
}
