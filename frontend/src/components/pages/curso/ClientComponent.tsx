'use client';
import { Button } from '@/components/ui/button';
import Player from 'next-video/player';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { capitalizeFirstLetter, getImageUrl } from '@/lib/utils';
import {
  ArrowRight,
  AudioLines,
  Book,
  BookOpen,
  ChevronDown,
  Heart,
  NotebookTabsIcon,
  Play,
  Send,
  ShoppingCart,
  StarIcon,
  Timer,
} from 'lucide-react';
import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Courses, CoursesFields } from '@/types/courses';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const labelInfo = ['Descripción', 'Conoce más', 'Reseñas'];

const FormSchema = z.object({
  email: z.string().email({ message: 'Correo eletrónico no válido' }),
});

interface Props {
  params: { course: Courses };
}

export default function ClientComponent({ params }: Props) {
  const { course } = params;

  const urlImage = getImageUrl({
    url: course[CoursesFields.IMAGE],
    collectionId: course.collectionId,
    id: course[CoursesFields.ID],
  });

  const [info, setInfo] = useState(labelInfo[0]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  const handleClick = (name: string) => {
    setInfo(name);
  };

  return (
    <main
      id="CoursePage"
      className=" relative w-full h-full overflow-hidden bg-white my-10"
    >
      <div className="container mx-auto flex-1 flex flex-col gap-10 px-3 ">
        <div className="flex flex-col gap-4 justify-center">
          <h3 className="text-3xl font-semibold">
            {course[CoursesFields.NAME]}
          </h3>
          <div className="flex gap-2 text-sm">
            <span className="text-red-500">Francisco Rengifo</span>
            <span className="flex items-center gap-1">
              <StarIcon size="18" className="text-yellow-300" />
              4.8
            </span>
            <span className="text-gray-400">
              ({course[CoursesFields.ALUMNS].length} alumnos)
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-[70%] ">
            <div className="w-full h-auto rounded-2xl overflow-hidden aspect-video">
              <Player
                className="aspect-video"
                src="https://res.cloudinary.com/dazt6g3o1/video/upload/v1724428962/juvdebis2n2bkoioxd08.mp4"
                accentColor="#0cc0df"
                loop
                // autoPlay
                // muted
              >
                <Image
                  slot="poster"
                  className="aspect-video object-cover"
                  src={urlImage}
                  width={800}
                  height={450}
                  alt="Poste del curso"
                />
              </Player>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:w-[30%] mt-5">
            <div className="relative flex flex-col gap-1">
              <div className="flex gap-2">
                <span className=" text-2xl font-semibold">
                  S/{course[CoursesFields.PRICE]}.00
                </span>
                <div className="relative">
                  <span className="absolute text-gray-500 text-xs top-1 line-through ">
                    S/30.00
                  </span>
                </div>
              </div>
              <span className="self-start bg-purple-600 text-sm font-medium text-white px-2 py-1 rounded-md inline-block">
                20% Menos
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                className="w-full font-semibold rounded-xl gap-2"
                variant="shine"
              >
                <ShoppingCart />
                Comprar
              </Button>
              <Button
                className="rounded-xl  text-gray-500 gap-2 hover:text-red-600 hover:bg-red-100"
                variant="outline"
              >
                <Heart />
                Me gusta
              </Button>
            </div>

            <div className="flex flex-col gap-2 text-gray-700 text-sm ">
              <span className="flex gap-2 items-center">
                <Book size="16" />
                {course[CoursesFields.MODULES].length} Módulos
              </span>
              <span className="flex gap-2 items-center">
                <BookOpen size="16" />
                22 Lecciones
              </span>
              <span className="flex gap-2 items-center">
                <Play size="16" />
                {course[CoursesFields.DURATION]} Horas en total
              </span>
              <span className="flex gap-2 items-center">
                <AudioLines size="16" />
                Español
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex flex-col gap-8 md:w-[70%]">
            <div className="flex gap-2">
              {labelInfo.map((label) => (
                <Button
                  key={label}
                  variant={info === label ? 'linkHover1' : 'linkHover2'}
                  onClick={() => handleClick(label)}
                  className={`relative ${info === label ? 'font-medium hover:after:scale-x-100' : 'font-normal'}`}
                >
                  {capitalizeFirstLetter(label)}
                </Button>
              ))}
            </div>
            <div className="px-4 ">
              <span className="font-semibold text-lg">Contenido Del curso</span>
              <Accordion
                type="multiple"
                className="w-full"
                defaultValue={['item-1']}
              >
                {course.expand?.modules.map((module, index) => (
                  <AccordionItem key={module.id} value={module.id}>
                    <AccordionTrigger>
                      {index + 1}. {module.title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4">
                      {module.expand?.sessions.map((session) => (
                        <div
                          key={session.id}
                          className="mb-2 ml-4 flex flex-col gap-2"
                        >
                          <span className="font-semibold flex gap-2 items-center">
                            <NotebookTabsIcon size="16" />
                            {session.title}
                          </span>
                          <p className="ml-8">{session.description}</p>
                          <span className="font-light ml-8 flex gap-1 items-center text-gray-500">
                            <Timer size="12" />
                            Duración: {session.duration} minutos
                          </span>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="flex flex-col gap-2 ml-4">
              <span className="font-semibold">Acerca del Curso</span>
              <div
                className="joditBox font-light"
                dangerouslySetInnerHTML={{
                  __html: course[CoursesFields.DESCRIPTION],
                }}
              />
            </div>
            <div className="flex flex-col gap-2 ml-4">
              <span className="font-semibold">Reseñas</span>
              <div className="flex flex-col gap-5">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-sm text-primary">
                      Reyser Zapata Butron
                    </span>
                    <p className="text-gray-500 text-xs">Hoy a las 13:32</p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta in modi voluptates. Autem facere tempora velit sit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="gap-2" variant="outline">
                Más reseñas
                <ChevronDown size="18" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:w-[30%] bg-[#1B283F] h-96 text-white px-5 py-10 rounded-2xl">
            <span className="self-start bg-primary px-2 py-1 rounded-sm text-xs font-semibold">
              CURSO EN VIVO
            </span>
            <span className="font-light text-lg">Reyser Zapata</span>
            <h3 className="text-2xl font-semibold leading-normal">
              Masterclass en Chatgpt para articulos científicos
            </h3>
            <Button
              className="self-start bg-transparent border border-secondary text-secondary hover:bg-transparent mt-5"
              variant="expandIcon"
              Icon={ArrowRight}
              iconPlacement="right"
            >
              Saber Más
            </Button>
          </div>
        </div>

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
      </div>
    </main>
  );
}
