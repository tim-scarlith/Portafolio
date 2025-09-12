//import Link from 'next/link';
import ThemeToggle from '@/app/components/ThemeToggle'; // Import the new component
import {Link} from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Navbar() {
const t = await getTranslations('Navbar');
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {t('portafolio')}
        </Link>
        <div className="flex space-x-4">
          <Link href="/academic-work" className="hover:text-gray-400">
            {t('TrabajosAcademicos')}
          </Link>
          <Link href="/personal-info" className="hover:text-gray-400">
            {t('InfoPersonal')}
          </Link>
          <Link href="/comments" className="hover:text-gray-400">
            {t('Recomendaciones')}
          </Link>
          {/* Custom sections required by the project */}
          <Link href="/hobbies" className="hover:text-gray-400">
            {t('Hobbies')}
          </Link>
          <Link href="/blog" className="hover:text-gray-400">
            {t('Blog')}
          </Link>
          <Link href="/custom-3" className="hover:text-gray-400">
            {t('sec3')}
          </Link>
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
}