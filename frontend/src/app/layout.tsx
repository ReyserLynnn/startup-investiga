import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

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
    <html lang="en" className="h-full wf-loaded-stage2 motion-on">
      <body
        className={cn(
          poppins.className,
          inter.className,
          'w-full min-h-full avif flex flex-col',
        )}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
