import { CustomLink } from '@/components/ui/CustomLink';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronDown } from 'lucide-react';

export default function Soporte() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex gap-3 items-center hover:cursor-pointer hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md text-sm font-medium">
          <span>Soporte</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-40">
        <div className="flex flex-col items-center">
          <CustomLink href="/quienes-somos" variant="ghost" className="w-full">
            Quiénes somos?
          </CustomLink>
          <CustomLink href="/contacto" variant="ghost" className="w-full">
            Contacto
          </CustomLink>
          <CustomLink href="/faq" variant="ghost" className="w-full">
            FAQ&apos;s
          </CustomLink>
        </div>
      </PopoverContent>
    </Popover>
  );
}
