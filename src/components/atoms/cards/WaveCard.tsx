import { Waves, WavesProps } from '@/src/components/atoms/decorators';

interface WaveCardProps {
  children: React.ReactNode;
  type?: WavesProps['type'];
}

export const WaveCard = ({ children, type = 'default' }: WaveCardProps) => {
  return (
    <div className="relative flex items-center justify-center">
      <Waves type={type} />
      {children}
    </div>
  );
};
