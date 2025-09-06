//import Link from 'next/link';
import ThemeToggle from '@/app/components/ThemeToggle'; // Import the new component
import {Link} from "@/i18n/routing";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Mi Portafolio
        </Link>
        <div className="flex space-x-4">
          <Link href="/academic-work" className="hover:text-gray-400">
            Trabajos Académicos
          </Link>
          <Link href="/personal-info" className="hover:text-gray-400">
            Información Personal
          </Link>
          <Link href="/recommendations" className="hover:text-gray-400">
            Recomendaciones
          </Link>
          {/* Custom sections required by the project */}
          <Link href="/custom-1" className="hover:text-gray-400">
            Sección 1
          </Link>
          <Link href="/custom-2" className="hover:text-gray-400">
            Sección 2
          </Link>
          <Link href="/custom-3" className="hover:text-gray-400">
            Sección 3
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}