import ClientComponent from '@/components/pages/curso/ClientComponent';
import pb from '@/lib/pocketbase';
import { Courses } from '@/types/courses';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const courses = await pb.getAnyCourses();

  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CoursePage({
  params,
}: {
  params: { slug: string };
}) {
  const course = (await pb.client
    .collection('courses')
    .getFirstListItem(`slug="${params.slug}"`, {
      expand: 'modules,modules.sessions,tags',
    })) as Courses;

  if (!course) {
    notFound();
  }

  return (
    <div>
      <ClientComponent params={{ course: course }} />
    </div>
  );
}
