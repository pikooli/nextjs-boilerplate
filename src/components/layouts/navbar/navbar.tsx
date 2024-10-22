'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import { useTranslations } from '@/i18n/client';
import { SecondaryLink } from '@/src/components/atoms/links';
import { Cross, Hamburger } from '@/src/components/svg';

const links = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/dashboard',
    label: 'dashboard',
  },
  {
    href: '/about',
    label: 'about',
  },
];

export const Navbar = () => {
  const { t } = useTranslations();
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const SignOutButton = () => (
    <div className="flex items-center">
      <span className="mr-4">{session?.user?.email}</span>
      <button
        onClick={() => signOut()}
        className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium hover:bg-red-700"
      >
        {t('buttons.sign-out')}
      </button>
    </div>
  );

  const SignInButton = () => (
    <button
      onClick={() => signIn()}
      className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium hover:bg-blue-700"
    >
      {t('buttons.sign-in')}
    </button>
  );

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link) => (
                  <SecondaryLink
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700"
                  >
                    {t(`layout.navbar.${link.label}`)}
                  </SecondaryLink>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {session ? <SignOutButton /> : <SignInButton />}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? <Hamburger /> : <Cross />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {links.map((link) => (
              <SecondaryLink
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700"
              >
                {t(`layout.navbar.${link.label}`)}
              </SecondaryLink>
            ))}
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              {session ? (
                <>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none">
                      {session.user?.email}
                    </div>
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="ml-auto rounded-md bg-red-600 px-3 py-2 text-sm font-medium hover:bg-red-700"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="ml-auto rounded-md bg-blue-600 px-3 py-2 text-sm font-medium hover:bg-blue-700"
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
