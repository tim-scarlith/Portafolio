'use client';
import {Link} from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from 'react';

// Interfaces for component props
interface CourseFiltersProps {
  onFilterChange: (filters: {
    type: string[];
    tech: string[];
    fromDate?: string;
    toDate?: string;
  }) => void;
  allEvaluationTypes: string[];
  allTechnologies: string[];
}

export default function CourseFilters({
  onFilterChange,
  allEvaluationTypes,
  allTechnologies,
}: CourseFiltersProps) {
  const t = useTranslations('CourseFilters');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [fromDate, setFromDate] = useState<string>('');
  const [toDate, setToDate] = useState<string>('');

  const emitFilterChange = () => {
    onFilterChange({
      type: selectedTypes,
      tech: selectedTechs,
      fromDate: fromDate || undefined,
      toDate: toDate || undefined,
    });
  };

  // Toggle filter selection for evaluation types
  const handleTypeChange = (type: string) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(updatedTypes);
    onFilterChange({ type: updatedTypes, tech: selectedTechs, fromDate, toDate });
  };

  // Toggle filter selection for technologies
  const handleTechChange = (tech: string) => {
    const updatedTechs = selectedTechs.includes(tech)
      ? selectedTechs.filter(t => t !== tech)
      : [...selectedTechs, tech];
    setSelectedTechs(updatedTechs);
    onFilterChange({ type: selectedTypes, tech: updatedTechs, fromDate, toDate });
  };
  
  // Handle date input changes
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'fromDate') {
      setFromDate(value);
    } else {
      setToDate(value);
    }
    onFilterChange({
      type: selectedTypes,
      tech: selectedTechs,
      fromDate: name === 'fromDate' ? value : fromDate,
      toDate: name === 'toDate' ? value : toDate,
    });
  };


  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{t('Eval')}</h3>
        <div className="flex flex-wrap gap-2">
          {allEvaluationTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => handleTypeChange(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTypes.includes(type)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{t('Tech')}</h3>
        <div className="flex flex-wrap gap-2">
          {allTechnologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => handleTechChange(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTechs.includes(tech)
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{t('FechaEntr')}</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <p>{t('Desde')}</p>
          <input
            type="date"
            name="fromDate"
            value={fromDate}
            onChange={handleDateChange}
            className="w-full sm:w-1/2 p-2 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
            
          />
          <p>{t('Hasta')}</p>
          <input
            type="date"
            name="toDate"
            value={toDate}
            onChange={handleDateChange}
            className="w-full sm:w-1/2 p-2 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
          />
        </div>
      </div>
    </div>
  );
}

// 'use client';

// import { useState } from 'react';

// // Interfaces for component props
// interface CourseFiltersProps {
//   onFilterChange: (filters: { type: string[]; tech: string[] }) => void;
//   allEvaluationTypes: string[];
//   allTechnologies: string[];
// }

// export default function CourseFilters({ onFilterChange, allEvaluationTypes, allTechnologies }: CourseFiltersProps) {
//   const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
//   const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

//   // Toggle filter selection for evaluation types
//   const handleTypeChange = (type: string) => {
//     const updatedTypes = selectedTypes.includes(type)
//       ? selectedTypes.filter(t => t !== type)
//       : [...selectedTypes, type];
//     setSelectedTypes(updatedTypes);
//     onFilterChange({ type: updatedTypes, tech: selectedTechs });
//   };

//   // Toggle filter selection for technologies
//   const handleTechChange = (tech: string) => {
//     const updatedTechs = selectedTechs.includes(tech)
//       ? selectedTechs.filter(t => t !== tech)
//       : [...selectedTechs, tech];
//     setSelectedTechs(updatedTechs);
//     onFilterChange({ type: selectedTypes, tech: updatedTechs });
//   };

//   return (
//     <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Tipo de Evaluación</h3>
//         <div className="flex flex-wrap gap-2">
//           {allEvaluationTypes.map((type, index) => (
//             <button
//               key={index}
//               onClick={() => handleTypeChange(type)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                 selectedTypes.includes(type)
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600'
//               }`}
//             >
//               {type}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div>
//         <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Tecnologías</h3>
//         <div className="flex flex-wrap gap-2">
//           {allTechnologies.map((tech, index) => (
//             <button
//               key={index}
//               onClick={() => handleTechChange(tech)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                 selectedTechs.includes(tech)
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600'
//               }`}
//             >
//               {tech}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }