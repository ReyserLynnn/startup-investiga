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
        'Uso limitado de herramientas de IA',
        'Actualizaciones regulares de contenido',
      ],
    },
    {
      title: 'Premium',
      popular: 1,
      price: '10',
      href: '/login',
      description:
        'Disfruta de acceso completo a todos los cursos y herramientas avanzadas para maximizar tu investigación.',
      buttonText: 'Únete al Plan Premium',
      benefitList: [
        'Acceso ilimitado a todos los cursos',
        'Uso completo de herramientas de IA avanzadas',
        'Soporte prioritario y asistencia personalizada',
        'Contenidos exclusivos y actualizaciones avanzadas',
      ],
    },
  ];
}
