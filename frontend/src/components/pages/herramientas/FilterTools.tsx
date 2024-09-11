'use client';

import { ToolsIa, ToolsIAFields } from '@/types/toolsIA';
import { cn, getImageUrl } from '@/lib/utils';
import { Tags, TagsFields } from '@/types/tags';
import { useEffect, useState } from 'react';
import ToolsModal from './ToolsModal';

export default function FilterTools({
  tools,
  tags,
}: {
  tools: ToolsIa[];
  tags: Tags[];
}) {
  const [pool, setPool] = useState(tools);
  const [search, setSearch] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    if (search.includes(tag)) {
      setSearch(search.filter((t) => t !== tag));
    } else {
      setSearch([...search, tag]);
    }
  };

  useEffect(() => {
    if (search.length === 0) {
      setPool(tools);
      return;
    }

    setPool(
      tools.filter((tool) =>
        search.every((t) => tool[ToolsIAFields.TAGS].includes(t)),
      ),
    );
  }, [search, tools]);

  return (
    <div className="flex flex-col w-full gap-16">
      <div className="flex flex-col px-6">
        <h2 className="font-semibold text-xl">Filtros:</h2>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          {tags.map((tag) => (
            <button
              key={tag[TagsFields.ID]}
              type="button"
              className={cn(
                'bg-gray-100 rounded-full px-4 py-2 text-xs md:text-sm shadow-zinc-300 shadow-md hover:border-primary border border-transparent',
                {
                  'bg-primary': search.includes(tag[TagsFields.ID]),
                },
              )}
              onClick={() => toggleTag(tag[TagsFields.ID])}
            >
              {tag[TagsFields.NAME]}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-full gap-x-10 md:gap-x-16 gap-y-20 justify-items-center">
        {pool.map((herramienta) => (
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
    </div>
  );
}
