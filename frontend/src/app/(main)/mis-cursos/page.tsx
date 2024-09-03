import ClientComponentMisCursos from '@/components/pages/mis-cursos/ClientComponent';
import pb from '@/lib/pocketbase';
import { Courses } from '@/types/courses';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const getUser = async () => {
  const cookieStore = cookies();
  const result = await pb.getUser(cookieStore);

  return result as any;
};

export default async function MisCursosPage() {
  const user = await getUser();

  if (!user) {
    redirect('/cursos');
  }

  const userComplete = await pb.getMyCourses(user.id);

  const myCourses = userComplete.expand?.courses as Courses[];

  return (
    <main className="flex-grow relative bg-white w-full h-full overflow-hidden my-10">
      <ClientComponentMisCursos courses={myCourses} />
    </main>
  );
}
