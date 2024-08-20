import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Footer from '@/components/pages/layout/Footer';
import NavBar from '@/components/pages/layout/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Inveztiga',
  description: 'Plataforma educativa educación científica',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'flex flex-col items-center justify-start min-h-screen')}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
