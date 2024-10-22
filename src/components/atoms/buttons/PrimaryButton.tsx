import React from 'react';
import { cn } from '@/src/utils/cn';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

export const PrimaryButton = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  leftComponent,
  rightComponent,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'font-serif flex justify-center rounded bg-blue-600 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      {leftComponent ? <span className="mr-3">{leftComponent} </span> : null}
      {children}
      {rightComponent ? <span className="ml-3">{rightComponent} </span> : null}
    </button>
  );
};
