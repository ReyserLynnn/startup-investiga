import pb from '@/lib/pocketbase';
import { Users } from '@/types/user';
import { cookies } from 'next/headers';
import { use } from 'react';
import EditProfileForm from './EditProfileForm';

const getUser = async () => {
  const cookieStore = cookies();
  const result = await pb.getUser(cookieStore);

  return result as Users;
};

export default function ContactPage() {
  const user = use(getUser());

  return <EditProfileForm user={user} />;
}
