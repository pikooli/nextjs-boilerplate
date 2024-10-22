import { NextResponse } from 'next/server';
import { getUsers } from '@/src/services/database/user';

export const GET = async () => {
  const users = await getUsers({});
  return NextResponse.json(users);
};
