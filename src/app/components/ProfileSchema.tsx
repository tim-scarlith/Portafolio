export default function ProfileSchema() {
  const profileData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tim Scarlith",
    "url": "https://your-portfolio-url.com", // Replace with your portfolio URL
    "image": "my-app/public/Tim.jpg", // Replace with your profile image URL
    "sameAs": [
      "https://github.com/yourusername", // Replace with your GitHub URL
      "https://linkedin.com/in/yourprofile", // Replace with your LinkedIn URL
      // Add other social media or professional links here
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
      // Add more technologies or topics you are knowledgeable about
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