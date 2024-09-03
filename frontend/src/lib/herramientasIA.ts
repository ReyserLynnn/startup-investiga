type CardIA = {
  title: string;
  description: string;
  image: string;
};

export function getHerramientasIA(): CardIA[] {
  return [
    {
      title: 'Copilot Microsoft',
      description:
        'Asistente inteligente para la escritura y codificación eficiente.',
      image: '/logosIA/copilot-ai.webp',
    },
    {
      title: 'Gemini Google',
      description:
        'Herramienta avanzada de IA para análisis y descubrimiento de información.',
      image: '/logosIA/gemini-ai.webp',
    },
    {
      title: 'Research Rabbit',
      description: 'Explora y organiza investigaciones con facilidad.',
      image: '/logosIA/research-rabbit-ai.webp',
    },
    {
      title: 'Keenious',
      description:
        'Encuentra ideas relacionadas y mejora tu investigación con IA.',
      image: '/logosIA/keenious.webp',
    },
    {
      title: 'Perplexity',
      description: 'Reescribe y mejora textos científicos de manera fluida.',
      image: '/logosIA/perplexity.webp',
    },
    {
      title: 'Jenni AI',
      description: 'Genera contenido y asistencia en redacción con IA',
      image: '/logosIA/jenni-ai.webp',
    },
    {
      title: 'Typeset',
      description:
        'Optimiza la escritura y el formato de tus documentos académicos.',
      image: '/logosIA/typeset.io.webp',
    },
    {
      title: 'Connected Papers',
      description:
        'Descubre conexiones entre investigaciones para un mejor análisis.',
      image: '/logosIA/connectedpapers-logo.jpg',
    },
  ];
}

export function getTiposIA(): string[] {
  return [
    'Redactor',
    'Revisor',
    'Generativo',
    'Analizador',
    'Visualizador',
    'Resumidor',
  ];
}
