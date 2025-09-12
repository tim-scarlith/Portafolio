'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
//import { type AbstractIntlMessages } from 'next-intl';

interface BlogSectionProps {
  t: (key: string) => string;
}

export default function BlogSection() {
    const t = useTranslations('BlogSection');
  return (
    <article className="bg-[var(--color-bg-offset)] p-6 md:p-8 rounded-lg shadow-lg mb-8">
      <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
        {t('articleTitle')}
      </h2>
      <p className="text-sm text-[var(--color-text)] mb-4">
        Por: <span className="font-semibold">{t('articleAuthor')}</span>
      </p>
      <p className="text-[var(--color-text)] leading-relaxed whitespace-pre-line">
        {t('articleContent')}
      </p>
    </article>
  );
}