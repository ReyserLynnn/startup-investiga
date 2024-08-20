import { Button } from '@/components/ui/button';

export function Cta() {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32 w-full"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Todas tus
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {' '}
              Ideas y Conocimientos
              {' '}
            </span>
            en una sola plataforma
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Descubre cursos en vivo de investigación científica con la ayuda de IA. ¡Explora y aprende!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Unirse a la comunidad</Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            Ver todas las características
          </Button>
        </div>
      </div>
    </section>
  );
}
