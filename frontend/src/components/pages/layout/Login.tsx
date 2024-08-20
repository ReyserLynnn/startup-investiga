'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Login() {
  return (
    <div className="justify-end flex gap-2 ml-auto md:ml-3">
      <Button variant="ghost" className="hover:bg-secondary hover:text-primary-foreground">
        <Link href="/login">Iniciar Sesión</Link>
      </Button>

      <Button>
        <Link href="/register">Crear una cuenta</Link>
      </Button>
    </div>
  );
}
