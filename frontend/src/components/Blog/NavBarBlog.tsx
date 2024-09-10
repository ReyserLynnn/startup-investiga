import Image from 'next/image';
import Link from 'next/link';
import SideBarPhone from '../pages/layout/SideBarPhone';
import AuthLinks from './AuthLinks';

export default function NavBarBlog() {
  return (
    <header className="flex items-center justify-between h-24">
      <Link
        href="/"
        className="flex transition-all duration-300 hover:scale-105 hover:-rotate-2"
        prefetch={false}
      >
        <Image
          src="/logo.svg"
          width="0"
          height="0"
          alt="Logo de investiga"
          className="w-36 md:w-48 h-full"
          priority
        />
        <span className="sr-only">Investiga</span>
      </Link>

      <div className="hidden md:flex flex-1 justify-end items-center gap-4 lg:gap-5">
        <Link href="/">Inicio</Link>
        <Link href="/">Cursos</Link>
        <Link href="/">Conócenos</Link>
        <AuthLinks />
      </div>

      <SideBarPhone />
    </header>
  );
}
