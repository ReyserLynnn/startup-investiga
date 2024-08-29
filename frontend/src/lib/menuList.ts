import {
  House,
  LucideIcon,
  Mail,
  Settings,
  TvMinimal,
  User,
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
      ],
    },
    {
      groupLabel: 'Soporte',
      menus: [
        {
          href: '/soporte',
          label: 'Soporte',
          active: pathname.includes('/soporte#quienes-somos'),
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
          href: '/perfil',
          label: 'Mi perfil',
          active: pathname.includes('/user'),
          icon: User,
        },
        {
          href: '/cuenta',
          label: 'Mi cuenta',
          active: pathname.includes('/account'),
          icon: Settings,
        },
      ],
    },
  ];
}
