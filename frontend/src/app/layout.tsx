import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Investiga',
  description: 'Plataforma educativa educación científica',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="wf-loaded-stage2 motion-on">
      <body
        className={cn(
          poppins.className,
          inter.className,
          'flex flex-col min-h-svh w-full avif ',
        )}
        suppressHydrationWarning
      >
        {children}
        <Toaster richColors expand />
      </body>
    </html>
  );
}
