/* eslint-disable consistent-return */

'use server';

import { cookies } from 'next/headers';
import { z } from 'zod';
import pb from '../pocketbase';
import { EditProfileSchema } from '../schemas/EditProfileSchema';

type formSchema = z.infer<typeof EditProfileSchema>;

export async function sendFormEditProfile(data: formSchema) {
  const result = EditProfileSchema.safeParse(data);

  if (result.error) {
    return { success: false, error: result.error.format() };
  }

  if (result.success) {
    const record = await pb.client.collection('users').update(data.id, data);

    const cookieStore = cookies();
    const cookie = cookieStore.get('pb_auth');
    if (cookie) {
      pb.client.authStore.loadFromCookie(cookie.value);
      await pb.client.collection('users').authRefresh();

      cookies().set('pb_auth', pb.client.authStore.exportToCookie());
    }

    return { success: true, data: record };
  }
}
