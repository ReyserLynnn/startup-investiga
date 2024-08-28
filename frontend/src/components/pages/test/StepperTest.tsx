/* eslint-disable no-nested-ternary */

'use client';

import { Step, StepItem, Stepper } from '@/components/ui/stepper';
import { Questions, QuestionsFields } from '@/types/questions';
import { User } from 'lucide-react';
import FormToQuestion from './FormToQuestion';

export default function StepperTest({ form }: { form: Questions[] }) {
  const steps = form.map((f) => ({
    label: ``,
    icon: User,
    id: f[QuestionsFields.ID],
  })) satisfies StepItem[];

  console.log(steps);

  return (
    <div className="flex flex-col justify-center px-8 py-12 mx-auto max-w-2xl w-full mt-16 mb-32 border-2 rounded-lg">
      <Stepper variant="line" initialStep={0} steps={steps}>
        {steps.map((stepProps, index) => {
          return (
            <Step key={stepProps.id} {...stepProps}>
              <FormToQuestion question={form[index]} />
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}
