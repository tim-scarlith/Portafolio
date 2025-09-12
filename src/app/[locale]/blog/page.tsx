
import BlogSection from '@/app/components/BlogSection';
import { useTranslations } from "next-intl";


export default function BlogPage() {
  const t =  useTranslations('Blog');
  
  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] mb-6">
        {t('title')}
      </h1>
      <p className="text-lg text-[var(--color-text)] mb-10">
        {t('subtitle')}
      </p>

      <div className="space-y-12">
        <BlogSection/>
      </div>
    </main>
  );
}