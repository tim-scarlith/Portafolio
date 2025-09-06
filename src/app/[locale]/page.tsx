import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations('Home');
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6">
      {/* Contenedor */}
      <section className="max-w-3xl text-center">
        {/* Foto (opcional) */}
        <img
          src="/Tim.jpg"
          alt="Foto del estudiante"
          className="w-70 h-70 rounded-full mx-auto shadow-lg mb-6"
        /> 

        {/* Introducción */}
        <h1 className="text-4xl font-bold mb-4">
          ¡Hola, soy Tim Scarlith!
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          {t('descripcion1')}          
          <span className="font-semibold">{t('descripcion2')}</span>. 
         {t('descripcion3')}          
        </p>

        {/* Propósito del portafolio */}
        <div className=" shadow-md rounded-2xl p-6 border">
          <h2 className="text-2xl font-semibold mb-3">
            {t('proposito1')} 
          </h2>
          <p >
            {t('proposito2')}
            <span className="font-medium">{t('proposito3')}</span>.
            {t('proposito4')} 
            {t('proposito5')}
          </p>
        </div>
      </section>
    </main>
  );
}