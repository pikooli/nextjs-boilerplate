import CredentialsProvider from 'next-auth/providers/credentials';
import * as bcryptTools from '@/src/libs/bcrypt';
import { prisma } from '@/src/services/prisma';

export const credentialsProvider = CredentialsProvider({
  name: 'Credentials',
  credentials: {
    email: { label: 'Email', type: 'text' },
    password: { label: 'Password', type: 'password' },
  },
  authorize: async (credentials) => {
    if (!credentials) {
      throw new Error('Credentials not provided');
    }
    const { email, password } = credentials;
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new Error('User not found');
    }
    if (!user.emailVerifiedAt) {
      throw new Error('User not verified');
    }

    const passwordMatch = await bcryptTools.compare(
      password,
      user.password ?? ''
    );
    if (!passwordMatch) {
      throw new Error('invalid email or password');
    }
    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  },
});
