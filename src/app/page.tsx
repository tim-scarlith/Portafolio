export default function Home() {
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
          Soy estudiante de Ingeniería en Computación en el{" "}
          <span className="font-semibold">Instituto Tecnológico de Costa Rica</span>. 
          Me apasiona el desarrollo web y el aprendizaje de nuevas tecnologías.
        </p>

        {/* Propósito del portafolio */}
        <div className=" shadow-md rounded-2xl p-6 border">
          <h2 className="text-2xl font-semibold mb-3">
            Propósito del Portafolio
          </h2>
          <p >
            Este portafolio recopila los proyectos, laboratorios y actividades
            desarrollados durante el curso{" "}
            <span className="font-medium">IC8057 - Introducción al Desarrollo de Páginas Web</span>.
            Mi objetivo es mostrar mi progreso como desarrollador y compartir 
            mi crecimiento profesional y técnico.
          </p>
        </div>
      </section>
    </main>
  );
}