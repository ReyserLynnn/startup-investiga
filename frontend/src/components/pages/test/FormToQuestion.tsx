'use client';

import { Button } from '@/components/ui/button';
import { AnswersFields } from '@/types/answers';
import { Questions, QuestionsFields } from '@/types/questions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const questionSchema = z.object({
  question: z.string(),
  answer: z.string().min(1, { message: 'Please select an answer' }),
});

export default function FormToQuestion({ question }: { question: Questions }) {
  const form = useForm<z.infer<typeof questionSchema>>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      answer: '',
      question: question[QuestionsFields.ID],
    },
  });

  const onSubmit = async (values: z.infer<typeof questionSchema>) => {
    fetch('/api/test', {
      method: 'POST',
      body: JSON.stringify(values),
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-4 flex flex-col items-start"
      >
        <h3>{question[QuestionsFields.BODY]}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: question[QuestionsFields.DESCRIPTION],
          }}
        />
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  id="question"
                  type="hidden"
                  {...field}
                  value={question[QuestionsFields.ID]}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {question[QuestionsFields.EXPAND]?.[
                    QuestionsFields.ANSWERS
                  ].map((answer) => (
                    <FormItem
                      key={answer[AnswersFields.ID]}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={answer[AnswersFields.ID]} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {answer[AnswersFields.BODY]}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Siguiente</Button>
      </form>
    </Form>
  );
}
