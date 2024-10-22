'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from './navbar';

export const Header = () => (
  <header className="bg-space-color py-4 text-white">
    <div className="mx-8 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex">
          <Image
            className="h-8 w-8"
            src="/logo.png"
            alt="Logo"
            width={32}
            height={32}
          />
          <h1 className="text-2xl font-bold capitalize">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </h1>
        </Link>
      </div>
      <Navbar />
    </div>
  </header>
);
