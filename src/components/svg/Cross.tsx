interface CrossProps {
  width?: number;
  height?: number;
  color?: string;
}

export const Cross = ({
  width = 16,
  height = 16,
  color = 'currentColor',
}: CrossProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
