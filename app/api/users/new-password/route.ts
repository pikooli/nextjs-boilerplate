import { NextRequest, NextResponse } from 'next/server';
import { hashPassword } from '@/src/libs/bcrypt';
import { newPasswordSchema } from '@/src/libs/zod';
import { getUsers, updateUserById } from '@/src/services/database/user';
import { sendConfirmResetPasswordEmail } from '@/src/services/mails';

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const parsedBody = newPasswordSchema.safeParse({
      password: body.password,
      confirmPassword: body.confirmPassword,
    });
    if (!parsedBody.success) {
      return NextResponse.json(
        { message: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { email, password, token, confirmPassword } = body;
    const users = await getUsers({ email, resetPasswordToken: token });

    if (!users.length) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    const user = users[0];

    if (
      password !== confirmPassword ||
      !user.resetPasswordTokenExpiresAt ||
      user.resetPasswordTokenExpiresAt < new Date()
    ) {
      return NextResponse.json(
        { message: 'Error updating password' },
        { status: 400 }
      );
    }

    const hashedPassword = await hashPassword(password);

    await updateUserById(user.id, {
      password: hashedPassword,
      resetPasswordToken: null,
      resetPasswordTokenExpiresAt: null,
      resetPasswordAt: new Date(),
    });

    await sendConfirmResetPasswordEmail({ to: email });

    return NextResponse.json({ message: 'Password updated' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error resetting password' },
      { status: 500 }
    );
  }
}
