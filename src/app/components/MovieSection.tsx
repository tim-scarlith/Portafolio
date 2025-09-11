'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function MovieSection() {
  const t = useTranslations('MovieSection');
  
  return (
    <div className="space-y-12">
      {/* The Revenant Section */}
      <section className="bg-[var(--color-bg-offset)] p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">{t('titleRevenant')}</h2>
            <p className="text-[var(--color-text)] leading-relaxed">
              {t('descriptionRevenant')}
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/revenat.webp"
              alt={t('altRevenant')}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Django Unchained Section */}
      <section className="bg-[var(--color-bg-offset)] p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">{t('titleDjango')}</h2>
            <p className="text-[var(--color-text)] leading-relaxed">
              {t('descriptionDjango')}
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/django.jpg"
              alt={t('altDjango')}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* The Irishman Section */}
      <section className="bg-[var(--color-bg-offset)] p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">{t('titleIrishman')}</h2>
            <p className="text-[var(--color-text)] leading-relaxed">
              {t('descriptionIrishman')}
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/irishman.png"
              alt={t('altIrishman')}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}