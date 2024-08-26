import { Button } from '@/components/ui/button';
import { getUserData } from '@/lib/GetUserData';
import { getMenuList } from '@/lib/menuList';
import { deleteCookie } from 'cookies-next';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { RecordModel } from 'pocketbase';
import { useEffect, useState } from 'react';

export function SideBarOptions({
  setOpen,
}: {
  setOpen?: (value: boolean) => void;
}) {
  const [user, setUser] = useState<RecordModel | null>(null);
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  const router = useRouter();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const userData = await getUserData();
        setUser(userData);
      } catch (err) {
        console.error('Error al obtener los datos del usuario', err);
      }
    }

    fetchUserData();
  }, []);

  const onLogout = async () => {
    try {
      deleteCookie('pb_auth');
      localStorage.clear();
      router.refresh();
    } catch (err) {
      console.log('Error al cerrar sesión');
    }
  };

  return (
    <nav className="h-full w-full">
      <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] items-start space-y-1 px-2">
        {menuList.map(({ groupLabel, menus }, index) => (
          <li
            className={`w-full ${groupLabel ? 'pt-5' : ''}`}
            key={`${groupLabel}-${index}`}
          >
            {groupLabel && (
              <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                {groupLabel}
              </p>
            )}

            {menus.map(({ href, label, icon: Icon, active }) => (
              <div className="w-full">
                <Button
                  variant={active ? 'link' : 'ghost'}
                  className="w-full justify-start h-10 mb-1"
                  asChild
                  onClick={setOpen ? () => setOpen(false) : () => {}}
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

        {user && (
          <li className="w-full grow flex items-end">
            <Button
              onClick={() => {
                if (setOpen) setOpen(false);
                if (onLogout) onLogout();
              }}
              variant="outline"
              className="w-full justify-center h-10 mb-11 text-red-500 hover:text-red-700"
            >
              <LogOut size={18} className="mr-2" />
              Cerrar Sesión
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}
