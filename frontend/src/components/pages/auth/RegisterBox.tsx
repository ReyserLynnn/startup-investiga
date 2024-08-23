'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';
import RegisterForm from './registerForm';

export default function RegisterBox() {
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
      <RegisterForm />
    </div>
  );
}
