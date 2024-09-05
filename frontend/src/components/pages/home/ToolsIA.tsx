'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { getHerramientasIA, getTiposIA } from '@/lib/herramientasIA';
import Autoplay from 'embla-carousel-autoplay';
import { GalleryVerticalEnd } from 'lucide-react';
import Image from 'next/image';

export function ToolsIA() {
  const tools = getHerramientasIA();
  const tiposIA = getTiposIA();

  return (
    <section
      id="features"
      className="container py-24 sm:py-32 flex flex-col gap-3"
    >
      <h2 className="text-3xl text-center lg:text-4xl font-bold md:text-center">
        <span className="inline bg-gradient-to-r from-[#eebf8a] to-[#fc9d4c] text-transparent bg-clip-text">
          Explora{' '}
        </span>
        las herramientas{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          IA
        </span>
      </h2>
      <p className=" text-center md:w-3/4 mx-auto text-lg text-muted-foreground">
        Explora y domina cada IA aplicable a la investigación científica
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 my-3">
        {tiposIA.map((tipo: string) => (
          <div key={tipo}>
            <Badge variant="secondary" className="text-sm">
              {tipo}
            </Badge>
          </div>
        ))}
      </div>

      <div className="mx-auto container px-3 ">
        <Carousel
          opts={{
            loop: true,
            align: 'start',
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {tools.map(({ title, description, image }) => (
              <CarouselItem
                key={title}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="flex flex-col items-center px-4 py-5 sm:p-6 gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold text-gray-900 text-center">
                      {title}
                    </p>
                    <p className="text-sm text-gray-600 px-2 ">{description}</p>
                  </div>
                  <div className="flex items-center justify-center h-64 my-auto">
                    <Image
                      className="rounded-xl "
                      height={250}
                      width={250}
                      alt={title}
                      src={image}
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex justify-center my-3">
        <Button variant="outline" className="shadow-md">
          <GalleryVerticalEnd size={18} className="mr-2" />
          Ver todos
        </Button>
      </div>
    </section>
  );
}
