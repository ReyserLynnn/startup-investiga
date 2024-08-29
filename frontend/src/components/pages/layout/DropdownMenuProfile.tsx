import { User2 } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import pb from '@/lib/pocketbase';
import { getImageUrl } from '@/lib/utils';
import { cookies } from 'next/headers';
import { use } from 'react';
import AuthLogin from './AuthLogin';
import LogoutItem from './LogoutItem';
import OptionsDropdownProfile from './OptionsDropdownProfile';

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
  });

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
        <OptionsDropdownProfile />
        <DropdownMenuSeparator />
        <LogoutItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
