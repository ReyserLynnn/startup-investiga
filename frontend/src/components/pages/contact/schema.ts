import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: 'El nombre es muy corto' })
    .max(100, { message: 'El nombre es muy largo' }),
  email: z
    .string()
    .email({ message: 'Correo electrónico inválido' })
    .trim()
    .toLowerCase(),
  message: z
    .string()
    .min(10, { message: 'El mensaje es muy corto' })
    .max(200, { message: 'El mensaje es muy largo' }),
});
