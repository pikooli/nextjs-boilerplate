import { NextResponse, NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { hashPassword } from '@/src/libs/bcrypt';
import { signUpSchema } from '@/src/libs/zod';
import { createUser, getUserByEmail } from '@/src/services/database/user';
import { sendSigninEmail } from '@/src/services/mails';
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const parsedBody = signUpSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        { message: 'Invalid request body' },
        { status: 400 }
      );
    }
    const { email, password, confirmPassword } = body;

    const user = await getUserByEmail(email);

    if (user) {
      return NextResponse.json(
        { message: 'User already exists', code: 'USER_ALREADY_EXISTS' },
        { status: 400 }
      );
    }
    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: 'Passwords do not match', code: 'PASSWORDS_DO_NOT_MATCH' },
        { status: 400 }
      );
    }
    const hashedPassword = await hashPassword(password);
    const emailVerificationToken = uuidv4();
    await createUser({
      email,
      password: hashedPassword,
      emailVerificationToken,
    });

    await sendSigninEmail({
      to: email,
      confirmationLink: `${process.env.NEXT_PUBLIC_APP_URL}/api/users/verify-email?token=${emailVerificationToken}`,
    });

    return NextResponse.json({ message: 'User created' });
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      message: `Error creating user`,
      code: 'ERROR',
    });
  }
};
