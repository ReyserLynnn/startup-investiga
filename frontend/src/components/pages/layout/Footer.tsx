'use client';

import FacebookIcon from '@/components/icons/FacebookIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import Link from 'next/link';

const NAVLINKS = [
  {
    href: '/',
    text: 'Inicio',
    links: [
      {
        name: 'Inicio',
        path: '/',
      },
      {
        name: 'Cursos',
        path: '/#cursos',
      },
      {
        name: 'Docentes',
        path: '/#docentes',
      },
    ],
  },
  {
    href: '/soporte',
    text: 'Soporte',
    links: [
      {
        name: '¿Quienes somos?',
        path: '/quienes-somos',
      },
      {
        name: 'Contactanos',
        path: '/contactanos',
      },
      {
        name: "FAQ'S",
        path: 'faqs',
      },
    ],
  },
  {
    href: '/',
    text: 'Social',
    links: [
      {
        name: 'Facebook',
        path: '/',
      },
      {
        name: 'Linkedin',
        path: '/',
      },
      {
        name: 'Twitter',
        path: '/',
      },
    ],
  },
  {
    href: '/login',
    text: 'Unete',
    links: [
      {
        name: 'Iniciar sesión',
        path: '/login',
      },
      {
        name: 'Registrarse',
        path: '/register',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-section pt-10 flex justify-center items-start bg-slate-900">
      <div className="w-full max-w-[100rem] mb-10 px-6 flex flex-col gap-16 text-primary-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-x-10 gap-y-14 w-full">
          <div className="w-full flex flex-col items-start justify-start max-w-sm gap-6">
            <img src="/logo.svg" alt="logo" className="w-full max-w-64" />
            <div>
              Impulsando la investigación con educación innovadora y conexiones globales.
            </div>
          </div>
          <div className="w-full max-w-3xl flex justify-between items-start col-span-1 lg:col-span-2 flex-col lg:flex-row lg:justify-self-end justify-self-center">
            {
          NAVLINKS.map(({ links, text, href }) => {
            if (links) {
              return (
                <div key={crypto.randomUUID()} className="flex flex-col gap-3 border-b-[1px] lg:border-b-0 border-web-gray-300 py-4 w-full lg:w-auto">
                  <Link
                    href={href}
                    className="font-bold text-primary-title text-md text-muted-foreground"
                  >
                    {text}
                  </Link>
                  <div className="flex flex-col text-lg gap-2 w-full">
                    {
                  links.map(({ name: subName, path: subPath }) => (
                    <Link
                      href={subPath}
                      key={crypto.randomUUID()}
                      className="flex items-start text-start hover:underline min-w-fit"
                    >
                      {subName}
                    </Link>
                  ))
                }
                  </div>
                </div>
              );
            }
            return null;
          })
        }
          </div>
        </div>
        <div className="flex w-full items-center justify-between text-muted text-sm">
          <span>
            © 2024 Investiga, All rights reserved.
          </span>
          <div className="flex gap-4">
            <Link href="/" className="">
              <FacebookIcon className="w-7 h-7" />
            </Link>
            <Link href="/">
              <LinkedinIcon className="w-7 h-7" />
            </Link>
            <Link href="/">
              <TwitterIcon className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
