'use client';

import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { deleteCookie } from 'cookies-next';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LogoutItem() {
  const router = useRouter();
  const onLogout = async () => {
    try {
      deleteCookie('pb_auth');
      localStorage.clear();
      router.refresh();
    } catch (err) {
      throw new Error('error al intentar cerrar la sesión');
    }
  };

  return (
    <DropdownMenuItem
      onClick={onLogout}
      className="relative cursor-pointer flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors  disabled:pointer-events-none disabled:opacity-50 text-red-500 hover:text-red-700"
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Cerrar Sesión</span>
    </DropdownMenuItem>
  );
}
