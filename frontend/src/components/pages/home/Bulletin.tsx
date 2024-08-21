import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Bulletin() {
  return (
    <section className="w-full max-w-6xl px-6 flex flex-col mx-6 bg-primary-background rounded-2xl items-center gap-2 py-24 my-24 relative overflow-hidden">
      <h1 className="text-primary-foreground text-4xl font-bold text-center">
        Suscríbete a nuestro boletín
      </h1>
      <span className="text-primary-foreground text-lg text-center">
        Mantente al tanto de nuestras novedades y actualizaciones.
      </span>
      <div className="bg-primary-foreground rounded-full px-2 py-2 flex gap-2 mt-10">
        <Input type="email" className="rounded-full" placeholder="Correo electronico" />
        <Button variant="secondary" className="rounded-full px-12 text-base h-auto py-3">
          Enviar
        </Button>
      </div>
      <div className="w-80 h-80 bg-transparent rounded-full border-2 border-primary-foreground hidden md:block absolute -top-24 -left-40" />
      <div className="w-80 h-80 bg-transparent rounded-full border-2 border-primary-foreground hidden md:block absolute -top-40 -left-24" />
      <div className="w-80 h-80 bg-transparent rounded-full border-2 border-primary-foreground hidden md:block absolute -top-24 -right-40" />
      <div className="w-80 h-80 bg-transparent rounded-full border-2 border-primary-foreground hidden md:block absolute -top-40 -right-24" />
    </section>
  );
}
