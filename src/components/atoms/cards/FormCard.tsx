'use client';

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

export const FormCard = ({ children, title }: CardProps) => {
  return (
    <div className="rounded-md border border-gray-300">
      <div className="m-10 flex min-w-96 flex-col space-y-4">
        {title && <h1 className="text-2xl font-bold text-white">{title}</h1>}
        {children}
      </div>
    </div>
  );
};
