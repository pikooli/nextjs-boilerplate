import { WaveCard } from '@/src/components/atoms/cards';

interface HeroPrimaryProps {
  title: React.ReactNode;
  description: React.ReactNode;
  cta: React.ReactNode;
}

export const PrimaryHero = ({ title, description, cta }: HeroPrimaryProps) => {
  return (
    <WaveCard>
      <div className="mx-auto py-24 sm:py-32 lg:py-48">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">{title}</div>
        <div className="text-center">
          {description}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {cta}
          </div>
        </div>
      </div>
      {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div> */}
    </WaveCard>
  );
};
