/* eslint-disable no-unused-vars */
enum PopularPlanType {
  NO = 0,
  YES = 1,
}

type PricingProps = {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
};

export function getPlanesList(): PricingProps[] {
  return [
    {
      title: 'Básico',
      popular: 0,
      price: 0,
      description: 'Acceso gratuito a cursos básicos y recursos limitados.',
      buttonText: 'Empieza Ahora',
      benefitList: [
        '1 Usuario',
        'Acceso a cursos introductorios',
        '5 horas de contenido en vivo al mes',
        'Soporte comunitario',
        'Actualizaciones básicas',
      ],
    },
    {
      title: 'Avanzado',
      popular: 1,
      price: 15,
      description: 'Acceso a cursos avanzados y recursos exclusivos.',
      buttonText: 'Prueba Gratis',
      benefitList: [
        '5 Usuarios',
        'Acceso completo a todos los cursos',
        '20 horas de contenido en vivo al mes',
        'Soporte prioritario',
        'Material adicional exclusivo',
      ],
    },
    {
      title: 'Premium',
      popular: 0,
      price: 40,
      description: 'Acceso ilimitado a todos los cursos y recursos premium.',
      buttonText: 'Contáctanos',
      benefitList: [
        'Usuarios ilimitados',
        'Acceso completo a cursos y talleres',
        'Acceso a sesiones en vivo ilimitadas',
        'Soporte dedicado',
        'Consultas y asesorías personalizadas',
      ],
    },
  ];
}
