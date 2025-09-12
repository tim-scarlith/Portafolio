//import { getTranslations } from 'next-intl/server';
import TCGSection from '@/app/components/TCGSection';
//const t = await getTranslations('TCGSection');


export default async function TCGPage() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] mb-6">
      </h1>
      <p className="text-lg text-[var(--color-text)] mb-10">
      </p>
      <TCGSection/>
      
    </main>
  );
}