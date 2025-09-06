'use client';

import { useState } from 'react';
import CourseCard from "@/app/components/CourseCard";
import CourseFilters from "@/app/components/CourseFilters";
import coursesData from "@/data/courses.json";

// Extract all unique evaluation types and technologies from the data
const allEvaluationTypes = Array.from(new Set(
  coursesData.flatMap(course => course.works.map(work => work.type))
));
const allTechnologies = Array.from(new Set(
  coursesData.flatMap(course => course.works.flatMap(work => work.technologies))
));

export default function AcademicWorkPage() {
  const [filters, setFilters] = useState<{
    type: string[];
    tech: string[];
    fromDate?: string;
    toDate?: string;
  }>({
    type: [],
    tech: [],
  });

  const handleFilterChange = (newFilters: {
    type: string[];
    tech: string[];
    fromDate?: string;
    toDate?: string;
  }) => {
    setFilters(newFilters);
  };

  // Filter the courses based on the selected filters
  const filteredCourses = coursesData.map(course => {
    const filteredWorks = course.works.filter(work => {
      const matchesType = filters.type.length === 0 || filters.type.includes(work.type);
      const matchesTech = filters.tech.length === 0 || work.technologies.some(tech => filters.tech.includes(tech));

      // Date filtering logic
      const workDate = new Date(work.date);
      const fromDate = filters.fromDate ? new Date(filters.fromDate) : null;
      const toDate = filters.toDate ? new Date(filters.toDate) : null;
      
      const matchesDate = 
        (!fromDate || workDate >= fromDate) && 
        (!toDate || workDate <= toDate);

      return matchesType && matchesTech && matchesDate;
    });

    return { ...course, works: filteredWorks };
  }).filter(course => course.works.length > 0);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Trabajos Académicos por Curso
      </h1>
      <CourseFilters
        onFilterChange={handleFilterChange}
        allEvaluationTypes={allEvaluationTypes}
        allTechnologies={allTechnologies}
      />
      <section>
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
        {filteredCourses.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No se encontraron trabajos que coincidan con los filtros seleccionados.
          </p>
        )}
      </section>
    </main>
  );
}
// 'use client';

// import { useState } from 'react';
// import CourseCard from "@/app/components/CourseCard";
// import CourseFilters from "@/app/components/CourseFilters";
// import coursesData from "@/data/courses.json";

// // Extract all unique evaluation types and technologies from the data
// const allEvaluationTypes = Array.from(new Set(
//   coursesData.flatMap(course => course.works.map(work => work.type))
// ));
// const allTechnologies = Array.from(new Set(
//   coursesData.flatMap(course => course.works.flatMap(work => work.technologies))
// ));

// export default function AcademicWorkPage() {
//   const [filters, setFilters] = useState<{ type: string[]; tech: string[] }>({
//     type: [],
//     tech: [],
//   });

//   const handleFilterChange = (newFilters: { type: string[]; tech: string[] }) => {
//     setFilters(newFilters);
//   };

//   // Filter the courses based on the selected filters
//   const filteredCourses = coursesData.map(course => {
//     const filteredWorks = course.works.filter(work => {
//       const matchesType = filters.type.length === 0 || filters.type.includes(work.type);
//       const matchesTech = filters.tech.length === 0 || work.technologies.some(tech => filters.tech.includes(tech));
//       return matchesType && matchesTech;
//     });

//     return { ...course, works: filteredWorks };
//   }).filter(course => course.works.length > 0);

//   return (
//     <main className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
//         Trabajos Académicos por Curso
//       </h1>
//       <CourseFilters
//         onFilterChange={handleFilterChange}
//         allEvaluationTypes={allEvaluationTypes}
//         allTechnologies={allTechnologies}
//       />
//       <section>
//         {filteredCourses.map((course) => (
//           <CourseCard key={course.id} course={course} />
//         ))}
//         {filteredCourses.length === 0 && (
//           <p className="text-center text-gray-500 dark:text-gray-400">
//             No se encontraron trabajos que coincidan con los filtros seleccionados.
//           </p>
//         )}
//       </section>
//     </main>
//   );
// }