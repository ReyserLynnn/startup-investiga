import FilterTools from '@/components/pages/herramientas/FilterTools';
import SearchBar from '@/components/pages/herramientas/SearchBar';
import pb from '@/lib/pocketbase';

export const revalidate = 0;

export default async function HerramientasPage() {
  const tools = await pb.getTools();
  const tags = await pb.getTags();

  return (
    <main className="w-full flex-1 flex justify-center items-start py-20">
      <section className="flex flex-col items-center justify-start w-full max-w-6xl gap-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Herramientas más importantes de
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {' '}
            IA{' '}
          </span>
        </h2>
        <div className="w-full px-6">
          <SearchBar tools={tools} />
        </div>
        <FilterTools tools={tools} tags={tags} />
      </section>
    </main>
  );
}
