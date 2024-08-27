'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

const BreadPath = ({ title }: { title: string }) => {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter((path) => path);

  return (
    <div className="relative mx-auto flex justify-center">
      <div className="h-32 w-screen transform flex items-center bg-[#edf9fa] ">
        <div className="container flex flex-col gap-2">
          <span className="text-xl font-semibold">{title}</span>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {pathParts.map((part, index) => {
                const isLast = index === pathParts.length - 1;
                const href = `/${pathParts.slice(0, index + 1).join('/')}`;
                return (
                  <Fragment key={href}>
                    <BreadcrumbSeparator />
                    {!isLast ? (
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link href={href}>{part}</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    ) : (
                      <BreadcrumbItem>
                        <BreadcrumbLink>
                          <BreadcrumbPage className="text-primary capitalize">
                            {part}
                          </BreadcrumbPage>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    )}
                  </Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

export default BreadPath;
