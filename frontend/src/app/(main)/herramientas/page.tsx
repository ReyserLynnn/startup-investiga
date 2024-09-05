import ToolsModal from '@/components/pages/herramientas/ToolsModal';
import pb from '@/lib/pocketbase';
import { getImageUrl } from '@/lib/utils';
import { ToolsIAFields } from '@/types/toolsIA';

export const revalidate = 0;

export default async function HerramientasPage() {
  const tools = await pb.getTools();

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-full gap-x-10 md:gap-x-16 gap-y-20 justify-items-center">
          {tools.map((herramienta) => (
            <ToolsModal
              description={herramienta[ToolsIAFields.DESCRIPTION]}
              homepage={herramienta[ToolsIAFields.PAGE_URL]}
              logo={getImageUrl({
                url: herramienta[ToolsIAFields.LOGO],
                collectionId: herramienta[ToolsIAFields.COLLECTION_ID],
                id: herramienta[ToolsIAFields.ID],
              })}
              name={herramienta[ToolsIAFields.NAME]}
              numberLikes={Math.floor(Math.random() * 100)}
              tags={
                herramienta[ToolsIAFields.EXPAND]
                  ? herramienta[ToolsIAFields.EXPAND][ToolsIAFields.TAGS]
                  : []
              }
              key={herramienta[ToolsIAFields.ID]}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
