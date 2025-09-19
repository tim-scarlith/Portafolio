export default function ProfileSchema() {
  const profileData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tim Scarlith",
    "url": "https://your-portfolio-url.com", 
    "image": "my-app/public/Tim.jpg", 
    "sameAs": [
      "https://github.com/tim-scarlith", 
      "https://linkedin.com/in/yourprofile", 
      
    ],
    "jobTitle": "Estudiante de Ingeniería en Computación",
    "affiliation": {
      "@type": "Organization",
      "name": "Instituto Tecnológico de Costa Rica"
    },
    "knowsAbout": [
      "Desarrollo Web",
      "Next.js",
      "Tailwind CSS",
      "Next-Intl",
      "Estructuras de Datos",
      "Programación",
      "SQL SERVER",
      "PYTON"
      
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Instituto Tecnológico de Costa Rica"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(profileData) }}
    />
  );
}