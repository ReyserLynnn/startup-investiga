import Bulletin from '@/components/pages/home/Bulletin';
import { Cta } from '@/components/pages/home/Cta';
import { Hero } from '@/components/pages/home/Hero';
import Opinions from '@/components/pages/home/Opinions';
import { PuntosFuertes } from '@/components/pages/home/PuntosFuertes';
import { ToolsIA } from '@/components/pages/home/ToolsIA';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center w-full">
      <Hero />
      <PuntosFuertes />
      <ToolsIA />
      <Cta />
      <Opinions />
      <Bulletin />
    </main>
  );
}
