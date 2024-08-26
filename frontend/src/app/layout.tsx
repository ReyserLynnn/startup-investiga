import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

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
    <html lang="en" className="h-full">
      <body
        className={cn(inter.className, 'w-full min-h-full avif')}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
