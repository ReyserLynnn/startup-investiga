'use server';

import { cookies } from 'next/headers';
import pb from './pocketbase';

export const getServerUser = async () => {
  const cookieStore = cookies();

  const user = await pb.getUser(cookieStore);

  return user;
};
