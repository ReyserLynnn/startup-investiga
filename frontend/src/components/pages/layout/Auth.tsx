/* eslint-disable import/no-named-as-default */
import { ChevronDown } from 'lucide-react';

import {
  Popover,
  PopoverTrigger,
} from '@/components/ui/popover';
import pb from '@/lib/pocketbase';
import { cookies } from 'next/headers';
import { use } from 'react';
import AuthLogin from './AuthLogin';
import AuthOptions from './AuthOptions';

const getUser = async () => {
  const cookieStore = cookies();

  const result = await pb.getUser(cookieStore);

  return result as any;
};

export function Auth() {
  const user = use(getUser());

  if (!user) {
    return (
      <AuthLogin />
    );
  }

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex gap-3 items-center hover:cursor-pointer">

            <ChevronDown className="w-5 h-5" />
          </div>
        </PopoverTrigger>

        <span className="text-lg font-medium text-center">
          {user?.username}
        </span>
      </Popover>
      <AuthOptions />
    </>
  );
}
