import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: 'Correo electrónico inválido' })
    .trim()
    .toLowerCase(),
  password: z
    .string()
    .min(5, { message: 'La contrasena es muy corto' })
    .max(200, { message: 'La contrasena es muy largo' }),
});

export const registerSchema = z.object({
  email: z
    .string()
    .email({ message: 'Correo electrónico inválido' })
    .trim()
    .toLowerCase(),
  password: z
    .string()
    .min(5, { message: 'La contrasena es muy corto' })
    .max(200, { message: 'La contrasena es muy largo' }),
  username: z
    .string()
    .min(4, { message: 'El nombre de usuario es muy corto' })
    .max(20, { message: 'El nombre de usuario es muy largo' }),
  phoneNumber: z
    .string()
    .length(9, { message: 'El número de teléfono debe tener 9 digitos' }),
});
