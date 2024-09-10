import FooterBlog from '@/components/Blog/FooterBlog';
import NavBarBlog from '@/components/Blog/NavBarBlog';
import InfoPage from '@/components/pages/layout/Info';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blog de Investiga',
  decription: 'blog de la plataforma Investiga',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn(inter.className, 'min-h-screen bg-white text-black')}>
      <InfoPage />
      <div className="wrapper">
        <NavBarBlog />
        {children}
        <FooterBlog />
      </div>
    </div>
  );
}
