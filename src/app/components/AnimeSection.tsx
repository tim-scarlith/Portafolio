'use client';

import Image from 'next/image';

export default function AnimeSection() {
  return (
    <div className="space-y-12">
      {/* Dandadan Section */}
      <section className="bg-[var(--color-bg-offset)] p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">Dandadan</h2>
            <p className="text-[var(--color-text)] leading-relaxed">
              Dandadan es uno de mis animes favoritos por su mezcla única de acción sobrenatural, comedia y romance. La historia de Momo y Okarun, mientras se enfrentan a fantasmas y extraterrestres, es emocionante y ridículamente divertida.
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/dandadan.jpg"
              alt="Dandadan Anime"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Jujutsu Kaisen Section */}
      <section className="bg-[var(--color-bg-offset)] p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">Jujutsu Kaisen</h2>
            <p className="text-[var(--color-text)] leading-relaxed">
              Jujutsu Kaisen se ha convertido en uno de mis preferidos por su animación de alta calidad, sus intensas batallas y un sistema de poder fascinante. La profundidad de los personajes y la tensión constante en la trama lo hacen muy adictivo.
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/jjk.webp"
              alt="Jujutsu Kaisen Anime"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* One-Punch Man Section */}
      <section className="bg-[var(--color-bg-offset)] p-6 md:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">One-Punch Man</h2>
            <p className="text-[var(--color-text)] leading-relaxed">
              One-Punch Man me encanta por su premisa cómica y su protagonista absurdamente poderoso, Saitama. La serie parodia los tropos del género de superhéroes mientras ofrece peleas visualmente impresionantes. Es un anime perfecto para reír y sorprenderse.
            </p>
          </div>
          <div className="md:w-1/2 relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/opm.webp"
              alt="One-Punch Man Anime"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}