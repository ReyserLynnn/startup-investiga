/* eslint-disable react/no-danger */

'use client';

import { Search } from 'lucide-react';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ToolsIa, ToolsIAFields } from '@/types/toolsIA';
import { getImageUrl } from '@/lib/utils';
import ToolsModalSearch from './ToolsModalSearch';

export default function SearchBar({ tools }: { tools: ToolsIa[] }) {
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState('');
  const [toolsPool, setToolsPool] = useState(tools);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((op) => !op);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
    setToolsPool(
      tools.filter(
        (t) =>
          t[ToolsIAFields.NAME]
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          t[ToolsIAFields.EXPAND]?.[ToolsIAFields.TAGS].some((tag) =>
            tag.name.toLowerCase().includes(e.target.value.toLowerCase()),
          ),
      ),
    );
  };

  return (
    <>
      <Button
        variant="outline"
        className="justify-start h-auto underlineEffect w-full"
        onClick={() => setOpen(true)}
      >
        <Search className="w-7 h-7 md:mr-4" />
        <span className="min-w-32 text-start flex text-base font-normal pl-4">
          Buscar Herramienta
        </span>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl w-full">
          <DialogHeader>
            <div className="w-full flex justify-between items-center">
              <DialogTitle>Buscar una palabra</DialogTitle>
            </div>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="w-full flex gap-3 items-center">
              <Input
                type="text"
                placeholder="Buscar..."
                className="w-full p-2 border-zinc-300"
                value={search}
                onChange={handleSearch}
              />
              <Search className="w-8 h-8 text-zinc-600" />
            </div>
            <ScrollArea className="max-h-96">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 pr-3 justify-items-center">
                {toolsPool.map((tool) => (
                  <ToolsModalSearch
                    description={tool[ToolsIAFields.DESCRIPTION]}
                    homepage={tool[ToolsIAFields.PAGE_URL]}
                    key={tool[ToolsIAFields.ID]}
                    name={tool[ToolsIAFields.NAME]}
                    numberLikes={Math.floor(Math.random() * 100)}
                    tags={
                      tool[ToolsIAFields.EXPAND]
                        ? tool[ToolsIAFields.EXPAND][ToolsIAFields.TAGS]
                        : []
                    }
                    logo={getImageUrl({
                      url: tool[ToolsIAFields.LOGO],
                      collectionId: tool[ToolsIAFields.COLLECTION_ID],
                      id: tool[ToolsIAFields.ID],
                    })}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
