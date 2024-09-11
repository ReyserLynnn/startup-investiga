import Image from 'next/image';
import Link from 'next/link';

import { DropdownMenuProfile } from './DropdownMenuProfile';
import NavBarOptions from './NavBarOptions';
import SideBarPhone from './SideBarPhone';

export default function NavBar() {
  return (
    <header className="w-full bg-white drop-shadow-sm z-50">
      <div className="w-full container md:container mx-auto flex h-14 md:h-16 items-center px-4 md:px-6 bg-white">
        <SideBarPhone />

        <Link
          href="/"
          className=" flex w-40 md:w-48 md:px-0 px-3 mx-auto md:ml-0 transition-all duration-300 hover:scale-105 hover:rotate-2"
          prefetch={false}
        >
          <Image
            src="/logo.svg"
            width="0"
            height="0"
            alt="Logo de investiga"
            className=" w-full h-auto lg:ml-3"
            priority
          />
          <span className="sr-only">Investiga</span>
        </Link>

        <NavBarOptions />

        <DropdownMenuProfile />
      </div>
    </header>
  );
}
