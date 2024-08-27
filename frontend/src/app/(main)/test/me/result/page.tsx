import pb from '@/lib/pocketbase';
import { redirect } from 'next/navigation';

import { AnswersFields } from '@/types/answers';
import { QuestionsFields } from '@/types/questions';
import { ResponsesFields } from '@/types/responses';
import { getServerUser } from '@/lib/serverPocketbase';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { capitalizeFirstLetter } from '@/lib/utils';

export default async function TestMeResultPage() {
  const user = await getServerUser();

  if (!user) redirect('/login');
  const responses = await pb.getResponseByUser({ userId: user.id });
  console.log(responses);
  return (
    <main className="flex-1 w-full flex items-center justify-center flex-col gap-16 pb-40">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-semibold">Tus resultados</h1>
        <p>
          Aquí puedes ver tus respuestas a las preguntas que has respondido.
          Gracias por participar.
        </p>
      </div>
      <div className="container w-full flex flex-col gap-16">
        {responses.map((response) => (
          <div key={response[ResponsesFields.ID]}>
            <h3 className="text-2xl font-semibold text-muted-foreground">
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
              className="my-2"
            />
            <RadioGroup
              aria-readonly
              className="flex flex-col space-y-1 w-full"
              defaultValue={response[ResponsesFields.ANSWER]}
            >
              {response[ResponsesFields.EXPAND]?.[ResponsesFields.QUESTION][
                ResponsesFields.EXPAND
              ]?.[QuestionsFields.ANSWERS].map((answer) => (
                <Label
                  key={answer[AnswersFields.ID]}
                  className="font-normal flex items-center gap-3 rounded-md border-2 bg-background hover:bg-gray-3 [&:has([data-state=checked])]:border-primary w-full py-3 px-5 text-base [&:has([data-state=checked])]:bg-primary/20"
                >
                  <RadioGroupItem
                    aria-readonly
                    value={answer[AnswersFields.ID]}
                    className="sr-only"
                  />
                  {capitalizeFirstLetter(answer[AnswersFields.BODY])}
                </Label>
              ))}
            </RadioGroup>
          </div>
        ))}
      </div>
    </main>
  );
}
