import { getTranslations } from 'next-intl/server';
import AnimeSection from '@/app/components/AnimeSection';

export default async function HobbiesPage() {
  const t = await getTranslations('Hobbies');

  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] mb-6">ANIME</h1>
      <p className="text-lg text-[var(--color-text)] mb-10">{t('description')}</p>
      
      <AnimeSection />
      
    </main>
  );
}