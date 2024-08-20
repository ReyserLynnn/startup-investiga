'use client';

import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { getMenuList } from '@/lib/menuList';
import { Button } from '@/components/ui/button';

export function Menu() {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <nav className="mt-5 h-full w-full">
      <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] items-start space-y-1 px-2">
        {menuList.map(({ groupLabel, menus }) => (
          <li className={`w-full ${groupLabel ? 'pt-5' : ''}`} key={groupLabel}>
            <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
              {groupLabel}
            </p>

            {menus.map(({
              href, label, icon: Icon, active,
            }) => (
              <div className="w-full" key={label}>
                <Button
                  variant={active ? 'link' : 'ghost'}
                  className="w-full justify-start h-10 mb-1"
                  asChild
                >
                  <Link href={href}>
                    <Icon size={18} className="mr-2" />
                    {label}
                  </Link>
                </Button>
              </div>
            ))}
          </li>
        ))}

        <li className="w-full grow flex items-end">
          <Button
            onClick={() => {}}
            variant="outline"
            className="w-full justify-center h-10 mb-5"
          >
            <LogOut size={18} className="mr-2" />
            Cerrar Sesión
          </Button>
        </li>
      </ul>
    </nav>
  );
}
