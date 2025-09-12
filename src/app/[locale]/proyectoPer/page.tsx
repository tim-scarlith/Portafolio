import { getTranslations } from 'next-intl/server';
import ProyectoCard from '@/app/components/ProyectoCard';

export default async function ProyectoPersonalPage() {
  const t = await getTranslations('ProyectoPer');

  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] mb-6">
        {t('title')}
      </h1>
      <p className="text-lg text-[var(--color-text)] mb-10">
        {t('description')}
      </p>
      <ProyectoCard />
    </main>
  );
}