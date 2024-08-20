type CardIA = {
  title: string;
  description: string;
  image: string;
};

export function getHerramientasIA(): CardIA[] {
  return [
    {
      title: 'ChatGPT',
      description: 'Asistente de IA que ayuda a generar y revisar textos científicos y resolver dudas.',
      image: '/logosIA/chatgpt.webp',
    },
    {
      title: 'Perplexity',
      description: 'Herramienta para evaluar la precisión y calidad de modelos de lenguaje en textos científicos.',
      image: '/logosIA/perplexity.webp',
    },
    {
      title: 'Semantic Scholar',
      description:
        'Motor de búsqueda que encuentra y organiza investigaciones científicas y artículos relevantes.',
      image: '/logosIA/semantic-scholar.webp',
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
