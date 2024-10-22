interface TitleProps {
  text: string;
  rightElement?: React.ReactNode;
}

export const Title = ({ text }: TitleProps) => {
  return (
    <div className="flex content-center items-center">
      <h3 className="mb-0 text-lg font-medium">{text}</h3>
    </div>
  );
};
