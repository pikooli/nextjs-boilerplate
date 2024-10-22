'use client';
import { Image as ImageIcon, PlusCircle } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { RefCallBack } from 'react-hook-form';
import { cn } from '@/src/utils/cn';

interface InputImageProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  refInput?: RefCallBack;
  className?: string;
  handleChange?: (value: string) => void;
}

export const InputImage = ({
  value,
  refInput,
  className,
  handleChange,
}: InputImageProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={cn('mb-4 w-max cursor-pointer', className)}
      onClick={handleImageClick}
    >
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={(e) => {
          refInput && refInput(e);
          fileInputRef.current = e;
        }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              handleChange && handleChange(reader.result as string);
            };
            reader.readAsDataURL(file);
          }
        }}
      />
      {value ? (
        <div className="relative">
          <Image
            priority
            src={value}
            alt="Uploaded"
            className="h-32 w-32 rounded-full"
            width={100}
            height={100}
          />
          <div className="absolute inset-0 flex items-end justify-end">
            <PlusCircle />
          </div>
        </div>
      ) : (
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-200 text-gray-500">
          <ImageIcon />
        </div>
      )}
    </div>
  );
};
