'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function TCGSection() {
  const t = useTranslations('TCGSection');
  
  return (
    <div className="space-y-12">
      {/* Magic: The Gathering Section */}
      <section className="bg-[var(--color-bg-offset)] p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">{t('titleMTG')}</h2>
            <p className="text-[var(--color-text)] leading-relaxed">
              {t('descriptionMTG')}
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/MTG.png"
              alt={t('altMTG')}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Pokémon TCG Section */}
      <section className="bg-[var(--color-bg-offset)] p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">{t('titlePokemon')}</h2>
            <p className="text-[var(--color-text)] leading-relaxed">
              {t('descriptionPokemon')}
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/pokemon.png"
              alt={t('altPokemon')}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Yu-Gi-Oh! Section */}
      <section className="bg-[var(--color-bg-offset)] p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">{t('titleYugioh')}</h2>
            <p className="text-[var(--color-text)] leading-relaxed">
              {t('descriptionYugioh')}
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/Yu-Gi-Oh.png"
              alt={t('altYugioh')}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}