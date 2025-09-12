'use client';

import {Link} from "@/i18n/routing";
import { useTranslations } from 'next-intl';

export default function BackButton() {
  const t = useTranslations('BackButton');

  return (
    <div className="mt-8">
      <Link href="/hobbies" className="hover:text-gray-400">
        
         {t('backToHobbies')}
        
      </Link>
    </div>
  );
}