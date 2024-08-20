import Bulletin from '@/components/pages/home/Bulletin';
import Opinions from '@/components/pages/home/Opinions';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center w-full">
      <Opinions />
      <Bulletin />
    </main>
  );
}
