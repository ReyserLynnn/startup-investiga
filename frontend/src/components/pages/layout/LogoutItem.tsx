'use client';

import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { deleteCookie } from 'cookies-next';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LogoutItem() {
  const router = useRouter();
  const [error, setError] = useState('');
  const onLogout = async () => {
    try {
      deleteCookie('pb_auth');
      localStorage.clear();
      router.refresh();
    } catch (err) {
      setError('Failed to log out');
    }
  };

  return (
    <>
      <DropdownMenuItem
        onClick={onLogout}
        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 text-red-500 hover:text-red-700"
      >
        <LogOut className="mr-2 h-4 w-4" />
        <span>Cerrar Sesión</span>
      </DropdownMenuItem>
    </>
  );
}
