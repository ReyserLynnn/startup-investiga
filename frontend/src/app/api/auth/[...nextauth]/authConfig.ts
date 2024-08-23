import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import {
  CLIENT_ID_GOOGLE, CLIENT_SECRET_GOOGLE,
} from '@/config/global';

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: CLIENT_ID_GOOGLE,
      clientSecret: CLIENT_SECRET_GOOGLE,
    }),
  ],
};
