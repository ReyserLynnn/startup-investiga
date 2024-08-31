'use client';

import { buttonVariants } from '@/components/ui/button';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/user/editar-perfil', text: 'Editar perfil' },
  // { href: '/user/editar-cuenta', text: 'Seguridad de la cuenta' },
  // { href: '/user/administrar-membresia', text: 'Membresía' },
  // { href: '/user/editar-metodos-de-pago', text: 'Métodos de pago' },
  // { href: '/user/editar-notificaciones', text: 'Notificaciones' },
  // { href: '/user/editar-privacidad', text: 'Privacidad' },
  // { href: '/user/cerrar-cuenta', text: 'Cerrar cuenta' },
];

export default function SideBarUser() {
  const pathname = usePathname();

  return (
    <section className="w-full h-full px-4 mt-5">
      <div className="flex flex-col gap-4">
        <span className="font-semibold text-2xl text-center">Mi cuenta</span>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex gap-1 text-sm items-start lg:justify-center place-items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                navigationMenuTriggerStyle(),
                pathname === link.href
                  ? cn(
                      buttonVariants({ variant: 'linkHover1' }),
                      'text-primary font-medium hover:after:scale-x-100',
                    )
                  : cn(
                      buttonVariants({ variant: 'linkHover2' }),
                      'font-normal text-sm ',
                    ),
              )}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
