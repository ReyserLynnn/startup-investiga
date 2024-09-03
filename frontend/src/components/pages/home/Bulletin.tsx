import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Bulletin() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full container px-6 flex flex-col mx-6 bg-[#1B283F] rounded-2xl items-center gap-2 py-24 my-24 relative overflow-hidden">
        <h1 className="text-primary-foreground text-4xl font-bold text-center">
          Mantente Actualizado
        </h1>
        <span className="text-primary-foreground text-lg text-center md:w-[60%] px-3">
          Suscríbete para recibir las últimas novedades y actualizaciones sobre
          nuestros cursos y herramientas de IA.
        </span>
        <div className="bg-primary-foreground rounded-xl px-2 py-2 flex gap-2 mt-10  items-center ">
          <Input
            type="email"
            className="rounded-xl h-11"
            placeholder="Correo electronico"
          />
          <Button
            variant="secondary"
            className="rounded-xl px-12 text-base h-auto py-3"
          >
            Enviar
          </Button>
        </div>
        <div className="w-80 h-80 bg-transparent rounded-full border-2 border-primary-foreground hidden md:block absolute -top-24 -left-40" />
        <div className="w-80 h-80 bg-transparent rounded-full border-2 border-primary-foreground hidden md:block absolute -top-40 -left-24" />
        <div className="w-80 h-80 bg-transparent rounded-full border-2 border-primary-foreground hidden md:block absolute -top-24 -right-40" />
        <div className="w-80 h-80 bg-transparent rounded-full border-2 border-primary-foreground hidden md:block absolute -top-40 -right-24" />
      </div>
    </section>
  );
}
