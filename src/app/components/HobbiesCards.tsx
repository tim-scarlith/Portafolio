'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import hobbiesData from '@/data/hobbies.json'; // Direct import

// interface Hobby {
//   id: string;
//   title: string;
//   image: string;
//   description: string;
// }

// export default function HobbiesCards() {
//   const hobbies: Hobby[] = hobbiesData;


//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//       {hobbies.map((hobby) => (
        
//         <Link key={hobby.id} href={`/hobbies/${hobby.id}`} passHref>
//           <div className="block bg-[var(--color-bg-offset)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//             <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
//               <Image
//                 src={hobby.image}
//                 alt={`Imagen de ${hobby.title}`}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-md"
//               />
//             </div>
//             <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2">{hobby.title}</h2>
//             <p className="text-[var(--color-text)]">{hobby.description}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }


import {Link} from "@/i18n/routing";
import Image from 'next/image';
import hobbiesData from '@/data/hobbies.json'; // Direct import
import { usePathname } from '@/i18n/routing';

interface Hobby {
  id: string;
  title: string;
  image: string;
  description: string;
}

export default function HobbiesCards() {
  const hobbies: Hobby[] = hobbiesData;
  const pathname = usePathname(); // Get the current pathname to build the URL

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {hobbies.map((hobby) => (
        <Link key={hobby.id} href={`/hobbies/${hobby.id}`}>
          <div className="block bg-[var(--color-bg-offset)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
              <Image
                src={hobby.image}
                alt={`Imagen de ${hobby.title}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2">{hobby.title}</h2>
            <p className="text-[var(--color-text)]">{hobby.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}