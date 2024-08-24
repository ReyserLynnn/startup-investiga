"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Step, StepItem, Stepper, useStepper } from "@/components/ui/stepper";
import { Building, Star, User } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import GoogleButton from "./GoogleButton";
import { PhoneInput, getPhoneData } from "@/components/ui/phone-input";
import { ComboboxInstitutions } from "./ComboboxInstitutions";

const steps = [
  { label: "Personal", icon: User },
  { label: "Académico", icon: Building },
  { label: "Cuenta", icon: Star },
] satisfies StepItem[];

export default function StepperDemo() {
  const [formData, setFormData] = useState({});

  function handleUpdateData(newData: any) {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  }

  return (
    <div className="container relative bg-white">
      <div className="flex w-full flex-col gap-4">
        <Stepper variant="circle-alt" initialStep={0} steps={steps}>
          {steps.map((stepProps, index) => {
            if (index === 0) {
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <FirstStepForm onUpdateData={handleUpdateData} />
                </Step>
              );
            }
            if (index === 1) {
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <SecondStepForm onUpdateData={handleUpdateData} />
                </Step>
              );
            }
            return (
              <Step key={stepProps.label} {...stepProps}>
                <FinalStepForm formData={formData} />
              </Step>
            );
          })}
          <MyStepperFooter />
        </Stepper>
      </div>
    </div>
  );
}

const FirstFormSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Al menos 5 caracteres" })
    .max(25, { message: "Maximo 50 catacteres" }),
  lastname: z
    .string()
    .min(5, { message: "Al menos 5 caracteres" })
    .max(25, { message: "Maximo 50 catacteres" }),
  phone: z.string(),
});

function FirstStepForm({
  onUpdateData,
}: {
  onUpdateData: (data: any) => void;
}) {
  const { nextStep } = useStepper();

  const form = useForm<z.infer<typeof FirstFormSchema>>({
    resolver: zodResolver(FirstFormSchema),
    defaultValues: {
      name: "",
      lastname: "",
      phone: "",
    },
  });

  function onSubmit(data: z.infer<typeof FirstFormSchema>) {
    const phoneData = getPhoneData(data.phone);

    if (!phoneData.isValid) {
      form.setError("phone", {
        type: "manual",
        message: "Número de telefono inválido",
      });
      return;
    }

    onUpdateData(data);
    nextStep();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombres</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tus nombres" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellidos</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tus apellidos" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <PhoneInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <StepperFormActions />
      </form>
    </Form>
  );
}

const SecondFormSchema = z.object({
  institution: z.string().min(1, { message: "Debe seleccionar una institución." }),
});

function SecondStepForm({
  onUpdateData,
}: {
  onUpdateData: (data: any) => void;
}) {
  const { nextStep } = useStepper();
  const form = useForm<z.infer<typeof SecondFormSchema>>({
    resolver: zodResolver(SecondFormSchema),
    defaultValues: {
      institution: "",
    },
  });

  function onSubmit(data: z.infer<typeof SecondFormSchema>) {
    onUpdateData(data);
    console.log(data)
    nextStep();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="institution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institución</FormLabel>
              <FormControl>
                <ComboboxInstitutions
                  value={field.value}
                  onValueChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <StepperFormActions />
      </form>
    </Form>
  );
}


function FinalStepForm({ formData }: { formData: any }) {
  function onSubmit() {
    console.log("Final data:", formData);
    // Aquí puedes manejar el envío de los datos combinados
  }

  return (
    <div>
      <h2>Resumen</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <Button onClick={onSubmit}>Enviar</Button>
      <GoogleButton classname="w-full" />
    </div>
  );
}

function StepperFormActions() {
  const {
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
  } = useStepper();

  return (
    <div className="w-full flex justify-end gap-2">
      {hasCompletedAllSteps ? (
        <Button size="sm" onClick={resetSteps}>
          Reset
        </Button>
      ) : (
        <>
          <Button
            disabled={isDisabledStep}
            onClick={prevStep}
            size="sm"
            variant="secondary"
          >
            Prev
          </Button>
          <Button size="sm">
            {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
}

function MyStepperFooter() {
  const { activeStep, resetSteps, steps } = useStepper();

  if (activeStep !== steps.length) {
    return null;
  }

  return (
    <div className="flex items-center justify-end gap-2">
      <Button onClick={resetSteps}>Reset Stepper with Form</Button>
    </div>
  );
}
