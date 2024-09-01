import Link from 'next/link';
import FacebookIcon from '../icons/FacebookIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import TwitterIcon from '../icons/TwitterIcon';

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

export default function FooterBlog() {
  return (
    <footer className=" w-full border-section flex justify-center items-start mt-36 ">
      <div className="w-full mb-10 flex flex-col gap-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-x-10 gap-y-10 w-full">
          <div className="w-full flex flex-col items-center lg:items-start justify-start gap-6">
            <img src="/logo.svg" alt="logo" className="w-full max-w-56" />
            <span className="font-light">
              Impulsando la investigación con educación innovadora y conexiones
              globales.
            </span>
          </div>

          <div className="w-full max-w-3xl flex justify-between items-start col-span-1 lg:col-span-2 flex-col lg:flex-row lg:justify-self-end justify-self-center">
            {NAVLINKS.map(({ links, text, href }) => {
              if (links) {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className="flex flex-col gap-3 border-b-[1px] lg:border-b-0 border-web-gray-300 py-4 w-full lg:w-auto"
                  >
                    <Link
                      href={href}
                      className="font-bold text-primary-title text-md"
                    >
                      {text}
                    </Link>
                    <div className="flex flex-col text-lg gap-2 w-full">
                      {links.map(({ name: subName, path: subPath }) => (
                        <Link
                          href={subPath}
                          key={crypto.randomUUID()}
                          className="flex items-start text-start hover:underline min-w-fit text-sm sm:text-base"
                        >
                          {subName}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="flex w-full items-center justify-between text-sm">
          <span>© 2024 Investiga, All rights reserved.</span>
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
