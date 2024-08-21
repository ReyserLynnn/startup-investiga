'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { z } from 'zod';
import { signIn } from 'next-auth/react';

export default function RegisterBox() {
  const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const username = formData.get('username') as string;
    const phone = formData.get('phone') as string;

    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
      username: z.string().min(3),
      phone: z.string().length(9),
    });

    const { success, data } = schema.safeParse({
      email,
      password,
      username,
      phone,
    });

    if (success) {
      fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if (res.ok) {
          signIn('credentials', { email, password, callbackUrl: '/' });
        }
      }).catch((err) => {
        console.error(err);
      });
    }
  };

  return (
    <div className="w-full flex flex-col gap-10 md:max-w-lg absolute bottom-0 md:right-8 h-full max-h-[55rem] bg-background rounded-t-3xl px-8 py-16 shadow-all">
      <header className="w-full flex justify-between items-start">
        <span className="text-xl">
          <span>
            Bienvenido a
            {' '}
          </span>
          <span className="font-semibold text-primary">
            INVEZTIGA
          </span>
        </span>
        <Link href="/login" className="flex flex-col text-sm">
          <span className="text-muted-foreground">
            ¿Ya tienes una cuenta ?
          </span>
          <span className="text-primary">
            Iniciar Sesión
          </span>
        </Link>
      </header>
      <h1 className="font-medium text-4xl md:text-5xl text-center w-full">
        REGISTRO
      </h1>
      <button
        onClick={() => signIn('google')}
        type="button"
        className="w-full rounded-lg bg-primary/20 text-primary-background py-4"
      >
        Iniciar sesión con Google
      </button>
      <form onSubmit={handleSubmitRegister} className="flex flex-col gap-8">
        <Label className="flex flex-col gap-2 font-normal text-base">
          <span>
            Ingresa tu correo electrónico
          </span>
          <Input type="text" placeholder="Correo electrónico" />
        </Label>
        <div className="flex gap-8">
          <Label className="w-full">
            <span>Nombre de usuario</span>
            <Input type="text" placeholder="Nombre" />
          </Label>
          <Label className="w-full">
            <span>Teléfono</span>
            <Input type="text" placeholder="Teléfono" />
          </Label>
        </div>
        <Label className="flex flex-col gap-2 font-normal text-base">
          <span>
            Ingresa tu contraseña
          </span>
          <Input type="password" placeholder="Contraseña" />
        </Label>
        <Button type="submit" size="lg" variant="secondary">
          Iniciar sesión
        </Button>
      </form>
    </div>
  );
}
