'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { Users } from '@/types/user';
import { User2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  user: Users;
  avatarUrl: string;
}

export default function AvatarDropdownProfile({ user, avatarUrl }: Props) {
  const router = useRouter();
  return (
    <div className="flex items-center my-2">
      <Avatar
        className="hover:cursor-pointer md:ml-3 h-auto"
        onClick={() => router.push('/mi-perfil')}
      >
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>
          <User2 />
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <DropdownMenuLabel
          className="pb-0 cursor-pointer"
          onClick={() => router.push('/mi-perfil')}
        >
          {user?.username}
        </DropdownMenuLabel>
        <DropdownMenuLabel className="pt-0 font-light text-xs pb-1">
          {user?.email}
        </DropdownMenuLabel>
      </div>
    </div>
  );
}
