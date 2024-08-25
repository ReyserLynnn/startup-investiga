import { Button, buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

import { cn } from '@/lib/utils';
import { Auth } from './Auth';
import { Menu } from './Menu';
import Soporte from './Soporte';

export default function NavBar() {
  return (
    <header className="container mx-auto flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger className="md:hidden" asChild>
          <Button className="h-8" variant="outline" size="icon">
            <MenuIcon size={20} />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="sm:w-72 px-3 h-full flex flex-col">
          <SheetHeader className="mt-8">
            <Button
              className="flex justify-center items-center pb-2 pt-1"
              variant="link"
              asChild
            >
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="logo.svg"
                  width={180}
                  height={500}
                  alt="Logo de inveztiga"
                />
                <span className="sr-only">Inveztiga</span>
              </Link>
            </Button>
          </SheetHeader>

          <Menu />
        </SheetContent>
      </Sheet>

      <Link href="/" className=" hidden md:flex " prefetch={false}>
        <Image
          src="logo.svg"
          width="0"
          height="0"
          alt="Logo de inveztiga"
          className="lg:w-48 w-full h-auto lg:ml-3"
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

      <Auth />
    </header>
  );
}
