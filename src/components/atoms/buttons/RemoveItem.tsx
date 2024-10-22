import { Cross } from '@/src/components/svg';
import { cn } from '@/src/utils/cn';
import { PrimaryButton } from './PrimaryButton';

interface RemoveItemProps {
  id?: string;
  onClick: () => void;
  className?: string;
}

export const RemoveItem = ({ onClick, className, id }: RemoveItemProps) => {
  return (
    <PrimaryButton
      type="button"
      onClick={onClick}
      id={id}
      className={cn(
        'rounded-full bg-red-500 p-1.5 text-white shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400',
        className
      )}
    >
      <Cross />
    </PrimaryButton>
  );
};
