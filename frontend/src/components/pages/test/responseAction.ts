'use server';

import { getServerUser } from '@/lib/serverPocketbase';

const responseAction = async (formData: FormData) => {
  const question = formData.get('question');
  const answer = formData.get('answer');

  const user = await getServerUser();

  console.log({
    question,
    answer,
    user,
  });
};

export default responseAction;
