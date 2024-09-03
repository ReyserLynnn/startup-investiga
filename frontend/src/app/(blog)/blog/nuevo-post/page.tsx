'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useState } from 'react';

export default function NuevoPostBlogPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col text-black">
      <Input placeholder="Título" type="text" />
      <div className="flex gap-5 h-[700px] relative">
        <Button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-full bg-transparent border flex items-center justify-center p-0 "
        >
          <Image src="/blog/plus.png" alt="" width={16} height={16} />
        </Button>

        {open && (
          <div className="flex gap-7 absolute z-50 w-full left-[50px] ">
            <Button
              onClick={() => setOpen(!open)}
              className="w-9 h-9 rounded-full bg-transparent border flex items-center justify-center border-green-500 p-0"
            >
              <Image src="/blog/image.png" alt="" width={16} height={16} />
            </Button>
            <Button
              onClick={() => setOpen(!open)}
              className="w-9 h-9 rounded-full bg-transparent border flex items-center justify-center border-green-500 p-0"
            >
              <Image src="/blog/external.png" alt="" width={16} height={16} />
            </Button>
            <Button
              onClick={() => setOpen(!open)}
              className="w-9 h-9 rounded-full bg-transparent border flex items-center justify-center border-green-500 p-0"
            >
              <Image src="/blog/video.png" alt="" width={16} height={16} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
