'use client';

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";


interface Comment {
  id: number;
  body: string;
  user: {
    login: string;
  };
}

export default function RecommendationsSection() {
  const t = useTranslations("Comments");
  
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetch("/api/comments")
      .then((res) => res.json())
      .then(setComments);
  }, []);

  const handleSubmit = async () => {
    if (!newComment.trim()) return;
    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body: newComment }),
    });

    console.log(newComment);
    console.log("Miaaaaw!!",newComment);
    setNewComment("");
    // recargar lista
    const res = await fetch("/api/comments");
    setComments(await res.json());
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <section className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">{t('title')}</h1>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 mb-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{t('addCommentTitle')}</h2>
          <textarea
            className="w-full p-4 mb-4 border rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            rows={4}
            placeholder={t('placeholder')}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 transform hover:scale-105"
          >
            {t('submitButton')}
          </button>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center mb-6">{t('commentsTitle')}</h2>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                {/* Se eliminan las comillas para evitar el error del linter */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">{comment.body}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400"> {">>>"} {comment.user?.login}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 italic">{t('noComments')}</p>
          )}
        </div>
      </section>
    </main>
  );
}

