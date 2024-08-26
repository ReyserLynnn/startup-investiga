import Image from 'next/image';
import { GalleryVerticalEnd, ListCollapse } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getHerramientasIA, getTiposIA } from '@/lib/herramientasIA';
import { Button } from '@/components/ui/button';

export function ToolsIA() {
  const herramientasIA = getHerramientasIA();
  const tiposIA = getTiposIA();

  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Herramientas{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          IA
        </span>
      </h2>
      <div className="text-center">
        <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
          Explora y domina cada IA aplicable a lah investigación científica
        </p>
      </div>

      <div className="flex flex-wrap md:justify-center gap-4">
        {tiposIA.map((tipo: string) => (
          <div key={tipo}>
            <Badge variant="secondary" className="text-sm">
              {tipo}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {herramientasIA.map(({ title, description, image }) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter className="flex flex-col gap-5">
              <Image
                src={image}
                width={200}
                height={200}
                alt={`Logo de ${title}`}
                className="w-[200px] lg:w-[300px] mx-auto"
              />

              <Button className="shadow-md bg-primary">
                <ListCollapse size={18} className="mr-2" />
                Más Detalles...
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline" className="shadow-md">
          <GalleryVerticalEnd size={18} className="mr-2" />
          Ver todos
        </Button>
      </div>
    </section>
  );
}
