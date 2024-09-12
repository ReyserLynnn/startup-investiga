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
// heramientas 100 200
// curso 30 50

export function getPlanesListTools(): PricingProps[] {
  return [
    {
      title: 'Estándar',
      popular: 0,
      price: '100',
      href: '/login',
      description:
        'El plan ideal para usuarios que buscan una solución básica pero efectiva.',
      buttonText: 'Únete al Plan Estándar',
      benefitList: [
        'Verificación',
        'Listado genérico',
        'Estadísticas de tráfico',
      ],
    },
    {
      title: 'Premium',
      popular: 1,
      price: '200',
      href: '/login',
      description:
        'Para quienes buscan una exposición mayor y beneficios exclusivos.',
      buttonText: 'Únete al Plan Premium',
      benefitList: [
        'Verificación',
        'Listado privilegiado',
        'Estadística de tráfico',
        'Patrocinio de boletín informativo',
      ],
    },
  ];
}

export function getPlanesListCourses(): PricingProps[] {
  return [
    {
      title: 'Estándar',
      popular: 0,
      price: '30',
      href: '/login',
      description:
        'El plan ideal para usuarios que buscan una solución básica pero efectiva.',
      buttonText: 'Únete al Plan Estándar',
      benefitList: [
        'Verificación',
        'Listado genérico',
        'Estadísticas de tráfico',
      ],
    },
    {
      title: 'Premium',
      popular: 1,
      price: '50',
      href: '/login',
      description:
        'Para quienes buscan una exposición mayor y beneficios exclusivos.',
      buttonText: 'Únete al Plan Premium',
      benefitList: [
        'Verificación',
        'Listado privilegiado',
        'Estadística de tráfico',
        'Patrocinio de boletín informativo',
      ],
    },
  ];
}
