/* eslint-disable consistent-return */

'use server';

import { z } from 'zod';
import { EditProfileFormSchema } from '../schemas/edit-profile';

type Inputs = z.infer<typeof EditProfileFormSchema>;

export async function sendFormEditProfile(data: Inputs) {
  const result = EditProfileFormSchema.safeParse(data);

  if (result.success) {
    console.log('Envío del formulario exitoso:', data);
    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
