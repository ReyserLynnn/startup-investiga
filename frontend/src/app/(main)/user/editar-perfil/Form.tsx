/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { sendFormEditProfile } from '@/lib/actions/editProfile_Action';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { ComboboxDegrees } from '@/components/pages/auth/ComboboxDegrees';
import { ComboboxInstitutions } from '@/components/pages/auth/ComboboxInstitutions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { getPhoneData, PhoneInput } from '@/components/ui/phone-input';
import { Textarea } from '@/components/ui/textarea';
import { EditProfileFormSchema } from '@/lib/schemas/edit-profile';
import { getImageUrl } from '@/lib/utils';
import { Users } from '@/types/user';
import { User2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  user: Users;
}

type Inputs = z.infer<typeof EditProfileFormSchema>;

export default function RhfWithAction({ user }: Props) {
  const route = useRouter();
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [data, setData] = useState<Inputs>();

  const avatarUrl = getImageUrl({
    url: user.avatar,
    collectionId: user.collectionId,
    id: user.id,
  }) as string;

  const form = useForm<Inputs>({
    resolver: zodResolver(EditProfileFormSchema),
    defaultValues: {
      username: user.username,
      name: user.name,
      lastname: user.lastname,
      bio: user.bio,
      phone: user.phone,
      institution: user.institution,
      degree: user.degree,
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const processForm: SubmitHandler<Inputs> = async (dataForm) => {
    const phoneData = getPhoneData(dataForm.phone);

    if (!phoneData.isValid) {
      console.log(phoneData);
      form.setError('phone', {
        type: 'manual',
        message: 'Número de teléfono inválido',
      });
      return;
    }

    const result = await sendFormEditProfile(dataForm);

    if (!result) {
      console.log('Algo salió mal');
      return;
    }

    if (result.error) {
      console.log(result.error);
      return;
    }

    reset();
    setData(result.data);
    route.refresh();
  };

  return (
    <section className="flex flex-col gap-4 items-center justify-center">
      <Avatar className="size-36 cursor-pointer ring-offset-2 ring-2 ring-slate-200">
        <AvatarImage src={avatarUrl} alt="Reyser" />
        <AvatarFallback>
          <User2 size="45" />
        </AvatarFallback>
      </Avatar>

      <Form {...form}>
        <form
          onSubmit={handleSubmit(processForm)}
          className="flex flex-1 flex-col gap-4 sm:w-1/2"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombres</FormLabel>
                <FormControl>
                  <Input placeholder="Ingresa tus nombres" {...field} />
                </FormControl>
                <FormMessage>{errors.name?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellidos</FormLabel>
                <FormControl>
                  <Input placeholder="Ingresa tus apellidos" {...field} />
                </FormControl>
                <FormMessage>{errors.lastname?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <PhoneInput {...field} />
                </FormControl>
                <FormMessage>{errors.phone?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Biografía</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Cuéntanos un poco sobre ti"
                    className="overflow-y-hidden resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{errors.bio?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="institution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Institución</FormLabel>
                <FormControl>
                  <ComboboxInstitutions
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                </FormControl>
                <FormMessage>{errors.institution?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="degree"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grado académico</FormLabel>
                <FormControl>
                  <ComboboxDegrees
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                </FormControl>
                <FormMessage>{errors.degree?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de usuario</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingresa un nombre de usuario"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{errors.username?.message}</FormMessage>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="self-center w-36 rounded-xl hover:bg-secondary"
          >
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}
