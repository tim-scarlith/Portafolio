import CourseCard from "@/app/components/CourseCard";
import coursesData from "@/data/courses.json";

export default function AcademicWorkPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Trabajos Académicos por Curso
      </h1>
      <section>
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
}