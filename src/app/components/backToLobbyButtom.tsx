'use client';

import {Link} from "@/i18n/routing";
import { useTranslations } from 'next-intl';

export default function BackButtonLobby() {
  const t = useTranslations('BackLobbyButton');

  return (
    <div className="mt-8 flex ">
      <Link 
        href="/" 
        className="
          bg-[var(--color-primary)] 
          text-white 
          font-bold 
          py-2 
          px-6 
          rounded-full 
          shadow-lg 
          hover:bg-[var(--color-primary-dark)] 
          transition-colors 
          duration-300
          active:scale-95 
          focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50
        "
      >
        {t('backToLobby')}
      </Link>
    </div>
  );
}
