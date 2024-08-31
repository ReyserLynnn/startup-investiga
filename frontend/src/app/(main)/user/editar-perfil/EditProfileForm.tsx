/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { sendFormEditProfile } from '@/lib/actions/editProfile_Action';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { ComboboxDegrees } from '@/components/pages/auth/ComboboxDegrees';
import { ComboboxInstitutions } from '@/components/pages/auth/ComboboxInstitutions';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import AvatarUpload from '@/components/pages/user/AvatarUpload';
import { InputBlock } from '@/components/ui/InputBlock';
import { getPhoneData, PhoneInput } from '@/components/ui/phone-input';
import { Textarea } from '@/components/ui/textarea';
import pb from '@/lib/pocketbase';
import { EditProfileSchema } from '@/lib/schemas/EditProfileSchema';
import { Users, UsersFields } from '@/types/user';
import { Loader2, SendHorizonal } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface Props {
  user: Users;
}

type FormSchema = z.infer<typeof EditProfileSchema>;

export default function EditProfileForm({ user }: Props) {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      username: user.username,
      name: user.name,
      lastname: user.lastname,
      bio: user.bio,
      phone: user.phone,
      institution: user.institution,
      degree: user.degree,
      id: user[UsersFields.ID],
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<FormSchema> = async (dataForm) => {
    const phoneData = getPhoneData(dataForm.phone);

    if (!phoneData.isValid) {
      form.setError('phone', {
        type: 'manual',
        message: 'Número de teléfono inválido',
      });
      return;
    }
    setLoading(true);

    const { avatar, ...userForm } = dataForm;

    try {
      if (avatar) {
        const formAvatar = new FormData();
        formAvatar.append('avatar', avatar);
        formAvatar.append('id', dataForm.id);

        await pb.client.collection('users').update(dataForm.id, formAvatar);
      }

      const resultForm = await sendFormEditProfile(userForm);

      if (!resultForm) {
        toast.error('Hubo un error al editar el perfil, intentelo de nuevo');
        return;
      }

      toast.success('Perfil editado exitosamente');
    } catch (error) {
      toast.error('Hubo un error al editar el perfil, intentelo de nuevo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center mt-10">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-1 flex-col gap-5 w-full lg:w-2/3"
        >
          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <AvatarUpload
                    user={user}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombres</FormLabel>
                <FormControl>
                  <InputBlock
                    root={{ variant: 'underlined', size: 'sm' }}
                    placeholder="Ingresa tus nombres"
                    {...field}
                  />
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
                  <InputBlock
                    root={{ variant: 'underlined', size: 'sm' }}
                    placeholder="Ingresa tus apellidos"
                    {...field}
                  />
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de usuario</FormLabel>
                <FormControl>
                  <InputBlock
                    root={{ variant: 'underlined', size: 'sm' }}
                    placeholder="Ingresa un nombre de usuario"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{errors.username?.message}</FormMessage>
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

          <Button
            type="submit"
            className="self-center w-36 rounded-xl bg-primary gap-2 hover:bg-[#161439] mt-10"
            disabled={loading}
          >
            Guardar
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <SendHorizonal size="18" />
            )}
          </Button>
        </form>
      </Form>
    </section>
  );
}
