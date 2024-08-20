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
    <section
      id="puntosFuertes"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Nuestros
        {' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Puntos
          {' '}
        </span>
        Fuertes
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Promoviendo un entorno dinámico y colaborativo para la investigación científica
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cualidades.map(({
          icon: Icon, title, description, label, color,
        }) => (
          <Card
            key={title}
            className="bg-white shadow-md border-white"
          >
            <CardHeader>
              <CardTitle className="flex flex-row">
                <Icon className="mr-4" color={`#${color}`} />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left">
              {description}
            </CardContent>

            <CardFooter>
              <Button variant="ghost" asChild>
                <Link href="/cursos" className="text-secondary">
                  {label}
                  <ChevronRight size="18px" />
                </Link>
              </Button>
            </CardFooter>

          </Card>
        ))}
      </div>
    </section>
  );
}
