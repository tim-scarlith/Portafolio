// src/app/components/CommentsSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function CommentsSection() {
  const t = useTranslations('Comments'); // Asegúrate de tener las traducciones
  
  // Reemplaza con la URL de tu repositorio de GitHub
  const githubIssuesUrl = 'https://github.com/tim-scarlith/Portafolio/discussions/1';//'https://github.com/tim-scarlith/Portafolio/issues/new/choose';

  return (
    <section className="mt-8 border-t-2 border-[var(--color-border)] pt-8">
      <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
        {t('titulo')}
      </h2>
      <p className="text-[var(--color-text)] mb-6">
        {t('descripcion')}
      </p>

      <div className="flex items-center gap-4">
        <Link 
          href={githubIssuesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 transform hover:scale-105"
        >
          {t('buttonText')}
        </Link>
      </div>
    </section>
  );
}