import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function PublicityCourse() {
  return (
    <div className="flex flex-col gap-2 md:w-[30%] bg-[#1B283F] h-96 text-white px-5 py-10 rounded-2xl">
      <span className="self-start bg-primary px-2 py-1 rounded-sm text-xs font-semibold">
        CURSO EN VIVO
      </span>
      <span className="font-light text-lg">Reyser Zapata</span>
      <h3 className="text-2xl font-semibold leading-normal">
        Masterclass en Chatgpt para articulos científicos
      </h3>
      <Button
        className="self-start bg-transparent border border-secondary text-secondary hover:bg-transparent mt-5"
        variant="expandIcon"
        Icon={ArrowRight}
        iconPlacement="right"
      >
        Saber Más
      </Button>
    </div>
  );
}
