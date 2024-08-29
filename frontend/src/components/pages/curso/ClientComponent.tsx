'use client';
import { Button } from '@/components/ui/button';
import Player from 'next-video/player';

import { capitalizeFirstLetter, cn, getImageUrl } from '@/lib/utils';
import { PlayCircle, StarIcon } from 'lucide-react';
import Image from 'next/image';

import { Comments } from '@/types/comments';
import { Courses, CoursesFields } from '@/types/courses';
import { useEffect, useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Sessions, SessionsFields } from '@/types/sessions';
import BuyCardCourse from './BuyCardCourse';
import CommentsCourse from './CommentsCourse';
import ContentCourse from './ContentCourse';
import CtaCourse from './CtaCourse';
import PublicityCourse from './PublicityCourse';

const labelInfo = ['Descripción', 'Conoce más', 'Reseñas'];

interface Props {
  params: { course: Courses; comments: Comments[]; hasAccess: Boolean };
}

export default function ClientComponent({ params }: Props) {
  const { course, comments, hasAccess } = params;

  const [info, setInfo] = useState(labelInfo[0]);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [posterUrl, setPosterUrl] = useState<string>(getInitialPosterUrl());

  function getInitialPosterUrl() {
    return getImageUrl({
      url: course[CoursesFields.IMAGE],
      collectionId: course.collectionId,
      id: course[CoursesFields.ID],
    });
  }

  useEffect(() => {
    const session = course.expand?.modules
      .flatMap((module) => module.expand?.sessions || [])
      .find((session) => session.id === selectedSession);

    if (session) {
      const newUrl = getImageUrl({
        url: session[SessionsFields.POSTER],
        collectionId: session.collectionId,
        id: session[SessionsFields.ID],
      });
      setPosterUrl(newUrl);
    }
  }, [selectedSession, course]);

  const handleClick = (name: string) => {
    setInfo(name);
  };

  const handleModuleChange = (moduleId: string) => {
    setSelectedModule(moduleId);
    setSelectedSession(null);
  };

  const handleSessionChange = (session: Sessions) => {
    setSelectedSession(session.id);
  };

  return (
    <main
      id="CoursePage"
      className="relative w-full h-full overflow-hidden bg-white my-10"
    >
      <div className="container mx-auto flex-1 flex flex-col gap-10 px-3">
        <div className="flex flex-col gap-4 justify-center">
          <h3 className="text-3xl font-semibold">
            {course[CoursesFields.NAME]}
          </h3>
          <div className="flex gap-2 text-sm">
            <span className="text-red-500">Francisco Rengifo</span>
            <span className="flex items-center gap-1">
              <StarIcon size="18" className="text-yellow-300" />
              4.8
            </span>
            <span className="text-gray-400">
              ({course[CoursesFields.ALUMNS].length} alumnos)
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-[70%]">
            <div className="w-full h-auto rounded-2xl overflow-hidden aspect-video">
              <Player
                className="aspect-video"
                src="https://res.cloudinary.com/dazt6g3o1/video/upload/v1724428962/juvdebis2n2bkoioxd08.mp4"
                accentColor="#0cc0df"
                loop
                // autoPlay
                // muted
              >
                <Image
                  slot="poster"
                  className="aspect-video object-cover"
                  src={posterUrl} // Update poster URL based on selected session
                  width={800}
                  height={450}
                  alt="Poster del curso"
                />
              </Player>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:w-[30%]">
            {hasAccess ? (
              <div className="text-left">
                {course.expand?.modules && (
                  <Accordion type="single" className="w-full" collapsible>
                    {course.expand.modules.map((module, index) => (
                      <AccordionItem key={module.id} value={module.id}>
                        <AccordionTrigger
                          onClick={() => handleModuleChange(module.id)}
                          className={cn(
                            selectedModule === module.id ? 'bg-gray-50' : '',
                            'text-left hover:no-underline p-3 rounded-lg',
                          )}
                        >
                          Módulo {index + 1}: {module.title}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col">
                          {module.expand?.sessions.map((session) => (
                            <div
                              key={session.id}
                              className={`flex flex-col gap-2 cursor-pointer hover:bg-gray-100 p-3 rounded-lg ${selectedSession === session.id ? 'bg-gray-100' : ''}`}
                              onClick={() => handleSessionChange(session)}
                            >
                              <span className="font-semibold flex gap-2 items-center">
                                {session.title}
                              </span>
                              <span className="font-light flex gap-1 items-center text-gray-500">
                                <PlayCircle size="12" />
                                Duración: {session.duration} minutos
                              </span>
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
              </div>
            ) : (
              <BuyCardCourse course={course} />
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex flex-col gap-8 md:w-[70%]">
            <div className="flex gap-2">
              {labelInfo.map((label) => (
                <Button
                  key={label}
                  variant={info === label ? 'linkHover1' : 'linkHover2'}
                  onClick={() => handleClick(label)}
                  className={`relative ${info === label ? 'font-medium hover:after:scale-x-100' : 'font-normal'}`}
                >
                  {capitalizeFirstLetter(label)}
                </Button>
              ))}
            </div>

            <ContentCourse course={course} />

            <div className="flex flex-col gap-2 ml-4">
              <span className="font-semibold">Acerca del Curso</span>
              <div
                className="joditBox font-light"
                dangerouslySetInnerHTML={{
                  __html: course[CoursesFields.DESCRIPTION],
                }}
              />
            </div>

            <CommentsCourse comments={comments} />
          </div>

          <PublicityCourse />
        </div>

        <CtaCourse />
      </div>
    </main>
  );
}
