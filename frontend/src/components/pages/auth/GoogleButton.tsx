/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-named-as-default */

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Cookies from 'js-cookie';

import pb from '@/lib/pocketbase';
import { useRouter } from 'next/navigation';
import GoogleIcon from '@/components/icons/GoogleIcon';
import { Loader2 } from 'lucide-react';

interface GoogleButtonProps {
  classname?: string;
  formDataRegister?: FormDataProps;
}

interface FormDataProps {
  name?: string;
  lastname?: string;
  phone?: string;
  institution?: string;
  degree?: string;
}

export default function GoogleButton({ classname, formDataRegister }: GoogleButtonProps) {
  const route = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      pb.client.authStore.clear();
      const authData = await pb.client.collection('users').authWithOAuth2({
        provider: 'google',
      });

      const { record, token } = authData;
      record.token = token;
      Cookies.set('pb_auth', pb.client.authStore.exportToCookie());

      const { meta } = authData;
      if (meta?.isNew) {
        const formData = new FormData();

        for (const key in formDataRegister) {
          if (Object.hasOwnProperty.call(formDataRegister, key)) {
            const value = formDataRegister[key as keyof FormDataProps];
            if (value) {
              formData.append(key, value);
            }
          }
        }

        const response = await fetch(meta.avatarUrl);
        if (response.ok) {
          const file = await response.blob();
          formData.append('avatar', file);
        }

        await pb.client
          .collection('users')
          .update(authData.record.id, formData);
      }

      localStorage.removeItem('pocketbase_auth');
      route.replace('/');
      route.refresh();
    } catch (error: any) {
      console.error('Error during authentication:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      type="button"
      variant="ghost"
      className={`${classname} shadow-sm shadow-gray-200 text-slate-600 hover:text-slate-900 gap-3 hover:bg-gray-50`}
      disabled={loading}
      onClick={handleGoogleLogin}
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <GoogleIcon className="w-auto h-5" />
      )}
      Continuar con google
    </Button>
  );
}
