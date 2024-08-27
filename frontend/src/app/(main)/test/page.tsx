import StepperTest from '@/components/pages/test/StepperTest';

import pb from '@/lib/pocketbase';
import { getServerUser } from '@/lib/serverPocketbase';
// import { AnswersFields } from '@/types/answers';
// import { QuestionsFields } from '@/types/questions';
// import { ResponsesFields } from '@/types/responses';
import { redirect } from 'next/navigation';

export const revalidate = 0;

export default async function TestPage() {
  const form = await pb.getQuestions();
  const user = await getServerUser();

  if (!user) redirect('/login');

  return (
    <main className="flex-1 w-full flex items-center justify-center">
      {/* <div>
        {form.map((question) => (
          <FormToQuestion key={question.id} question={question} />
        ))}
      </div> */}
      <StepperTest form={form} />
    </main>
  );
}
