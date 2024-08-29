import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Courses } from '@/types/courses';
import { NotebookTabsIcon, Timer } from 'lucide-react';

interface Props {
  course: Courses;
}

export default function ContentCourse({ course }: Props) {
  return (
    <div className="px-4 ">
      <span className="font-semibold text-lg">Contenido Del curso</span>
      <Accordion type="multiple" className="w-full" defaultValue={['item-1']}>
        {course.expand?.modules.map((module, index) => (
          <AccordionItem key={module.id} value={module.id}>
            <AccordionTrigger>
              {index + 1}. {module.title}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4">
              {module.expand?.sessions.map((session) => (
                <div key={session.id} className="mb-2 ml-4 flex flex-col gap-2">
                  <span className="font-semibold flex gap-2 items-center">
                    <NotebookTabsIcon size="16" />
                    {session.title}
                  </span>
                  <p className="ml-8">{session.description}</p>
                  <span className="font-light ml-8 flex gap-1 items-center text-gray-500">
                    <Timer size="12" />
                    Duración: {session.duration} minutos
                  </span>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
