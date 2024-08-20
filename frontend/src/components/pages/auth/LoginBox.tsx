import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginBox() {
  return (
    <div className="w-full flex flex-col gap-10 md:max-w-lg absolute bottom-0 md:right-8 min-h-[94vh] bg-background rounded-3xl px-8 py-16">
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
        <Link href="/register" className="flex flex-col text-sm">
          <span className="text-muted-foreground">
            ¿No tienes una cuenta ?
          </span>
          <span className="text-primary">
            Registrate
          </span>
        </Link>
      </header>
      <h1 className="font-medium text-4xl md:text-5xl text-center w-full">
        INICIO DE SESIÓN
      </h1>
      <button type="button" className="w-full rounded-lg bg-primary/20 text-primary-background py-4">
        Iniciar sesión con Google
      </button>
      <form action="" className="flex flex-col gap-8">
        <Label className="flex flex-col gap-2 font-normal text-base">
          <span>
            Ingresa tu correo electrónico
          </span>
          <Input type="text" placeholder="Correo electrónico" />
        </Label>
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
