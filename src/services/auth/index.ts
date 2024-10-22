// import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { prisma } from '../prisma';
import { credentialsProvider } from './credentialsProvider';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    credentialsProvider,
  ],
  pages: {
    signIn: '/auth/sign-in',
    verifyRequest: '/auth/auth-success',
    error: '/auth/sign-in',
  },
  debug: true,
  session: {
    strategy: 'jwt',
  },
  logger: {
    debug: (message) => console.log('debug', message),
    error: (message) => console.log('error', message),
    warn: (message) => console.log('warn', message),
  },
  callbacks: {
    jwt: async (props) => {
      // console.log('jwt', props);
      return props.token;
    },
    async session(props) {
      // console.log('session', props);
      return props.session;
    },
  },
};

export default NextAuth(authOptions);

// export default async function auth(req: NextApiRequest, res: NextApiResponse) {
//   console.log('auth ========', req);

//   return await NextAuth(req, res, authOptions);
// }
