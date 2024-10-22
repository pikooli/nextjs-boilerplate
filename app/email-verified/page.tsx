'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

const SuspenseComponent = () => {
  const searchParams = useSearchParams();
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  useEffect(() => {
    const status = searchParams.get('status');
    setIsVerified(status === 'success');
  }, [searchParams]);

  if (isVerified === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 text-center">
      {isVerified ? (
        <div className="text-green-600">
          <h1 className="mb-4 text-2xl font-bold">
            Email Verified Successfully!
          </h1>
          <p>
            Your email has been verified. You can now sign in to your account.
          </p>
        </div>
      ) : (
        <div className="text-red-600">
          <h1 className="mb-4 text-2xl font-bold">Email Verification Failed</h1>
          <p>
            There was an issue verifying your email. Please try again or contact
            support.
          </p>
        </div>
      )}
    </div>
  );
};

export default function VerifyEmail() {
  return (
    <Suspense>
      <SuspenseComponent />
    </Suspense>
  );
}
