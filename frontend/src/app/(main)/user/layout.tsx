import SideBarUser from '@/components/pages/user/SideBar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-grow w-full h-full bg-white">
      <div className="container mx-auto flex flex-col py-10 gap-5">
        <SideBarUser />
        <section className="w-full h-ful px-4">{children}</section>
      </div>
    </main>
  );
}
