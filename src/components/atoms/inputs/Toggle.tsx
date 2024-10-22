interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
  label?: string;
}

export const Toggle = ({ label, value, onChange, ...props }: ToggleProps) => {
  const isChecked = !!value;
  return (
    <label className="flex cursor-pointer items-center">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={(e) => onChange(e.target.checked)}
          {...props}
        />
        <div
          className={`h-6 w-10 rounded-full bg-gray-300 shadow-inner transition-colors duration-300 ease-in-out ${isChecked ? 'bg-blue-500' : ''}`}
        ></div>
        <div
          className={`absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white shadow transition-transform duration-300 ease-in-out ${isChecked ? 'translate-x-full transform' : ''}`}
        ></div>
      </div>
      {label && (
        <span className="ml-3 text-sm font-medium text-gray-700">{label}</span>
      )}
    </label>
  );
};
