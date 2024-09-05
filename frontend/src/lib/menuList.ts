import {
  House,
  LucideIcon,
  Mail,
  SquareChartGantt,
  TvMinimal,
  User,
  Wallet,
  Wrench,
} from 'lucide-react';

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/',
          label: 'Inicio',
          active: pathname === '/',
          icon: House,
        },
        {
          href: '/herramientas',
          label: 'Herramientas',
          active: pathname.includes('/herramientas'),
          icon: Wrench,
        },
      ],
    },
    {
      groupLabel: '',
      menus: [
        {
          href: '/cursos',
          label: 'Cursos',
          active: pathname.includes('/cursos'),
          icon: TvMinimal,
        },
        {
          href: '/herramientas',
          label: 'Herramientas',
          active: pathname.includes('/herramientas'),
          icon: SquareChartGantt,
        },
        {
          href: '/planes',
          label: 'Planes',
          active: pathname.includes('/planes'),
          icon: Wallet,
        },
      ],
    },

    {
      groupLabel: 'Soporte',
      menus: [
        {
          href: '/soporte',
          label: 'Soporte',
          active: pathname.includes('/soporte'),
          icon: Wrench,
        },
        {
          href: '/contacto',
          label: 'Contacto',
          active: pathname.includes('/contacto'),
          icon: Mail,
        },
      ],
    },
    {
      groupLabel: 'Configuración',
      menus: [
        {
          href: '/user',
          label: 'Mi perfil',
          active: pathname.includes('/user'),
          icon: User,
        },
        // {
        //   href: '/cuenta',
        //   label: 'Mi cuenta',
        //   active: pathname.includes('/account'),
        //   icon: Settings,
        // },
      ],
    },
  ];
}
