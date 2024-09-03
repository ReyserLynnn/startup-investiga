import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BookCheck,
  ChartBarStacked,
  ChevronRight,
  SearchCode,
} from 'lucide-react';
import Link from 'next/link';

const puntosFuertes = [
  {
    title: 'Búsqueda Eficiente',
    description:
      'Encuentra fuentes científicas relevantes en segundos con IA avanzada.',
    label: 'Compruebalo',
    color: 'DCA005',
    icon: SearchCode,
  },
  {
    title: 'Comparación Precisa',
    description: 'Compara artículos y datos de manera precisa y rápida.',
    label: 'Ver más',
    color: '4883FF',
    icon: ChartBarStacked,
  },
  {
    title: 'Aprendizaje Profundo',
    description:
      'Domina técnicas de investigación con nuestros cursos especializados.',
    label: 'Aprender más',
    color: 'C11574',
    icon: BookCheck,
  },
];

export function PuntosFuertes() {
  return (
    <section
      id="puntosFuertes"
      className="relative py-16 lg:py-24 xl:py-32 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="md:w-3/4 mx-auto text-3xl md:text-4xl font-bold ">
          Ventajas{' '}
          <span className="bg-gradient-to-b from-primary/40 to-primary text-transparent bg-clip-text">
            Exclusivas
          </span>
        </h2>

        <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
          Descubre las herramientas clave que potencian tu investigación
          científica.
        </p>

        <div className="grid lg:grid-cols-3 gap-12 mt-12 lg:mt-0 text-left">
          {puntosFuertes.map(
            ({ icon: Icon, title, description, label, color }) => (
              <Card
                key={title}
                className="bg-white shadow-md border-white flex flex-col"
              >
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
                  <Button
                    variant="ghost"
                    className="hover:bg-white hover:text-secondary/70"
                    asChild
                  >
                    <Link href="/cursos" className="text-secondary">
                      {label}
                      <ChevronRight size="18px" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
