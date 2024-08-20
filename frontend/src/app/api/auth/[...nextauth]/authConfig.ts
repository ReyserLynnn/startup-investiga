import {
  CLIENT_ID_GOOGLE, CLIENT_SECRET_GOOGLE, NEXT_SECRET,
} from '@/config/global';
import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: CLIENT_ID_GOOGLE,
      clientSecret: CLIENT_SECRET_GOOGLE,
    }),
  ],
  secret: NEXT_SECRET,
  callbacks: {
    async session({ session }) {
      if (!session.user) return session;

      if (!session.user.email || !session.user.name || !session.user.image) return session;

      return {
        ...session,
        user: {
          ...session.user,
          id: crypto.randomUUID(),
        },
      };
    },
  },
};
