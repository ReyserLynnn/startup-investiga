import Footer from '@/components/pages/layout/Footer';
import NavBar from '@/components/pages/layout/NavBar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
