'use client';
import { ChartColumnIcon, FileText, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslations } from '@/i18n/client';
import { FeatureCard, WaveCard } from '@/src/components/atoms/cards';
import type { WavesProps } from '@/src/components/atoms/decorators';
import { PrimaryHero } from '@/src/components/atoms/heros';
import { PrimaryLink } from '@/src/components/atoms/links';

const ICON_SIZE = 32;

interface ButtonElementProps {
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: WavesProps['type'];
}

const ButtonElement = ({
  onClick,
  icon,
  title,
  description,
  color,
}: ButtonElementProps) => {
  const { t } = useTranslations();
  return (
    <WaveCard type={color}>
      <button
        className="h-[250px] w-[500px] rounded-lg bg-white p-6 shadow-md transition duration-300 hover:shadow-lg"
        onClick={onClick}
      >
        <div className="mb-4 flex items-center justify-center space-x-4">
          <div className="flex-shrink-0">{icon}</div>
          <h2 className="text-xl font-semibold">{t(title)}</h2>
        </div>
        <p className="font-light text-gray-600">{t(description)}</p>
      </button>
    </WaveCard>
  );
};

interface DescriptionElementProps {}

const DescriptionElement = ({}: DescriptionElementProps) => <div>test</div>;

export default function HomePage() {
  const { t } = useTranslations();

  const router = useRouter();

  const FEATURE_CARDS = [
    {
      onClick: () => {
        router.push('/dashboard');
      },
      title: 'pages.welcome.cards.card_1.title',
      side: 'left',
      description: 'pages.welcome.cards.card_1.description',
      icon: <FileText size={ICON_SIZE} />,
      color: 'purple',
    },
    {
      onClick: () => {
        alert('Coming soon');
      },
      title: 'pages.welcome.cards.card_2.title',
      side: 'right',
      description: 'pages.welcome.cards.card_2.description',
      icon: <ChartColumnIcon size={ICON_SIZE} />,
      color: 'red',
    },
    {
      onClick: () => {
        alert('Coming soon');
      },
      title: 'pages.welcome.cards.card_3.title',
      side: 'left',
      description: 'pages.welcome.cards.card_3.description',
      icon: <Search size={ICON_SIZE} />,
      color: 'blue',
    },
  ] as const;

  return (
    <div className="w-full bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="container m-auto px-4 py-16">
        <PrimaryHero
          title={
            <h1 className="mb-4 text-4xl font-bold text-white shadow-sm md:text-6xl">
              {t('pages.welcome.title', {
                name: process.env.NEXT_PUBLIC_APP_NAME,
              })}
            </h1>
          }
          description={
            <p className="mb-8 text-xl text-white shadow-sm md:text-2xl">
              {t('pages.welcome.description')}
            </p>
          }
          cta={
            <div className="flex justify-center space-x-4">
              <PrimaryLink href="/dashboard">
                {t('pages.welcome.get-started')}
              </PrimaryLink>
              <PrimaryLink href="/about">
                {t('pages.welcome.learn-more')}
              </PrimaryLink>
            </div>
          }
        />
        <div className="grid-col-1 mt-20 grid gap-20">
          {FEATURE_CARDS.map((card) => (
            <FeatureCard
              key={card.title}
              inverse={card.side === 'right'}
              rightElement={<ButtonElement {...card} />}
              leftElement={<DescriptionElement />}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
