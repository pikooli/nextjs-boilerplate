import Link from 'next/link';
import React from 'react';
import { cn } from '@/src/utils/cn';

interface SecondaryLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const SecondaryLink = ({
  href,
  children,
  className,
}: SecondaryLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white',
        className
      )}
    >
      {children}
    </Link>
  );
};
