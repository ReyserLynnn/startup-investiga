import Link from 'next/link';
import {
  NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export default function Soporte() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Soporte</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[200px] p-2">
          <Link href="/soporte" legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Soporte
            </NavigationMenuLink>
          </Link>

          <Link href="/soporte#quienes-somos" legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              ¿Quienes somos?
            </NavigationMenuLink>
          </Link>

          <Link href="/contacto" legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contacto
            </NavigationMenuLink>
          </Link>

          <Link href="/soporte#faq" legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              FAQ&apos;s
            </NavigationMenuLink>
          </Link>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>

  );
}
