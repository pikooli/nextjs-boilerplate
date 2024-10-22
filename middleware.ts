import { NextResponse, NextFetchEvent } from 'next/server';
import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';

export function middleware(
  request: NextRequestWithAuth,
  response: NextFetchEvent
) {
  // You can add custom logic here before applying the authentication
  console.log('Request received for:', request.url);

  // Applying NextAuth's middleware
  return withAuth(function middleware() {}, {
    callbacks: {
      authorized: ({ token }) => {
        // Your logic for authorization
        console.log('token', token);
        // if (token) {
        //   return true;
        // }
        // return false;
        return true;
      },
    },
  })(request, response);
}

// read more here
// https://github.com/pillarjs/path-to-regexp#path-to-regexp-1
export const config = {
  matcher: ['/dashboard'],
};
