'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import GoogleButton from '@/components/pages/auth/GoogleButton';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordField, passwordSchema } from '@/components/ui/PasswordField';
import 'animate.css';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const formSchema = z.object({
  email: z
    .string()
    .email({
      message: 'El correo electónico no es válido',
    })
    .min(5, {
      message: 'El correo electrónico debe tener al menos 5 caracteres.',
    })
    .max(50, {
      message: 'El correo electrónico no puede tener más de 50 caracteres.',
    }),
  password: passwordSchema,
});

export default function LoginPage() {
  const route = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email, password } = values;

    try {
      setLoading(true);
      const form = { email, password };
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        setError('Correo o contraseña incorrecto. Vuelva a intentarlo');
        return;
      }

      route.replace('/');
      route.refresh();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="loginPage" className="bg-white h-screen w-screen">
      <div className="container mx-auto flex items-center justify-center h-screen px-6">
        <div className="flex min-w-full justify-center items-center">
          <div className="hidden md:block w-[456px] mx-auto mr-[144px]">
            <Image
              src="/undraw/education.svg"
              width="0"
              height="0"
              className="w-full h-auto hidden md:block"
              alt="chica investigando"
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-center px-4 py-6 mx-auto max-w-md animate__animated animate__fadeInRight">
            <Link href="/" className=" hidden md:flex" prefetch={false}>
              <Image
                src="logo.svg"
                width="0"
                height="0"
                alt="Logo de inveztiga"
                className="lg:w-50 w-full h-auto mb-8"
              />
              <span className="sr-only">Inveztiga</span>
            </Link>

            <h3 className="text-2xl font-semibold mb-6">
              Bienvenido de nuevo 👋
            </h3>
            <p className="text-muted-foreground text-justify mb-10">
              Inicia sesión y explora nuevas fronteras en la investigación
              científica.
            </p>

            {error && <p className=" text-sm pb-3 text-red-600">{error}</p>}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input placeholder="Example@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <PasswordField />

                <div className="flex justify-end mt-1">
                  <Link
                    className={`${buttonVariants({
                      variant: 'link',
                    })} text-sm text-link`}
                    href="/forgotpassword"
                  >
                    ¿Olvidate tu contraseña?
                  </Link>
                </div>

                {loading ? (
                  <Button disabled className="w-full mt-4">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Cargando...
                  </Button>
                ) : (
                  <Button type="submit" className="w-full mt-4">
                    Iniciar sesión
                  </Button>
                )}
              </form>
            </Form>

            <li className="flex relative flex-col items-center py-8 w-full">
              <p className="text-center px-2 bg-white z-10 text-sm"> O </p>
              <div className="absolute top-[42px] left-122 min-w-full h-px bg-gradient-to-r from-transparent via-sky-600/40 via-10% to-sky-600/5" />
            </li>

            <GoogleButton classname="w-full" />

            <div className="w-full flex justify-end mt-10 ">
              <Link
                className={`${buttonVariants({
                  variant: 'ghost',
                })} px-0 text-sm hover:no-underline hover:bg-transparent`}
                href="/register "
              >
                ¿No tienes una cuenta?
              </Link>

              <Link
                className={`${buttonVariants({
                  variant: 'link',
                })} text-sm`}
                href="/register "
              >
                Registrate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
