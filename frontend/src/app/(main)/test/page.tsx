import FormToQuestion from '@/components/pages/test/FormToQuestion';

import pb from '@/lib/pocketbase';
import { getServerUser } from '@/lib/serverPocketbase';
import { AnswersFields } from '@/types/answers';
import { QuestionsFields } from '@/types/questions';
import { ResponsesFields } from '@/types/responses';
import { redirect } from 'next/navigation';

export const revalidate = 0;

export default async function TestPage() {
  const form = await pb.getQuestions();
  const user = await getServerUser();

  if (!user) redirect('/login');

  const responses = await pb.getResponseByUser({ userId: user.id });

  console.log(responses);

  return (
    <main className="flex-1">
      <div>
        {form.map((question) => (
          <FormToQuestion key={question.id} question={question} />
        ))}
      </div>
      <div>
        {responses.map((response) => (
          <div key={response[ResponsesFields.ID]}>
            <h3>
              {
                response[ResponsesFields.EXPAND]?.[ResponsesFields.QUESTION][
                  QuestionsFields.BODY
                ]
              }
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  response[ResponsesFields.EXPAND]?.[ResponsesFields.QUESTION][
                    QuestionsFields.DESCRIPTION
                  ] || '',
              }}
            />
            <p>
              {
                response[ResponsesFields.EXPAND]?.[ResponsesFields.ANSWER][
                  AnswersFields.BODY
                ]
              }
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
