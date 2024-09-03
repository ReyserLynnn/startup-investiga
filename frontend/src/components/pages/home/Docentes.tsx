/* eslint-disable @typescript-eslint/no-shadow */
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getDocentesList } from '@/lib/docentes';
import { StopCircle } from 'lucide-react';
import Link from 'next/link';

export function Docentes() {
  const docentes = getDocentesList();

  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <LinkedinIcon />;
      case 'Twitter':
        return <TwitterIcon />;
      default:
        return <StopCircle />;
    }
  };

  return (
    <section id="docentes" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Conoce a nuetro{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Equipo
        </span>
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Conoce a los expertos que transformarán tu aprendizaje con su pasión y
        vasta experiencia en la enseñanza.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {docentes.map(
          ({ imageUrl, name, presentation, position, socialNetworks }) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary text-center">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                {presentation}
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }) => (
                  <div key={name}>
                    <Link
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: 'ghost',
                        size: 'sm',
                      })}
                    >
                      <span className="sr-only">
                        {name}
                        icon
                      </span>
                      {socialIcon(name)}
                    </Link>
                  </div>
                ))}
              </CardFooter>
            </Card>
          ),
        )}
      </div>
    </section>
  );
}
