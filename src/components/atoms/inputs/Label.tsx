import { cva } from 'class-variance-authority';
import { cn } from '@/src/utils/cn';

const variantLabel = {
  variant: {
    default: 'text-gray-300',
    green: 'text-green-300',
  },
};

const inputLabelVariants = cva(
  'px-1 text-sm font-semibold text-gray-300 capitalize',
  {
    variants: { ...variantLabel },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const Label = ({
  label,
  className,
  labelClassName,
  variant,
  id,
  rightLabelElement,
}: {
  label: string;
  className?: string;
  labelClassName?: string;
  variant?: keyof (typeof variantLabel)['variant'];
  id?: string;
  rightLabelElement?: React.ReactNode;
}) => {
  return (
    <div className={cn('flex items-center', className)}>
      {label && (
        <label
          htmlFor={id}
          className={cn(inputLabelVariants({ variant }), labelClassName)}
        >
          {label}
        </label>
      )}
      {rightLabelElement}
    </div>
  );
};
