import { cva } from 'class-variance-authority';
import { forwardRef, TextareaHTMLAttributes } from 'react';
import { DefaultInputProps } from '@/src/types';
import { cn } from '@/src/utils/cn';

const variants = {
  variant: {
    default:
      'border-gray-600 bg-gray-800 text-white focus:border-blue-400 focus:ring-blue-500',
  },
};

const inputTextAreaVariants = cva(
  'mt-1 block w-full rounded-md border p-3 shadow-lg transition-colors duration-200 focus:ring focus:ring-opacity-50',
  {
    variants: variants,
    defaultVariants: {
      variant: 'default',
    },
  }
);

const inputTextAreaLabelVariants = cva('px-1 text-sm font-semibold', {
  variants: {
    variant: {
      default: 'text-gray-300',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface InputTextAreaProps
  extends Omit<DefaultInputProps, 'type'>,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  variant?: keyof (typeof variants)['variant'];
}

export const InputTextArea = forwardRef<
  HTMLTextAreaElement,
  InputTextAreaProps
>(
  (
    {
      name,
      label,
      placeholder,
      id,
      className,
      labelClassName,
      inputClassName,
      rows = 4,
      variant,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={cn(className)}>
        <label
          htmlFor={id}
          className={cn(
            inputTextAreaLabelVariants({ variant }),
            labelClassName
          )}
        >
          {label}
        </label>
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          rows={rows}
          className={cn(inputTextAreaVariants({ variant }), inputClassName)}
          ref={ref}
          {...rest}
        ></textarea>
      </div>
    );
  }
);

InputTextArea.displayName = 'InputTextArea';
