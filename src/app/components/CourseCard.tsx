import Link from 'next/link';
import { useTranslations } from "next-intl";

interface Work {
  name: string;
  type: string;
  objective: string;
  date: string;
  technologies: string[];
  repoLink?: string;
  deployLink?: string;
}

interface Course {
  id: number;
  code: string;
  name: string;
  semester: string;
  description: string;
  works: Work[];
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const t = useTranslations('CourseCard');
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {course.code} - {course.name}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {course.semester}
      </p>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        {course.description}
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {t('Trabajos')}
        </h3>
        <ul className="mt-4 space-y-4">
          {course.works.map((work, index) => (
            <li key={index} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                {work.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('Tipo')} {work.type}
              </p>
              <p className="mt-1 text-gray-700 dark:text-gray-300">
                {t('Descrip')} {work.objective}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {t('Fecha')} {work.date}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {work.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-200 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-2 flex space-x-4">
                {work.repoLink && (
                  <Link href={work.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {t('Repo')}
                  </Link>
                )}
                {work.deployLink && (
                  <Link href={work.deployLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {t('WebSite')}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}