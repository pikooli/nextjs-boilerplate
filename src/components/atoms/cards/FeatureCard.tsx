interface FeatureCardProps {
  inverse?: boolean;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

export const FeatureCard = ({
  inverse = false,
  leftElement,
  rightElement,
}: FeatureCardProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {inverse ? (
        <>
          {leftElement}
          {rightElement}
        </>
      ) : (
        <>
          {rightElement}
          {leftElement}
        </>
      )}
    </div>
  );
};
