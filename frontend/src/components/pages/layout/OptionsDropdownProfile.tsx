'use client';

import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { BadgePercent, Library, LifeBuoy, Settings, User2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OptionsDropdownProfile() {
  const router = useRouter();

  return (
    <>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User2 className="mr-2 h-4 w-4" />
          <span>Mi perfil</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push(`/mis-cursos`)}>
          <Library className="mr-2 h-4 w-4" />
          <span>Mis Cursos</span>
        </DropdownMenuItem>
        {/* <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Mi Cartera</span>
          </DropdownMenuItem> */}
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Configuración</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LifeBuoy className="mr-2 h-4 w-4" />
        <span>Soporte</span>
      </DropdownMenuItem>
      <DropdownMenuItem disabled>
        <BadgePercent className="mr-2 h-4 w-4" />
        <span>Planes</span>
      </DropdownMenuItem>
    </>
  );
}
