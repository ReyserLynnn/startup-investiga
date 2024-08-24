/* eslint-disable jsx-a11y/media-has-caption */
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { HeartIcon } from 'lucide-react';

type ToolsModalProps = {
  logo: string;
  name: string;
  homepage: string;
  video: string;
  tags: string[];
  numberLikes: number;
  description: string;
};

export default function ToolsModal({
  description, homepage, logo, name, numberLikes, tags, video,
}: ToolsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex items-center justify-center p-0 hover:scale-105 transition-transform rounded-md relative w-32 h-32 group"
        >
          <img
            src={logo}
            alt={name}
            className="w-full h-auto rounded-lg"
          />
          <img src={logo} alt={name} className="absolute top-0 left-0 blur-xl -z-10 opacity-0 w-full h-auto group-hover:opacity-100 transition-all rounded-lg" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <div className="w-full flex justify-between items-center relative">
            <a className="text-4xl font-bold w-full text-center hover:underline" href={homepage}>
              {name}
            </a>
            <Button className="flex gap-2 absolute top-0 right-0" variant="ghost">
              {numberLikes}
              <HeartIcon />
            </Button>
          </div>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-2xl">
              Descripcion
            </h2>
            <p>
              {description}
            </p>
            <p>
              {description}
            </p>
          </div>
          <div className="mt-4 w-full flex justify-center">
            <video
              className="w-full max-w-2xl aspect-video"
              src={video}
              controls
            />
          </div>
        </div>
        <DialogFooter>
          <div className="flex justify-between w-full">
            <div className="flex gap-2">
              {
              tags.map((tag) => (
                <Button key={tag} variant="ghost">
                  {tag}
                </Button>
              ))
            }
            </div>
            <Button type="submit">Ver cursos</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
