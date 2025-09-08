'use client';

import { useState, useRef } from 'react';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function PersonalInfoPage() {
  const t = useTranslations('PersonalInfo');
  const cvRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    if (cvRef.current) {
      const element = cvRef.current;
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('Curriculum_Tim_Scarlith.pdf');
    }
    setIsGenerating(false);
  };

  const skills = [
    {
      category: t('habilida1'),
      items: [
        { name: 'JavaScript', level: 'Avanzado' },
        { name: 'TypeScript', level: 'Intermedio' },
        { name: 'Python', level: 'Intermedio' },
        { name: 'Java', level: 'Básico' },
      ],
    },
    {
      category: t('habilida2'),
      items: [
        { name: 'Next.js', level: 'Avanzado' },
        { name: 'React', level: 'Avanzado' },
        { name: 'Tailwind CSS', level: 'Avanzado' },
        { name: 'Next-Intl', level: 'Intermedio' },
      ],
    },
    {
      category: t('habilida3'),
      items: [
        { name: 'SQL', level: 'Intermedio' },
        { name: 'MongoDB', level: 'Básico' },
        { name: 'Firebase', level: 'Básico' },
      ],
    },
    {
      category: t('Herramientas'),
      items: [
        { name: 'Git', level: 'Avanzado' },
        { name: 'GitHub', level: 'Avanzado' },
        { name: 'Figma', level: 'Básico' },
      ],
    },
  ];

  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4 md:mb-0">
          {t('Titulo')}
        </h1>
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 transform hover:scale-105"
          disabled={isGenerating}
        >
          {isGenerating ? t('Cargando') : t('DescargaPDF')}
        </button>
      </div>

      <div ref={cvRef} className="bg-[var(--color-bg)] rounded-lg shadow-xl p-6 md:p-8 dark-mode-fix">
        {/* Biografía y Foto */}
        <section className="flex flex-col md:flex-row items-center md:items-start mb-8 border-b-2 border-[var(--color-border)] pb-8">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <Image
              src="/Tim.jpg"
              alt={t('FotoPerfil')}
              width={150}
              height={150}
              className="rounded-full border-4 border-[var(--color-border)] shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-2">{t('PersonBiblio')}</h2>
            <p className="text-[var(--color-text)] leading-relaxed">
              {t('Bibliografia1')}
              <span className="font-semibold">{t('Bibliografia2')}</span>.
              {t('Bibliografia3')}
            </p>
          </div>
        </section>

        {/* Habilidades Técnicas */}
        <section className="mb-8 border-b-2 border-[var(--color-border)] pb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">{t('habilidades')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-[var(--color-bg-offset)] p-4 rounded-lg shadow-inner">
                <h3 className="font-semibold text-lg text-[var(--color-text)] mb-2">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-sm">
                      <div className="flex justify-between items-center text-[var(--color-text-offset)]">
                        <span>{item.name}</span>
                        <span className="text-xs text-[var(--color-primary-offset)]">{item.level}</span>
                      </div>
                      <div className="w-full bg-[var(--color-border)] rounded-full h-2.5 mt-1">
                        <div
                          className={`h-2.5 rounded-full ${
                            item.level === 'Avanzado' ? 'bg-[var(--color-primary)]' : item.level === 'Intermedio' ? 'bg-[var(--color-secondary)]' : 'bg-red-500'
                          }`}
                          style={{ width: `${
                            item.level === 'Avanzado' ? '90%' : item.level === 'Intermedio' ? '60%' : '30%'
                          }` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certificaciones y Enlaces */}
        <section className="mb-8 border-b-2 border-[var(--color-border)] pb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">{t('CertificacionesTitulo')}</h2>
          <p className="text-[var(--color-text)]">
            {t('Certificaciones')}
            <Link href="https://ejemplo.com/certificacion1" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {t('1LinkCertific')}
            </Link>
            ,{' '}
            <Link href="https://ejemplo.com/certificacion2" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {t('2LinkCertific')}
            </Link>
          </p>
        </section>

        {/* Redes Profesionales */}
        <section className="mb-8 border-b-2 border-[var(--color-border)] pb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">{t('Resdes')}</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="https://linkedin.com/in/timscarlith" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] hover:underline font-medium">
              LinkedIn
            </Link>
            <Link href="https://github.com/timscarlith" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text)] hover:underline font-medium">
              GitHub
            </Link>
            <Link href="https://behance.net/timscarlith" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline font-medium">
              Behance
            </Link>
          </div>
        </section>

        {/* Información Adicional */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">{t('additionInfoTitulo')}</h2>
          <ul className="list-disc list-inside text-[var(--color-text)] space-y-2">
            <li>{t('Info1')}</li>
            <li>{t('Info2')}</li>
            <li>{t('Info3')}</li>
          </ul>
        </section>
      </div>
    </main>
  );
}