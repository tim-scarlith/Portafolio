import CommentsSection from '@/app/components/CommentsSection';
import BackButton from '@/app/components/backToLobbyButtom';

export default function CommentsPage() {
    return (
        <main className="flex flex-col items-center justify-start min-h-screen px-6">
            <BackButton/>
            <CommentsSection />
        </main>
    );
}

// // src/app/[locale]/comments/page.tsx
// import CommentsSection from '@/app/components/CommentsSection';
// import { getTranslations } from 'next-intl/server';
// import BackButton from '@/app/components/backToLobbyButtom';
// export default async function CommentsPage() {
//     const t = await getTranslations('Comments');
//     return (
//         <main className="flex flex-col justify-start min-h-screen px-6">
//             <BackButton/>
//             <CommentsSection />
//         </main>
//     );
// }
