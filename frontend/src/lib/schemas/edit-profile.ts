import { z } from 'zod';

export const EditProfileFormSchema = z.object({
  username: z.string().max(35, { message: 'Máximo 35 caracteres' }),

  name: z.string().max(35, { message: 'Máximo 35 caracteres' }),

  lastname: z.string().max(35, { message: 'Máximo 35 caracteres' }),

  bio: z.string().max(200, {
    message: 'La biografía no puede tener más de 200 caracteres.',
  }),

  phone: z.string(),

  institution: z
    .string()
    .min(1, { message: 'Debe seleccionar una institución.' }),

  degree: z
    .string()
    .min(1, { message: 'Debe seleccionar un grado académico.' }),
});
