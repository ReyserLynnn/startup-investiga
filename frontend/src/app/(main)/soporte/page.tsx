import Benefit from '@/components/pages/soporte/Benefit';
import { FAQ } from '@/components/pages/soporte/FAQ';
import Feature from '@/components/pages/soporte/Features';
import Title from '@/components/pages/soporte/Title';

export default function SoportePage() {
  return (
    <div className="flex-1 w-full flex items-center justify-center flex-col">
      <Title />
      <Feature />
      <Benefit />
      <FAQ />
    </div>
  );
}
