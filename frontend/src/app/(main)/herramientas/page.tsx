import ToolsModal from '@/components/pages/herramientas/ToolsModal';
import pb from '@/lib/pocketbase';
import {
  Collections,
  expandFields,
  getImageUrl,
  ToolsIa,
  ToolsIAFields,
} from '@/types/pb';

export const revalidate = 0;

const getTools = async () => {
  const client = pb.getClient();
  const tools = await client.collection(Collections.TOOLS_IA).getFullList({
    expand: expandFields([ToolsIAFields.LIKES, ToolsIAFields.TAGS]),
  });

  return tools as ToolsIa[];
};

export default async function HerramientasPage() {
  const tools = await getTools();

  return (
    <main className="w-full flex-1 flex justify-center items-start py-20">
      <section className="flex flex-col items-center justify-start w-full max-w-6xl gap-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Herramientas mas importantes de
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {' '}
            IA{' '}
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-full gap-20 justify-items-center">
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
              video="https://res.cloudinary.com/dazt6g3o1/video/upload/v1724428962/juvdebis2n2bkoioxd08.mp4"
              key={herramienta[ToolsIAFields.ID]}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
