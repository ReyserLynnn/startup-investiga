/* eslint-disable no-unused-vars */

'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getImageUrl } from '@/lib/utils';
import { Users } from '@/types/user';
import { PencilIcon, User2Icon } from 'lucide-react';
import React from 'react';

interface Props {
  user: Users;
  value?: File;
  onChange?: (file?: File) => void;
}

export default function AvatarUpload({ value, onChange, user }: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      onChange?.(file);
    }
  };

  const avatarUrl = getImageUrl({
    url: user.avatar,
    collectionId: user.collectionId,
    id: user.id,
  }) as string;

  const displayUrl = value ? URL.createObjectURL(value) : avatarUrl;

  return (
    <div className="relative flex justify-center items-center">
      <div className="relative size-36">
        <Avatar className="w-full h-full ring-offset-2 ring-2 ring-slate-200">
          <AvatarImage src={displayUrl} className="object-cover" />
          <AvatarFallback className="bg-secondary">
            <User2Icon className="w-16 h-16" />
          </AvatarFallback>
        </Avatar>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full p-1 bg-secondary-foreground/90 hover:bg-secondary-foreground absolute bottom-0 right-0"
          onClick={(e) => {
            e.preventDefault();
            inputRef.current?.click();
          }}
        >
          <PencilIcon className="w-4 h-4 text-black" />
        </Button>
        <Input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleChange}
          accept="image/*"
        />
      </div>
    </div>
  );
}
