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


