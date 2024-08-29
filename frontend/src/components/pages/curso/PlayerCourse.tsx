import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn, getImageUrl, getVideoUrl } from '@/lib/utils';
import { Courses } from '@/types/courses';
import { Sessions, SessionsFields } from '@/types/sessions';
import { Users } from '@/types/user';
import { PlayCircle } from 'lucide-react';
import Player from 'next-video/player';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import BuyCardCourse from './BuyCardCourse';

interface Props {
  course: Courses;
  hasAccess: Boolean;
  user: Users;
}

// const saveProgress = debounce(
//   async (
//     user: string,
//     module: string,
//     session: string,
//     pausedAt: number,
//     progress: number,
//   ) => {
//     try {
//       console.log(user);
//       console.log(module);
//       console.log(session);
//       console.log(pausedAt);
//       console.log(progress);

//       const data = {
//         user: user,
//         module: module,
//         session: session,
//         progressSession: progress,
//       };

//       try {
//         const result = await pb.client
//           .collection('progress')
//           .getFirstListItem(
//             `user="${user}" && module="${module}" && session="${session}"`,
//           );

//         if (result && progress > result.progressSession) {
//           await pb.client.collection('progress').update(result.id, {
//             progressSession: progress,
//           });
//         }
//       } catch (error) {
//         await pb.client.collection('progress').create(data);
//       }

//       console.log('Progreso guardado');
//     } catch (error) {
//       console.error('Error al guardar el progreso:', error);
//     }
//   },
//   2000,
// );

export default function PlayerCourse({ course, hasAccess, user }: Props) {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [posterUrl, setPosterUrl] = useState<string>(getInitialPosterUrl());
  const [videoUrl, setVideoUrl] = useState<string>(getInitialVideoUrl());
  const [videoEnded, setVideoEnded] = useState<Boolean>(false);

  function getInitialVideoUrl() {
    // return getVideoUrl({
    //   url: course.presentation_video,
    //   collectionId: course.collectionId,
    //   id: course.id,
    // });

    return 'https://res.cloudinary.com/dazt6g3o1/video/upload/v1724428962/juvdebis2n2bkoioxd08.mp4';
  }

  function getInitialPosterUrl() {
    return getImageUrl({
      url: course.image,
      collectionId: course.collectionId,
      id: course.id,
    });
  }

  useEffect(() => {
    const session = course.expand?.modules
      .flatMap((module) => module.expand?.sessions || [])
      .find((session) => session.id === selectedSession);

    if (session) {
      const newPosterUrl = getImageUrl({
        url: session[SessionsFields.POSTER],
        collectionId: session.collectionId,
        id: session[SessionsFields.ID],
      });
      const newVideoUrl = getVideoUrl({
        url: session[SessionsFields.VIDEO],
        collectionId: session.collectionId,
        id: session[SessionsFields.ID],
      });
      setPosterUrl(newPosterUrl);
      setVideoUrl(newVideoUrl);
    }
  }, [selectedSession, course]);

  const handleModuleChange = (moduleId: string) => {
    setSelectedModule(moduleId);
    setSelectedSession(null);
  };

  const handleSessionChange = (session: Sessions) => {
    setSelectedSession(session.id);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-[70%]">
        <div className="w-full h-auto rounded-2xl overflow-hidden aspect-video">
          <Player
            className="aspect-video"
            src={videoUrl}
            accentColor="#0cc0df"
            // autoPlay
            // muted

            onEnded={() => {
              console.log('El video terminó');
              setVideoEnded(true);
            }}
            onPause={(event) => {
              if (!videoEnded) {
                const playerElement = event.target as HTMLMediaElement;
                const pausedAt = Math.round(playerElement.currentTime);
                const progress = Math.ceil(
                  (pausedAt / playerElement.duration) * 100,
                );

                if (!videoEnded) {
                  console.log(
                    `Pausó en el segundo: ${pausedAt}, el progreso es de ${progress}`,
                  );
                }

                // if (selectedModule && selectedSession) {
                //   saveProgress(
                //     user.id,
                //     selectedModule,
                //     selectedSession,
                //     pausedAt,
                //     progress,
                //   );
                // }
              }
            }}
          >
            <Image
              slot="poster"
              className="aspect-video object-cover"
              src={posterUrl}
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
                {course.expand.modules.map((module, indexModule) => (
                  <AccordionItem key={module.id} value={module.id}>
                    <AccordionTrigger
                      onClick={() => handleModuleChange(module.id)}
                      className={cn(
                        selectedModule === module.id ? 'bg-gray-100' : '',
                        'text-left hover:no-underline p-3 rounded-lg',
                      )}
                    >
                      Módulo {indexModule + 1}: {module.title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col">
                      {module.expand?.sessions.map((session, index) => (
                        <div
                          key={session.id}
                          className={`flex flex-col gap-2 cursor-pointer hover:bg-gray-100 p-3 rounded-lg ${selectedSession === session.id ? 'bg-gray-100' : ''}`}
                          onClick={() => handleSessionChange(session)}
                        >
                          <span className="font-semibold flex gap-2 items-center">
                            {indexModule + 1}.{index + 1} {session.title}
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
  );
}
