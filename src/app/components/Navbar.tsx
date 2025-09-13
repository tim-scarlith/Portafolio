'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import ThemeToggle from '@/app/components/ThemeToggle';
import LocaleSwitcher from "./LocaleSwitcher";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('Navbar');

  const navLinks = [
    { href: "/academic-work", label: t('TrabajosAcademicos') },
    { href: "/personal-info", label: t('InfoPersonal') },
    { href: "/comments", label: t('Recomendaciones') },
    { href: "/hobbies", label: t('Hobbies') },
    { href: "/blog", label: t('Blog') },
    { href: "/proyectoPer", label: t('ProyectoPer') },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo del portafolio */}
        <Link href="/" className="text-xl font-bold">
          {t('portafolio')}
        </Link>

        {/* Botón de hamburguesa para móviles */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <LocaleSwitcher />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Menú de navegación para pantallas grandes */}
        <div className="hidden md:flex md:space-x-4 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gray-400">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </div>

      {/* Menú de hamburguesa desplegable para móviles */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-700 rounded-md">
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-gray-400 block"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// //
// import ThemeToggle from '@/app/components/ThemeToggle'; // Import the new component
// import {Link} from "@/i18n/routing";
// import { getTranslations } from "next-intl/server";
// import LocaleSwitcher from "./LocaleSwitcher";

// export default async function Navbar() {
// const t = await getTranslations('Navbar');
//   return (
//     <nav className="bg-gray-800 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link href="/" className="text-xl font-bold">
//           {t('portafolio')}
//         </Link>
//         <div className="flex space-x-4">
//           <Link href="/academic-work" className="hover:text-gray-400">
//             {t('TrabajosAcademicos')}
//           </Link>
//           <Link href="/personal-info" className="hover:text-gray-400">
//             {t('InfoPersonal')}
//           </Link>
//           <Link href="/comments" className="hover:text-gray-400">
//             {t('Recomendaciones')}
//           </Link>
//           {/* Custom sections required by the project */}
//           <Link href="/hobbies" className="hover:text-gray-400">
//             {t('Hobbies')}
//           </Link>
//           <Link href="/blog" className="hover:text-gray-400">
//             {t('Blog')}
//           </Link>
//           <Link href="/proyectoPer" className="hover:text-gray-400">
//             {t('ProyectoPer')}
//           </Link>
//           <ThemeToggle />
//           <LocaleSwitcher />
//         </div>
//       </div>
//     </nav>
//   );
// }