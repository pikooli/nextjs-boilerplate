const styles = {
  default: {
    colorFrom: '#ff80b5',
    colorTo: '#9089fc',
  },
  green: {
    colorFrom: '#00CED1',
    colorTo: '#4B0082',
  },
  blue: {
    colorFrom: '#1E90FF',
    colorTo: '#00008B',
  },
  purple: {
    colorFrom: '#8A2BE2',
    colorTo: '#4B0082',
  },
  orange: {
    colorFrom: '#FFA500',
    colorTo: '#FF4500',
  },
  red: {
    colorFrom: '#FF6347',
    colorTo: '#8B0000',
  },
} as const;

export interface WavesProps {
  type?: keyof typeof styles;
}

export const Waves = ({ type = 'default' }: WavesProps) => {
  // let colorFrom, colorTo;
  // switch (type) {
  //   case 'default':
  //     ({ colorFrom, colorTo } = styles.default);
  //     break;
  //   case 'green':
  //     ({ colorFrom, colorTo } = styles.green);
  //     break;
  //   default:
  //     ({ colorFrom, colorTo } = styles.default);
  //     break;
  // }
  const { colorFrom, colorTo } = styles[type];

  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          background: `linear-gradient(to top right, ${colorFrom}, ${colorTo})`,
        }}
        className={`relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]`}
      />
    </div>
  );
};
