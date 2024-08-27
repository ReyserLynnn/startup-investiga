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
import { useStepper } from '@/components/ui/stepper';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { capitalizeFirstLetter } from '@/lib/utils';

const questionSchema = z.object({
  question: z.string(),
  answer: z.string().min(1, { message: 'Please select an answer' }),
});

export default function FormToQuestion({ question }: { question: Questions }) {
  const {
    nextStep,
    prevStep,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
  } = useStepper();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof questionSchema>>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      answer: '',
      question: question[QuestionsFields.ID],
    },
  });

  const onSubmit = async (values: z.infer<typeof questionSchema>) => {
    setLoading(true);
    fetch('/api/test', {
      method: 'POST',
      body: JSON.stringify(values),
    }).finally(() => {
      if (!isLastStep) {
        nextStep();
        setLoading(false);
      } else {
        router.push('/test/me/result');
      }
    });
  };

  useEffect(() => {
    console.log({ hasCompletedAllSteps, isLastStep });
  }, [hasCompletedAllSteps, isLastStep]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-4 flex flex-col items-start my-4"
      >
        <h3 className="text-3xl font-semibold">
          {question[QuestionsFields.BODY]}
        </h3>
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
            <FormItem className="w-full">
              <div
                dangerouslySetInnerHTML={{
                  __html: question[QuestionsFields.DESCRIPTION],
                }}
                className="mb-6"
              />
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1 w-full"
                >
                  {question[QuestionsFields.EXPAND]?.[
                    QuestionsFields.ANSWERS
                  ].map((answer) => (
                    <FormItem
                      key={answer[AnswersFields.ID]}
                      className="flex items-center space-x-3 space-y-0 w-full"
                    >
                      <FormLabel className="font-normal flex items-center gap-3 rounded-md border-2 bg-background hover:bg-gray-3 [&:has([data-state=checked])]:border-primary w-full py-3 px-5 text-base [&:has([data-state=checked])]:bg-primary/20">
                        <FormControl>
                          <RadioGroupItem
                            value={answer[AnswersFields.ID]}
                            className="sr-only"
                          />
                        </FormControl>
                        {capitalizeFirstLetter(answer[AnswersFields.BODY])}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full items-center flex justify-end gap-4">
          <Button disabled={isDisabledStep} onClick={prevStep} type="button">
            Prev
          </Button>
          <Button disabled={loading} type="submit">
            {isLastStep ? 'Finish' : 'Siguiente'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
