import Link from 'next/link';
import React from 'react';
import { cn } from '@/src/utils/cn';

interface PrimaryLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const PrimaryLink = ({
  href,
  children,
  className,
}: PrimaryLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'rounded-md bg-blue-600 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
        className
      )}
    >
      {children}
    </Link>
  );
};
