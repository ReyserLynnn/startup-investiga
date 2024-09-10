import { Button } from '@/components/ui/button';
import { Check, SendHorizonal } from 'lucide-react';
import Image from 'next/image';

function ShareTool() {
  return (
    <Button
      className="mt-5"
      variant="expandIcon"
      Icon={SendHorizonal}
      iconPlacement="right"
      iconSize="18"
      size="lg"
      asChild
    >
      <a href="mailto:investiga.lat@gmail.com?subject=Propuesta%20de%20Herramienta%20de%20IA&body=Hola%2C%20quisiera%20enviar%20los%20detalles%20de%20mi%20herramienta%20de%20IA.%0A%0ANombre%20de%20la%20herramienta%3A%20%0ADescripción%3A%20%0AEnlace%3A%20%0ACaracterísticas%20principales%3A%20%0AModelo%20de%20negocio%20%28si%20aplica%29%3A%20%0ACapturas%20de%20pantalla%20%28opcional%29%3A%20%0A%0AGracias%2C%0ATu%20nombre">
        Compartir herramienta
      </a>
    </Button>
  );
}

export default function EnviarHerramientaPage() {
  return (
    <section id="enviar-herramienta" className="bg-white flex-1 ">
      <div className="  h-max bg-slate-900 text-white">
        <div className="flex flex-col gap-5 text-white items-center justify-center px-16 py-20 sm:py-32 lg:py-40 text-center">
          <h1 className=" max-w-5xl mx-auto font-medium text-4xl sm:text-6xl mb-6">
            Comparte tu herramienta de IA con nuestra{' '}
            <span className="text-primary font-extrabold">
              comunidad de investigadores{' '}
            </span>
          </h1>

          <p className="text-xl leading-8 text-gray-300 max-w-2xl mx-auto font-light">
            Presenta tu herramienta de IA en Investiga y conéctala con una{' '}
            <span className=" text-primary font-medium">
              comunidad activa de investigadores{' '}
            </span>
            listos para descubrir nuevas soluciones.
          </p>

          <ShareTool />
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center px-6 py-20 mt-20">
        <div className="max-w-4xl flex flex-col sm:flex-row gap-10 justify-center ">
          <div className="flex flex-col flex-1 gap-3 items-center">
            <Image
              src="/img/benefit1.jpg"
              width={325}
              height={325}
              alt="benefit1"
              className=" rounded-2xl"
            />

            <div className="flex flex-col gap-5 px-5 lg:px-16">
              <h3 className="text-2xl font-bold text-center mt-5">
                Conecta con investigadores
              </h3>

              <p className="font-light text-justify">
                Presenta tu herramienta de IA en nuestra plataforma y conéctala
                con una comunidad activa de investigadores listos para descubrir
                nuevas soluciones.
              </p>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-3 items-center">
            <Image
              src="/img/benefit2.jpg"
              width={325}
              height={325}
              alt="benefit2"
              className="rounded-2xl"
            />

            <div className="flex flex-col gap-5 px-5 lg:px-16">
              <h3 className="text-2xl font-bold text-center mt-5">
                Impulsa tu herramienta de IA
              </h3>

              <p className="font-light text-justify">
                Destaca en nuestra plataforma y accede a una red de
                investigadores en busca de innovación científica.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container gap-5 flex flex-col items-center justify-center px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          ¿Qué necesitas para enviar tu herramienta?
        </h2>
        <p className="md:text-lg text-center text-muted-foreground font-light">
          Asegúrate de tener los siguientes datos a la mano para enviar tu
          herramienta de IA
        </p>

        <div className="flex flex-col gap-2 mt-4 ">
          <span className="flex gap-2 items-center">
            <Check className="text-primary" size={16} />
            Nombre de la herramienta
          </span>

          <span className="flex gap-2 items-center">
            <Check className="text-primary" size={16} />
            Descripción breve y sus principales características
          </span>

          <span className="flex gap-2 items-center">
            <Check className="text-primary" size={16} />
            URL de la herramienta
          </span>

          <span className="flex gap-2 items-center">
            <Check className="text-primary" size={16} />
            Precio o modelo de negocio
          </span>

          <span className="flex gap-2 items-center">
            <Check className="text-primary" size={16} />
            Capturas de pantalla o video de demostración (opcional)
          </span>
        </div>
      </div>

      <div className="container gap-3 flex flex-col items-center justify-center px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          ¿Cómo comparto mi herramienta?
        </h2>

        <div className="flex flex-col gap-2 mt-4">
          <p className="md:text-lg text-center text-muted-foreground font-light">
            Envía toda la información a nuestro correo:{' '}
            <a
              href="mailto:investiga.lat@gmail.com?subject=Propuesta%20de%20Herramienta%20de%20IA&body=Hola%2C%20quisiera%20enviar%20los%20detalles%20de%20mi%20herramienta%20de%20IA.%0A%0ANombre%20de%20la%20herramienta%3A%20%0ADescripción%3A%20%0AEnlace%3A%20%0ACaracterísticas%20principales%3A%20%0AModelo%20de%20negocio%20%28si%20aplica%29%3A%20%0ACapturas%20de%20pantalla%20%28opcional%29%3A%20%0A%0AGracias%2C%0ATu%20nombre"
              className="text-primary font-bold"
            >
              investiga.lat@gmail.com
            </a>
          </p>
        </div>

        <ShareTool />
      </div>
    </section>
  );
}
