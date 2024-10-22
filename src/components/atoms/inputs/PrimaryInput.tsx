'use client';
import { cva } from 'class-variance-authority';
import { forwardRef, InputHTMLAttributes } from 'react';
import { Label } from '@/src/components/atoms/inputs/Label';
import { DefaultInputProps } from '@/src/types/inputs';
import { cn } from '@/src/utils/cn';

const variantInput = {
  variant: {
    default:
      'bg-gray-800 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-400',
    green:
      'bg-green-800 border-green-600 text-white focus:ring-blue-500 focus:border-blue-400',
  },
};

const inputVariants = cva(
  'mt-1 block w-full rounded-md border bg-inherit p-3 shadow-lg transition-colors duration-200 focus:ring focus:ring-opacity-50',
  {
    variants: { ...variantInput },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface InputFormProps
  extends DefaultInputProps,
    InputHTMLAttributes<HTMLInputElement> {
  variant?: keyof (typeof variantInput)['variant'];
  errorMessage?: string;
}

export const PrimaryInput = forwardRef<HTMLInputElement, InputFormProps>(
  (
    {
      onChange,
      name,
      type = 'text',
      label,
      placeholder,
      id,
      className,
      labelClassName,
      inputClassName,
      rightLabelElement,
      rightElement,
      variant,
      errorMessage,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn(className)}>
        {label && (
          <Label
            label={label}
            className={labelClassName}
            variant={variant}
            id={id}
            rightLabelElement={rightLabelElement}
          />
        )}
        <div className="relative">
          <input
            ref={ref}
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className={cn(inputVariants({ variant }), inputClassName)}
            {...props}
          />
          {rightElement}
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    );
  }
);

PrimaryInput.displayName = 'PrimaryInput';
