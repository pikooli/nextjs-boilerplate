export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';
import { getUsers, updateUserById } from '@/src/services/database/user';

export const GET = async (req: NextRequest) => {
  try {
    const token = req.nextUrl.searchParams.get('token');

    const users = await getUsers({
      emailVerificationToken: token,
      emailVerifiedAt: null,
    });

    if (!users.length) {
      return NextResponse.redirect(
        new URL('/email-verified?status=error', req.url)
      );
    }

    const user = users[0];

    await updateUserById(user.id, { emailVerifiedAt: new Date() });

    return NextResponse.redirect(
      new URL('/email-verified?status=success', req.url)
    );
  } catch (e) {
    console.error(e);
    return NextResponse.redirect(
      new URL('/email-verified?status=error', req.url)
    );
  }
};
