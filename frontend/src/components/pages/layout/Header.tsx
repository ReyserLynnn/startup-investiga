import Link from 'next/link';
import { CustomLink } from '@/components/ui/CustomLink';
import Soporte from './Soporte';
import { Auth } from './Auth';
import NavBarMobile from './NavBarMobile';

export default function Header() {
  return (
    <header className="flex px-6 py-3 w-full items-center justify-center">
      <div className="flex justify-between items-center w-full max-w-6xl">
        <Link href="/">
          <img src="/logo.svg" alt="logo" className="w-40" />
        </Link>
        <nav className="gap-2 items-center hidden md:flex">
          <CustomLink href="/" variant="ghost">
            Inicio
          </CustomLink>
          <CustomLink href="/cursos" variant="ghost">
            Cursos
          </CustomLink>
          <Soporte />
          <Auth />
        </nav>
        <NavBarMobile />
      </div>
    </header>
  );
}
