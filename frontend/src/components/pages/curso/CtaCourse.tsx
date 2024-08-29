import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  email: z.string().email({ message: 'Correo eletrónico no válido' }),
});

export default function CtaCourse() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="container bg-[#2273D1] flex flex-col lg:flex-row h-auto p-10 rounded-2xl text-white md:mt-20 gap-5">
      <div className="flex flex-col gap-3 lg:w-[70%]">
        <span className="text-2xl font-semibold">
          Únete y obtén increíbles descuentos
        </span>
        <span className="font-light">
          Con investiga tendrás una experiencia unica en tu camino de
          investigador científico
        </span>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex text-center h-auto lg:w-[30%] items-center justify-center gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Correo electrónico"
                    className=" bg-white bg-opacity-25 border-none placeholder:text-gray-200 text-white focus-visible:ring-white h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 font-light" />
              </FormItem>
            )}
          />
          <Button type="submit" className="gap-2">
            <Send size="16" />
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
}
