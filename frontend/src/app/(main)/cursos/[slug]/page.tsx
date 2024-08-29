import ClientComponent from '@/components/pages/curso/ClientComponent';
import pb from '@/lib/pocketbase';
import { Courses, CoursesFields } from '@/types/courses';
import { Users } from '@/types/user';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const courses = await pb.getAnyCourses();

  return courses.map((course) => ({
    slug: course.slug,
  }));
}

const getUser = async () => {
  await pb.client.collection('users').authRefresh();

  const cookieStore = cookies();
  const result = await pb.getUser(cookieStore);

  return result as Users;
};

const getCourseBySlug = async (slug: string) => {
  return (await pb.client
    .collection('courses')
    .getFirstListItem(`slug="${slug}"`, {
      expand: 'modules,modules.sessions,tags',
    })) as Courses;
};

export default async function CoursePage({
  params,
}: {
  params: { slug: string };
}) {
  const course = await getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  const comments = await pb.getCommentsById(course[CoursesFields.ID]);

  const user = await getUser();

  const hasAccess = user?.courses.includes(course[CoursesFields.ID]);

  return (
    <div>
      <ClientComponent
        params={{ course: course, comments: comments, hasAccess: hasAccess }}
      />
    </div>
  );
}
