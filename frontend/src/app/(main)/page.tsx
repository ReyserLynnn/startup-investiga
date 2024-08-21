import Bulletin from '@/components/pages/home/Bulletin';
import { Cta } from '@/components/pages/home/Cta';
import { Docentes } from '@/components/pages/home/Docentes';
import { Hero } from '@/components/pages/home/Hero';
import Opinions from '@/components/pages/home/Opinions';
import { PuntosFuertes } from '@/components/pages/home/PuntosFuertes';
import { ToolsIA } from '@/components/pages/home/ToolsIA';
import { ScrollToTop } from '@/components/pages/layout/ScrollToTop';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center w-full ">
      <Hero />
      <PuntosFuertes />
      <ToolsIA />
      <Cta />
      <Docentes />
      <Opinions />
      <Bulletin />
      <ScrollToTop />
    </main>
  );
}
