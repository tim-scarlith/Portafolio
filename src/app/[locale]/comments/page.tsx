// src/app/[locale]/comments/page.tsx
import { useTranslations } from "next-intl";
import CommentsSection from '@/app/components/CommentsSection';

export default function CommentsPage() {
    return (
        <main className="flex flex-col items-center justify-start min-h-screen px-6">
            <CommentsSection />
        </main>
    );
}