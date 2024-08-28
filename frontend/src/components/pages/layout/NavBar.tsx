import { buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { DropdownMenuProfile } from './DropdownMenuProfile';
import SideBarPhone from './SideBarPhone';
import Soporte from './Soporte';

export default function NavBar() {
  return (
    <header className="w-full container md:container mx-auto flex h-14 md:h-20 items-center px-4 md:px-6 md:border-none bg-white z-30">
      <SideBarPhone />

      <Link
        href="/"
        className=" flex w-40 md:w-48 md:px-0 px-3 mx-auto md:ml-0"
        prefetch={false}
      >
        <Image
          src="/logo.svg"
          width="0"
          height="0"
          alt="Logo de inveztiga"
          className=" w-full h-auto lg:ml-3"
          priority
        />
        <span className="sr-only">Inveztiga</span>
      </Link>

      <NavigationMenu className="hidden md:flex ml-auto ">
        <NavigationMenuList>
          <Link href="/" legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink
              className={cn(
                buttonVariants({ variant: 'linkHover2' }),
                navigationMenuTriggerStyle(),
              )}
            >
              Inicio
            </NavigationMenuLink>
          </Link>

          <Link href="/cursos" legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink
              className={cn(
                buttonVariants({ variant: 'linkHover2' }),
                navigationMenuTriggerStyle(),
              )}
            >
              Cursos
            </NavigationMenuLink>
          </Link>

          <Link href="/herramientas" legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink
              className={cn(
                buttonVariants({ variant: 'linkHover2' }),
                navigationMenuTriggerStyle(),
              )}
            >
              Herramientas
            </NavigationMenuLink>
          </Link>

          <Soporte />
        </NavigationMenuList>
      </NavigationMenu>

      <DropdownMenuProfile />
    </header>
  );
}
