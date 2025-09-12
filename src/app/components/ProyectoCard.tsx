'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ProyectoCard() {
  const t = useTranslations('ProyectoCard');

  return (
    <div className="bg-[var(--color-bg-offset)] p-6 md:p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-4">
        {t('title')}
      </h2>
      <p className="text-lg text-[var(--color-text)] mb-6">
        {t('description')}
      </p>

      {/* Sección de Tecnologías */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
          {t('techTitle')}
        </h3>
        <ul className="list-disc list-inside text-[var(--color-text)]">
          <li>{t('techReact')}</li>
          <li>{t('techTailwind')}</li>
          <li>{t('techFramer')}</li>
          <li>{t('techCMS')}</li>
        </ul>
      </div>

      {/* Sección de Imágenes (Responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/constructorasEs.png"
            alt={t('altDesktop')}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/movil.jpg"
            alt={t('altMobile')}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}