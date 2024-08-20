type TeamProps = {
  imageUrl: string;
  name: string;
  position: string;
  presentation: string;
  socialNetworks: SociaNetworkslProps[];
};

type SociaNetworkslProps = {
  name: string;
  url: string;
};

export function getDocentesList(): TeamProps[] {
  return [
    {
      imageUrl: 'https://i.pravatar.cc/150?img=35',
      name: 'Emma Smith',
      position: 'Analista jefe de soporte de aplicaciones',
      presentation: 'Ex cofundador de Opendoor. Primeros empleados de Spotify y Clearbit.',
      socialNetworks: [
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/',
        },
        {
          name: 'Twitter',
          url: 'https://www.X.com/',
        },
      ],
    },
    {
      imageUrl: 'https://i.pravatar.cc/150?img=60',
      name: 'John Doe',
      position: 'Director de Análisis y Planificación de Pregrado',
      presentation: 'Liderar equipos de ingeniería en Figma, Pitch y Protocol Labs.',
      socialNetworks: [
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/',
        },
        {
          name: 'Twitter',
          url: 'https://www.X.com/',
        },
      ],
    },
    {
      imageUrl: 'https://i.pravatar.cc/150?img=36',
      name: 'Ashley Ross',
      position: 'Gerente de operaciones y programas de pasantías',
      presentation: 'Ex desarrollador de interfaz de usuario para Linear, Coinbase y Postscript.',
      socialNetworks: [
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/',
        },
        {
          name: 'Twitter',
          url: 'https://www.X.com/',
        },
      ],
    },
    {
      imageUrl: 'https://i.pravatar.cc/150?img=17',
      name: 'Bruce Rogers',
      position: 'Gerente de operaciones y programas de pasantías',
      presentation: 'Ex desarrollador de interfaz de usuario para Linear, Coinbase y Postscript.',
      socialNetworks: [
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/',
        },
        {
          name: 'Twitter',
          url: 'https://www.X.com/',
        },
      ],
    },
  ];
}
