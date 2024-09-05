/* eslint-disable no-unused-vars */
enum PopularPlanType {
  NO = 0,
  YES = 1,
}

type PricingProps = {
  title: string;
  popular: PopularPlanType;
  price: string;
  href: string;
  description: string;
  buttonText: string;
  benefitList: string[];
};

export function getPlanesList(): PricingProps[] {
  return [
    {
      title: 'Gratuito',
      popular: 0,
      price: 'Gratis',
      href: '/login',
      description:
        'Accede a cursos básicos y herramientas esenciales sin costo.',
      buttonText: 'Comienza Gratis',
      benefitList: [
        'Acceso a cursos introductorios',
        'Ética e integridad de la IA en la investigación científica',
        'Actualizaciones regulares de contenido',
        'Búsqueda y comparación de herramientas de IA',
      ],
    },
    {
      title: 'Premium',
      popular: 1,
      price: '35',
      href: '/login',
      description:
        'Disfruta de acceso completo a todos los cursos y herramientas avanzadas para maximizar tu investigación.',
      buttonText: 'Únete al Plan Premium',
      benefitList: [
        'Acceso ilimitado a todos los cursos especializados en vivo y grabados',
        'Acceso completo a talleres y seminarios en línea',
        'Capacitación completa de herramientas de IA avanzadas',
        'Soporte prioritario y asistencia personalizada',
        'Contenido exclusivo y actualizaciones avanzadas',
      ],
    },
  ];
}
