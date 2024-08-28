import pb from '@/lib/pocketbase';
import { getServerUser } from '@/lib/serverPocketbase';
import { Collections } from '@/types/pb';
import { ResponsesFields } from '@/types/responses';
import { Users, UsersFields } from '@/types/user';
import { z } from 'zod';

const squema = z.object({
  question: z.string(),
  answer: z.string(),
});

export async function POST(req: Request) {
  const body = await req.json();

  const { success, data } = squema.safeParse(body);

  if (!success) {
    return Response.json({ error: 'Invalid data' }, { status: 400 });
  }

  const user = (await getServerUser()) as Users | false;

  if (!user) {
    return Response.json({ error: 'User not found' }, { status: 401 });
  }

  const { question, answer } = data;

  try {
    const response = await pb.client
      .collection(Collections.RESPONSES)
      .getFirstListItem(
        `${ResponsesFields.USER} = "${user[UsersFields.ID]}" && ${ResponsesFields.QUESTION} = "${question}"`,
      );

    await pb.client.collection(Collections.RESPONSES).update(response.id, {
      [ResponsesFields.ANSWER]: answer,
    });

    return Response.json({ success: true });
  } catch (error) {
    // console.error(error);
  }

  try {
    await pb.createResponse({
      userId: user.id,
      questionId: question,
      answer,
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Error creating response' }, { status: 500 });
  }
}
