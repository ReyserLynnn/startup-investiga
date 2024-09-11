import { buttonVariants } from '@/components/ui/button';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Anuncia() {
  const pathname = usePathname();

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          pathname === '/soporte' || pathname === '/contacto'
            ? 'text-primary'
            : '',
          'hidden lg:flex',
        )}
      >
        Anuncia
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[250px] p-2">
          <Link href="/anuncia/curso" legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink
              className={cn(
                buttonVariants({ variant: 'linkHover2' }),
                navigationMenuTriggerStyle(),
              )}
            >
              Anuncia un curso
            </NavigationMenuLink>
          </Link>

          <Link
            href="/anuncia/herramienta"
            legacyBehavior
            passHref
            prefetch={false}
          >
            <NavigationMenuLink
              className={cn(
                buttonVariants({ variant: 'linkHover2' }),
                navigationMenuTriggerStyle(),
              )}
            >
              Anuncia una herramienta
            </NavigationMenuLink>
          </Link>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
