// src/app/[locale]/hobbies/page.tsx
import { getTranslations } from 'next-intl/server';
import HobbiesCards from '@/app/components/HobbiesCards';
import BackButton from '@/app/components/backToLobbyButtom';
export default async function HobbiesPage() {
  const t = await getTranslations('Hobbies');

  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] mb-6">{t('title')}</h1>
      <p className="text-lg text-[var(--color-text)] mb-10">{t('description')}</p>
      <BackButton/>
      <HobbiesCards />
    </main>
  );
}