/* eslint-disable import/no-named-as-default */

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Cookies from 'js-cookie';

import { Home } from 'lucide-react';
import { pb } from '@/lib/pocketbase';
import { useRouter } from 'next/navigation';

function GoogleButton() {
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

        const response = await fetch(meta.avatarUrl);

        if (response.ok) {
          const file = await response.blob();
          formData.append('avatar', file);
        }

        formData.append('name', meta.name);
        await pb.client.collection('users').update(authData.record.id, formData);
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
      variant="outline"
      className="border border-slate-500 text-slate-900 hover:text-slate-900"
      size="lg"
      disabled={loading}
      onClick={handleGoogleLogin}
    >
      <Home className="mr-2 h-6 w-6" />
      Continue with Google
    </Button>
  );
}

export default GoogleButton;
