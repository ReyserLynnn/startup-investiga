/* eslint-disable no-mixed-operators */
/* eslint-disable consistent-return */
/* eslint-disable import/no-named-as-default */
import { NextRequest, NextResponse } from 'next/server';
import pb from './lib/pocketbase';

export async function middleware(request: NextRequest) {
  console.log(`[middleware] ${request.method} ${request.url}`);

  const isLoggedIn = await pb.isAuthenticated(request.cookies as any);

  const authPaths = ['/login', '/register'];

  if (request.nextUrl.pathname && authPaths.some((path) => request.nextUrl.pathname.startsWith(path))) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return;
  }

  /*
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

  */

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
