import Footer from '@/components/pages/layout/Footer';
import InfoPage from '@/components/pages/layout/Info';
import NavBar from '@/components/pages/layout/NavBar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <InfoPage />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
