'use client';
import Link from 'next/link';

const AuthErrorPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Authentication Error
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            There was an error during the authentication process.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <p className="text-center text-red-600">
              Please try logging in again or contact support if the issue
              persists.
            </p>
          </div>
          <div>
            <Link
              href="/auth/sign-in"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Return to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthErrorPage;
