'use client';
import { Button } from '@/components/ui/button';
import { capitalizeFirstLetter } from '@/lib/utils';
import { Comments } from '@/types/comments';
import { Courses } from '@/types/courses';
import { Users } from '@/types/user';
import { useState } from 'react';
import AboutCourse from './AboutCourse';
import CommentsCourse from './CommentsCourse';
import ContentCourse from './ContentCourse';
import CtaCourse from './CtaCourse';
import PlayerCourse from './PlayerCourse';
import PublicityCourse from './PublicityCourse';
import TitleCourse from './TitleCourse';

const labelInfo = ['Descripción', 'Conoce más', 'Reseñas'];

interface Props {
  course: Courses;
  comments: Comments[];
  hasAccess: Boolean;
  user: Users;
}

export default function ClientComponent({
  course,
  comments,
  hasAccess = false,
  user,
}: Props) {
  const [info, setInfo] = useState(labelInfo[0]);

  const handleClick = (name: string) => {
    setInfo(name);
  };

  return (
    <main
      id="CoursePage"
      className="relative w-full h-full overflow-hidden bg-white my-10"
    >
      <div className="container mx-auto flex-1 flex flex-col gap-10 px-3">
        <TitleCourse course={course} />

        <PlayerCourse course={course} hasAccess={hasAccess} user={user} />

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

            {info === 'Reseñas' ? (
              <CommentsCourse comments={comments} />
            ) : info === 'Conoce más' ? (
              <AboutCourse course={course} />
            ) : (
              <>
                <ContentCourse course={course} />
                <AboutCourse course={course} />
                <CommentsCourse comments={comments} />
              </>
            )}
          </div>

          <PublicityCourse />
        </div>

        <CtaCourse />
      </div>
    </main>
  );
}
