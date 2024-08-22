import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import {
  Card, CardContent, CardFooter, CardHeader, CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getCualidades } from '@/lib/cualidades';

export function PuntosFuertes() {
  const cualidades = getCualidades();

  return (
    <section id="puntosFuertes" className="relative py-16 lg:py-24 xl:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="md:w-3/4 mx-auto text-3xl md:text-4xl font-bold ">
          Nuestros
          {' '}
          <span className="bg-gradient-to-b from-primary/40 to-primary text-transparent bg-clip-text">
            Puntos
            {' '}
          </span>
          Fuertes
        </h2>

        <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
          Promoviendo un entorno dinámico y colaborativo para la investigación científica
        </p>

        <div className="grid lg:grid-cols-3 gap-12 mt-12 lg:mt-0 text-left">
          {cualidades.map(({
            icon: Icon, title, description, label, color,
          }) => (
            <Card key={title} className="bg-white shadow-md border-white flex flex-col">
              <CardHeader className="flex-none pb-4">
                <CardTitle className="flex flex-row items-center text-lg md:text-xl">
                  <Icon className="mr-3" color={`#${color}`} />
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 pl-7 text-base pb-2 place-content-center">
                {description}
              </CardContent>

              <CardFooter className="flex-0">
                <Button variant="ghost" className="hover:bg-white hover:text-secondary/70" asChild>
                  <Link href="/cursos" className="text-secondary">
                    {label}
                    <ChevronRight size="18px" />
                  </Link>
                </Button>
              </CardFooter>

            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
