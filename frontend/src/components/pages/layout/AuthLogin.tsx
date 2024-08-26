'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AuthLogin() {
  return (
    <div className=" flex justify-end  gap-2 md:ml-3">
      <Button variant="linkHover2" asChild className="hidden md:flex">
        <Link href="/login">Iniciar Sesión</Link>
      </Button>

      <Button variant="shine" asChild className="hidden md:flex">
        <Link href="/register">Crear una cuenta</Link>
      </Button>

      <Button variant="shine" asChild className="flex md:hidden">
        <Link href="/login">Unirme</Link>
      </Button>
    </div>
  );
}
