import Bulletin from '@/components/pages/home/Bulletin';
import { Cta } from '@/components/pages/home/Cta';
import { Hero } from '@/components/pages/home/Hero';
import Opinions from '@/components/pages/home/Opinions';
import { PuntosFuertes } from '@/components/pages/home/PuntosFuertes';
import { ToolsIA } from '@/components/pages/home/ToolsIA';
import { ScrollToTop } from '@/components/pages/layout/ScrollToTop';

export default function Home() {
  return (
    <main>
      <Hero />
      <PuntosFuertes />
      {/* 
      <Cta2 /> */}

      <ToolsIA />
      <Cta />
      {/* <Docentes /> */}
      <Opinions />
      <Bulletin />
      <ScrollToTop />
    </main>
  );
}
