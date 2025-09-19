'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';


export default function VideoGameSection() {
    const t = useTranslations('VideoGameSection');
  return (
    <div className="space-y-12">
      {/* Dark Souls 1 Section */}
      <section className="bg-[var(--color-bg-offset)] p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">{t('titleDarkSouls')}</h2>
            <p className="text-[var(--color-text)] leading-relaxed">
              {t('descriptionDarkSouls')}
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/darksouls.jpg"
              alt={t('altDarkSouls')}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Shadow of the Colossus Section */}
      <section className="bg-[var(--color-bg-offset)] p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">{t('titleSOTC')}</h2>
            <p className="text-[var(--color-text)] leading-relaxed">
              {t('descriptionSOTC')}
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/shadowofthecolossus.jpg"
              alt={t('altSOTC')}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Marvel Rivals Section */}
      <section className="bg-[var(--color-bg-offset)] p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">{t('titleMarvelRivals')}</h2>
            <p className="text-[var(--color-text)] leading-relaxed">
              {t('descriptionMarvelRivals')}
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/marvelrivals.webp"
              alt={t('altMarvelRivals')}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}