import { BadgePercent, Library, LifeBuoy, Settings, User2 } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import pb from '@/lib/pocketbase';
import { cookies } from 'next/headers';
import { use } from 'react';
import { POCKET_BASE_URL } from '@/config/global';
import AuthLogin from './AuthLogin';
import LogoutItem from './LogoutItem';
import { getImageUrl } from '@/lib/utils';

const getUser = async () => {
  const cookieStore = cookies();

  const result = await pb.getUser(cookieStore);

  return result as any;
};

export function DropdownMenuProfile() {
  const user = use(getUser());

  if (!user) {
    return <AuthLogin />;
  }

  const avatarUrl = getImageUrl({
    collectionId: user.collectionId,
    id: user.id,
    url: user.avatar,
  })

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Avatar className="hover:cursor-pointer md:ml-3">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>
            <User2 />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>{user?.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User2 className="mr-2 h-4 w-4" />
            <span>Mi perfil</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
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
        <DropdownMenuSeparator />
        <LogoutItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
