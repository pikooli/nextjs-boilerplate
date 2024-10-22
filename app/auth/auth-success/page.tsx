'use client';
import Link from 'next/link';

const AuthSuccessPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-8 text-center shadow-md">
        <h1 className="mb-4 text-3xl font-bold text-green-600">
          Login Successful!
        </h1>
        <p className="mb-6 text-gray-600">
          You have been successfully logged in.
        </p>
        <Link
          href="/dashboard"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default AuthSuccessPage;
