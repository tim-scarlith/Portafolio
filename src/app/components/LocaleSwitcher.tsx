'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    // La función replace de useRouter cambia la URL manteniendo el estado
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleChange('es')}
        className={`px-3 py-1 rounded-full font-semibold transition-colors duration-300 ${
          locale === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        Es
      </button>
      <button
        onClick={() => handleChange('en')}
        className={`px-3 py-1 rounded-full font-semibold transition-colors duration-300 ${
          locale === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        En
      </button>
    </div>
  );
}